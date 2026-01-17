import sqlite3
import json
import os
from datetime import datetime
from typing import List, Dict, Optional, Any
from dataclasses import dataclass
import anthropic
from dotenv import load_dotenv

load_dotenv()


@dataclass
class Memory:
    """Data class for a memory entry"""
    id: Optional[int] = None
    user_message: str = ""
    assistant_response: str = ""
    embedding: Optional[List[float]] = None
    timestamp: str = ""
    metadata: Optional[Dict[str, Any]] = None
    key_info: Optional[str] = None  # 用户关键信息：喜好、计划等


class MemoryManager:
    """Manages long-term memory storage and retrieval using SQLite"""

    def __init__(self, db_path: str = "memory.db"):
        self.db_path = db_path
        self.client = anthropic.Anthropic()
        self._init_database()

    def _init_database(self):
        """Initialize the SQLite database with required tables"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()

            # Create memories table with key_info field
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS memories (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_message TEXT NOT NULL,
                    assistant_response TEXT NOT NULL,
                    embedding TEXT,
                    timestamp TEXT NOT NULL,
                    metadata TEXT,
                    key_info TEXT
                )
            """)

            # Create index on key_info for faster queries
            cursor.execute("""
                CREATE INDEX IF NOT EXISTS idx_key_info
                ON memories(key_info)
            """)

            # Migration: add key_info column if it doesn't exist
            cursor.execute("PRAGMA table_info(memories)")
            columns = [row[1] for row in cursor.fetchall()]
            if 'key_info' not in columns:
                cursor.execute("ALTER TABLE memories ADD COLUMN key_info TEXT")

            conn.commit()

    def _get_embedding(self, text: str) -> List[float]:
        """Get embedding for text using Claude API"""
        try:
            # Note: Claude API doesn't directly support embeddings.
            # This is a placeholder - you might want to use:
            # - OpenAI's embedding API
            # - Sentence Transformers (local)
            # - Other embedding services

            # For now, we'll use a simple word-based similarity
            # In production, replace with actual embeddings
            words = text.lower().split()
            # Create a simple hash-based embedding (256 dimensions)
            embedding = []
            for i in range(256):
                if i < len(words):
                    hash_val = hash(words[i]) % 1000 / 1000.0
                else:
                    hash_val = 0.0
                embedding.append(hash_val)
            return embedding
        except Exception as e:
            print(f"Error getting embedding: {e}")
            return [0.0] * 256

    def _cosine_similarity(self, a: List[float], b: List[float]) -> float:
        """Calculate cosine similarity between two vectors"""
        if not a or not b or len(a) != len(b):
            return 0.0

        dot_product = sum(x * y for x, y in zip(a, b))
        magnitude_a = sum(x * x for x in a) ** 0.5
        magnitude_b = sum(y * y for y in b) ** 0.5

        if magnitude_a == 0 or magnitude_b == 0:
            return 0.0

        return dot_product / (magnitude_a * magnitude_b)

    def _extract_key_info(self, user_message: str) -> str:
        """Extract key user information (preferences, plans, etc.) from user message"""
        # 使用 Claude API 提取关键信息
        try:
            prompt = f"""从以下用户消息中提取关键信息（如喜好、计划、习惯、重要的个人信息等）。
如果没有任何关键信息，返回空字符串。

用户消息: {user_message}

请以简洁的格式返回提取的关键信息，例如：
- 喜欢: 音乐、阅读
- 计划: 周末去旅行
- 习惯: 每天早起
- 信息: 叫张三，今年25岁

只返回提取的信息，不要其他解释。"""

            response = self.client.messages.create(
                model="claude-sonnet-4-20250514",
                max_tokens=500,
                messages=[{"role": "user", "content": prompt}]
            )
            key_info = response.content[0].text.strip()
            return key_info if key_info else ""
        except Exception as e:
            print(f"Error extracting key info: {e}")
            return ""

    def add_memory(
        self,
        user_message: str,
        assistant_response: str,
        metadata: Optional[Dict[str, Any]] = None,
        extract_key_info: bool = True
    ) -> int:
        """Add a new memory to the database"""
        timestamp = datetime.now().isoformat()
        embedding = self._get_embedding(f"{user_message} {assistant_response}")

        # 提取用户关键信息
        key_info = ""
        if extract_key_info:
            key_info = self._extract_key_info(user_message)

        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO memories
                (user_message, assistant_response, embedding, timestamp, metadata, key_info)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (
                user_message,
                assistant_response,
                json.dumps(embedding),
                timestamp,
                json.dumps(metadata) if metadata else None,
                key_info
            ))
            conn.commit()
            return cursor.lastrowid

    def search_memories(
        self,
        query: str,
        limit: int = 5,
        threshold: float = 0.5
    ) -> List[Memory]:
        """Search for relevant memories based on query"""
        query_embedding = self._get_embedding(query)

        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("""
                SELECT id, user_message, assistant_response,
                       embedding, timestamp, metadata, key_info
                FROM memories
            """)

            memories = []
            for row in cursor.fetchall():
                stored_embedding = json.loads(row['embedding'])
                similarity = self._cosine_similarity(query_embedding, stored_embedding)

                if similarity >= threshold:
                    memory = Memory(
                        id=row['id'],
                        user_message=row['user_message'],
                        assistant_response=row['assistant_response'],
                        embedding=stored_embedding,
                        timestamp=row['timestamp'],
                        metadata=json.loads(row['metadata']) if row['metadata'] else None,
                        key_info=row['key_info']
                    )
                    memories.append((memory, similarity))

            # Sort by similarity and return top results
            memories.sort(key=lambda x: x[1], reverse=True)
            return [m[0] for m in memories[:limit]]

    def get_recent_memories(self, limit: int = 10) -> List[Memory]:
        """Get the most recent memories"""
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("""
                SELECT id, user_message, assistant_response,
                       embedding, timestamp, metadata, key_info
                FROM memories
                ORDER BY timestamp DESC
                LIMIT ?
            """, (limit,))

            return [
                Memory(
                    id=row['id'],
                    user_message=row['user_message'],
                    assistant_response=row['assistant_response'],
                    embedding=json.loads(row['embedding']),
                    timestamp=row['timestamp'],
                    metadata=json.loads(row['metadata']) if row['metadata'] else None,
                    key_info=row['key_info']
                )
                for row in cursor.fetchall()
            ]

    def get_memory_count(self) -> int:
        """Get total number of memories"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT COUNT(*) FROM memories")
            return cursor.fetchone()[0]

    def clear_old_memories(self, keep_last_n: int = 1000):
        """Clear old memories, keeping only the most recent n"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                DELETE FROM memories
                WHERE id NOT IN (
                    SELECT id FROM memories
                    ORDER BY timestamp DESC
                    LIMIT ?
                )
            """, (keep_last_n,))
            conn.commit()

    def get_memories_for_context(
        self,
        current_query: str,
        max_memories: int = 5
    ) -> List[Dict[str, str]]:
        """Get relevant memories formatted for the LLM context"""
        memories = self.search_memories(current_query, limit=max_memories)
        return [
            {
                "user": m.user_message,
                "assistant": m.assistant_response,
                "timestamp": m.timestamp,
                "key_info": m.key_info if m.key_info else ""
            }
            for m in memories
        ]

    def get_context_for_prompt(
        self,
        current_query: str,
        recent_count: int = 5,
        relevant_count: int = 3
    ) -> Dict[str, Any]:
        """
        Get context for LLM prompt:
        - recent_conversations: 最近 N 条对话
        - relevant_memories: 和当前话题最相关的 M 条历史记忆

        Returns dict with context for Google API prompt
        """
        # 获取最近的对话
        recent_memories = self.get_recent_memories(limit=recent_count)
        recent_conversations = [
            {
                "user": m.user_message,
                "assistant": m.assistant_response,
                "timestamp": m.timestamp,
                "key_info": m.key_info if m.key_info else ""
            }
            for m in recent_memories
        ]

        # 获取相关记忆
        relevant_memories = self.search_memories(current_query, limit=relevant_count)
        relevant_history = [
            {
                "user": m.user_message,
                "assistant": m.assistant_response,
                "timestamp": m.timestamp,
                "key_info": m.key_info if m.key_info else ""
            }
            for m in relevant_memories
        ]

        # 收集所有关键信息
        all_key_info = []
        for m in recent_memories:
            if m.key_info:
                all_key_info.append(m.key_info)
        for m in relevant_memories:
            if m.key_info and m.key_info not in all_key_info:
                all_key_info.append(m.key_info)

        return {
            "recent_conversations": recent_conversations,
            "relevant_history": relevant_history,
            "user_key_info": all_key_info
        }

    def build_prompt_with_context(
        self,
        system_prompt: str,
        current_query: str,
        recent_count: int = 5,
        relevant_count: int = 3
    ) -> str:
        """
        Build a complete prompt with context for Google API.
        将历史对话和关键信息拼接进 Prompt
        """
        context = self.get_context_for_prompt(
            current_query=current_query,
            recent_count=recent_count,
            relevant_count=relevant_count
        )

        # 构建上下文文本
        prompt_parts = [system_prompt, "\n\n=== 近期对话 ==="]

        for i, conv in enumerate(context["recent_conversations"], 1):
            prompt_parts.append(f"\n[对话 {i}] ({conv['timestamp']})")
            if conv['key_info']:
                prompt_parts.append(f"用户关键信息: {conv['key_info']}")
            prompt_parts.append(f"用户: {conv['user']}")
            prompt_parts.append(f"助手: {conv['assistant']}")

        if context["relevant_history"]:
            prompt_parts.append("\n\n=== 相关历史记忆 ===")
            for i, mem in enumerate(context["relevant_history"], 1):
                prompt_parts.append(f"\n[记忆 {i}] ({mem['timestamp']})")
                if mem['key_info']:
                    prompt_parts.append(f"关键信息: {mem['key_info']}")
                prompt_parts.append(f"用户: {mem['user']}")
                prompt_parts.append(f"助手: {mem['assistant']}")

        if context["user_key_info"]:
            prompt_parts.append("\n\n=== 用户关键信息汇总 ===")
            for info in context["user_key_info"]:
                prompt_parts.append(f"- {info}")

        prompt_parts.append("\n\n=== 当前对话 ===")
        prompt_parts.append(f"用户: {current_query}")
        prompt_parts.append("\n助手: ")

        return "".join(prompt_parts)
