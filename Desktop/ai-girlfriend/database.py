"""
数据库管理模块 - SQLite 实现用户配置和聊天记录的持久化存储
"""
import sqlite3
import os
from threading import Lock

# 数据库文件路径
DB_PATH = os.path.join(os.path.dirname(__file__), "memory.db")

# 数据库连接池（为每个线程创建独立连接）
_connections = {}
_locks = {}

def _get_connection():
    """获取当前线程的数据库连接"""
    import threading
    thread_id = threading.current_thread().ident

    if thread_id not in _connections:
        # check_same_thread=False 允许跨线程访问
        # isolation_level=None 启用自动提交
        conn = sqlite3.connect(DB_PATH, check_same_thread=False, isolation_level=None)
        conn.row_factory = sqlite3.Row
        # 确保使用 UTF-8 编码
        conn.execute("PRAGMA encoding = 'UTF-8'")
        # 启用外键约束
        conn.execute("PRAGMA foreign_keys = ON")
        _connections[thread_id] = conn
        _locks[thread_id] = Lock()

    return _connections[thread_id], _locks[thread_id]


def init_db():
    """
    初始化数据库，创建必要的表
    如果数据库文件不存在会自动创建
    """
    conn, lock = _get_connection()

    with lock:
        # Users 表：存储用户配置的 AI 伴侣信息
        conn.execute("""
            CREATE TABLE IF NOT EXISTS Users (
                openid TEXT PRIMARY KEY,
                ai_name TEXT NOT NULL,
                ai_personality TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

        # History 表：存储聊天记录
        conn.execute("""
            CREATE TABLE IF NOT EXISTS History (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                openid TEXT NOT NULL,
                role TEXT NOT NULL CHECK(role IN ('user', 'model')),
                content TEXT NOT NULL,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (openid) REFERENCES Users(openid) ON DELETE CASCADE
            )
        """)

        # 创建索引加速查询
        conn.execute("""
            CREATE INDEX IF NOT EXISTS idx_history_openid
            ON History(openid)
        """)
        conn.execute("""
            CREATE INDEX IF NOT EXISTS idx_history_timestamp
            ON History(openid, timestamp)
        """)

        conn.commit()

    print(f"[Database] 数据库初始化完成: {DB_PATH}")


def save_user_settings(openid: str, ai_name: str, ai_personality: str):
    """
    保存或更新用户的 AI 伴侣配置

    Args:
        openid: 用户 OpenID
        ai_name: AI 名字
        ai_personality: AI 性格描述
    """
    conn, lock = _get_connection()

    with lock:
        conn.execute("""
            INSERT OR REPLACE INTO Users (openid, ai_name, ai_personality)
            VALUES (?, ?, ?)
        """, (openid, ai_name, ai_personality))
        conn.commit()

    print(f"[Database] 用户配置已保存: {openid} -> {ai_name}")


def get_user_settings(openid: str) -> dict | None:
    """
    获取用户的 AI 伴侣配置

    Args:
        openid: 用户 OpenID

    Returns:
        包含 ai_name, ai_personality 的字典，不存在返回 None
    """
    conn, lock = _get_connection()

    with lock:
        cursor = conn.execute("""
            SELECT ai_name, ai_personality, created_at
            FROM Users WHERE openid = ?
        """, (openid,))
        row = cursor.fetchone()

    if row:
        return {
            "ai_name": row["ai_name"],
            "ai_personality": row["ai_personality"],
            "created_at": row["created_at"]
        }
    return None


def user_exists(openid: str) -> bool:
    """
    检查用户是否已存在（是否已完成 AI 伴侣创建）

    Args:
        openid: 用户 OpenID

    Returns:
        True if user exists, False otherwise
    """
    conn, lock = _get_connection()

    with lock:
        cursor = conn.execute(
            "SELECT 1 FROM Users WHERE openid = ?", (openid,)
        )
        return cursor.fetchone() is not None


def add_message(openid: str, role: str, content: str):
    """
    添加一条聊天记录

    Args:
        openid: 用户 OpenID
        role: 角色 ('user' 或 'model')
        content: 消息内容
    """
    conn, lock = _get_connection()

    with lock:
        conn.execute("""
            INSERT INTO History (openid, role, content)
            VALUES (?, ?, ?)
        """, (openid, role, content))
        conn.commit()


def get_chat_history(openid: str, limit: int = 20) -> list:
    """
    获取用户的聊天历史记录

    Args:
        openid: 用户 OpenID
        limit: 返回记录数量，默认 20 条

    Returns:
        格式: [{'role': 'user', 'content': '...'}, {'role': 'model', 'content': '...'}, ...]
    """
    conn, lock = _get_connection()

    with lock:
        cursor = conn.execute("""
            SELECT role, content
            FROM History
            WHERE openid = ?
            ORDER BY timestamp ASC, id ASC
            LIMIT ?
        """, (openid, limit))

        return [{"role": row["role"], "content": row["content"]} for row in cursor.fetchall()]


def get_chat_history_for_gemini(openid: str, limit: int = 20) -> list:
    """
    获取适合 Gemini API 格式的聊天历史

    Args:
        openid: 用户 OpenID
        limit: 返回记录数量

    Returns:
        格式: [{'role': 'user', 'parts': ['...']}, {'role': 'model', 'parts': ['...']}, ...]
    """
    history = get_chat_history(openid, limit)
    # 转换为 Gemini 格式
    return [
        {"role": item["role"], "parts": [item["content"]]}
        for item in history
    ]


def delete_user_data(openid: str):
    """
    删除用户的所有数据（用于重置功能）
    Users 表的 ON DELETE CASCADE 会自动删除关联的 History 记录

    Args:
        openid: 用户 OpenID
    """
    conn, lock = _get_connection()

    with lock:
        conn.execute("DELETE FROM Users WHERE openid = ?", (openid,))
        conn.commit()

    print(f"[Database] 用户数据已删除: {openid}")


def reset_all_data():
    """删除所有用户数据（用于彻底重置）"""
    conn, lock = _get_connection()

    with lock:
        conn.execute("DELETE FROM History")
        conn.execute("DELETE FROM Users")
        conn.commit()

    print("[Database] 所有数据已清空")


def close_connection():
    """关闭当前线程的数据库连接（程序退出时调用）"""
    import threading
    thread_id = threading.current_thread().ident

    if thread_id in _connections:
        _connections[thread_id].close()
        del _connections[thread_id]
        del _locks[thread_id]


# 初始化数据库
init_db()
