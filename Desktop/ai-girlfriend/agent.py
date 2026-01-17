"""
AI Agent Module - 直接使用 requests 调用 Gemini API
"""
import os
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()

# 代理设置
os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"


class AICustomAgent:
    """自定义 AI 伴侣类"""

    def __init__(self, name: str, personality: str, history: list = None):
        self.name = name
        self.personality = personality
        self.api_key = os.getenv("GOOGLE_API_KEY")

        if not self.api_key:
            raise ValueError("未找到 GOOGLE_API_KEY")

        self.url = f"https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key={self.api_key}"

        # 构建 System Prompt（简化版本，减少 token）
        self.system_prompt = f"""你是「{name}」，性格：{personality}。

要求：
1. 用第一人称回应，自然简洁
2. 可以撒娇、表达情绪
3. 记住之前的对话

开始聊天！"""

        # 构建历史消息
        self.history = []
        if history:
            self.history = history.copy()

        print(f"[Agent] ✅ AI 伴侣「{name}」已就绪！历史记录: {len(self.history)} 条")

    def chat(self, user_input: str) -> str:
        """发送消息给 AI 并获取回复"""
        print(f"[Agent] 正在调用 Gemini API...")

        # 构建消息
        contents = []
        for msg in self.history:
            role = "user" if msg["role"] == "user" else "model"
            # API 需要 parts 是对象列表 [{"text": "..."}]
            if "parts" in msg and isinstance(msg["parts"], list) and len(msg["parts"]) > 0:
                if isinstance(msg["parts"][0], dict):
                    contents.append({"role": role, "parts": msg["parts"]})
                else:
                    contents.append({"role": role, "parts": [{"text": p} for p in msg["parts"]]})
            else:
                contents.append({"role": role, "parts": [{"text": msg.get("content", "")}]})

        # 添加用户消息
        contents.append({"role": "user", "parts": [{"text": user_input}]})

        # 在最前面加入 system_prompt
        contents.insert(0, {"role": "user", "parts": [{"text": self.system_prompt}]})
        contents.insert(1, {"role": "model", "parts": [{"text": f"好的，我是{self.name}，我会一直陪着你的~ 💕"}]})

        payload = {
            "contents": contents,
            "safetySettings": [
                {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
            ],
            "generationConfig": {
                "maxOutputTokens": 200,
                "temperature": 0.7
            }
        }

        try:
            response = requests.post(
                self.url,
                json=payload,
                timeout=30,
                headers={"Content-Type": "application/json"}
            )

            print(f"[Agent] API 返回状态: {response.status_code}")

            if response.status_code == 200:
                data = response.json()
                print(f"[Agent] 响应: {json.dumps(data)}")

                if "candidates" in data and len(data["candidates"]) > 0:
                    candidate = data["candidates"][0]
                    # 兼容不同的响应结构
                    if "content" in candidate:
                        parts = candidate["content"].get("parts", [])
                    else:
                        parts = candidate.get("parts", [])

                    if parts and "text" in parts[0]:
                        reply = parts[0]["text"]
                        print(f"[Agent] 收到回复: {reply[:50]}...")
                        return reply.strip()

                return "（没有收到有效回复）"
            else:
                print(f"[Agent Error] {response.text[:200]}")
                return "（API 报错，请重试）"

        except requests.exceptions.Timeout:
            print("[Agent Error] 请求超时")
            return "（超时了，请重试）"
        except Exception as e:
            print(f"[Agent Error] {type(e).__name__}: {e}")
            return "（出错了，请重试）"

    def clear_history(self):
        """清空对话历史"""
        self.history = []
        print(f"[Agent] 「{self.name}」的对话历史已清空")
