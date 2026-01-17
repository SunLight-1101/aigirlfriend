"""
简单版 AI Agent - 支持自定义角色
"""
import os
import time
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

# 代理设置
os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"


class AICustomAgent:
    """自定义 AI 伴侣"""

    def __init__(self, name: str, personality: str):
        self.name = name
        self.personality = personality
        self.api_key = os.getenv("GOOGLE_API_KEY")

        if not self.api_key:
            raise ValueError("未找到 GOOGLE_API_KEY")

        genai.configure(api_key=self.api_key)

        print(f"[Agent] 正在为「{name}」初始化 Gemini...")

        safety_settings = [
            {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
            {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
            {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
            {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"},
        ]

        self.model = genai.GenerativeModel(
            model_name="gemma-3-27b-it",
            safety_settings=safety_settings
        )

        # 构建 System Prompt
        system_prompt = f"""你是「{name}」，性格：{personality}。

要求：
1. 用第一人称回应，自然简洁
2. 可以撒娇、表达情绪
3. 记住之前的对话

开始聊天！"""

        # 通过 history 注入人设
        self.chat_session = self.model.start_chat(history=[
            {"role": "user", "parts": [system_prompt]},
            {"role": "model", "parts": [f"好的，我是{name}，我会一直陪着你的~ 💕"]}
        ])

        print(f"[Agent] ✅ 「{name}」已就绪！")

    def chat(self, user_input: str) -> str:
        """发送消息给 AI 并获取回复"""
        try:
            response = self.chat_session.send_message(user_input)
            return response.text.strip()
        except Exception as e:
            err_msg = str(e)
            print(f"[Agent Error] {err_msg}")
            if "429" in err_msg:
                return "😵 限流了，让我休息一会..."
            return f"（{self.name}没听清，请重试）"


# 向后兼容：默认米彩
class AIGirlfriendAgent(AICustomAgent):
    def __init__(self):
        super().__init__(
            name="米彩",
            personality="温柔可爱，贴心女友类型"
        )
