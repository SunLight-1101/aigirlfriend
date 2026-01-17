"""
微信服务器 - 基于 Werobot + SQLite 的多用户 AI 伴侣公众号

异步处理：先快速响应"收到"，后台 AI 处理完通过客服接口推送
"""
import werobot
import threading
import requests
from werobot.config import Config
from werobot.replies import TextReply
from agent import AICustomAgent
from database import (
    init_db,
    save_user_settings,
    get_user_settings,
    user_exists,
    add_message,
    get_chat_history_for_gemini,
    delete_user_data,
)
from dotenv import load_dotenv
import os
import time

load_dotenv()

# ============== 配置 ==============
WECHAT_APP_ID = os.getenv("WECHAT_APP_ID")
WECHAT_APP_SECRET = os.getenv("WECHAT_APP_SECRET")
WECHAT_TOKEN = os.getenv("WECHAT_TOKEN")

# 状态常量
WAITING_NAME = "waiting_name"
WAITING_PERSONA = "waiting_persona"
CHATTING = "chatting"

# Werobot 配置
config = Config(
    TOKEN=WECHAT_TOKEN,
    APP_ID=WECHAT_APP_ID,
    APP_SECRET=WECHAT_APP_SECRET,
    SERVER="auto",
    HOST="0.0.0.0",
    PORT=8080,
    SESSION_STORAGE=False
)
robot = werobot.WeRoBot(config=config)

# 临时状态
_temp_states = {}


def get_temp_state(openid: str, key: str, default=None):
    if openid not in _temp_states:
        return default
    return _temp_states[openid].get(key, default)


def set_temp_state(openid: str, key: str, value):
    if openid not in _temp_states:
        _temp_states[openid] = {}
    _temp_states[openid][key] = value


# ============== Access Token ==============
_access_token_cache = {"token": None, "expires_at": 0}


def get_access_token():
    now = time.time()
    if _access_token_cache["token"] and now < _access_token_cache["expires_at"]:
        return _access_token_cache["token"]

    url = f"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={WECHAT_APP_ID}&secret={WECHAT_APP_SECRET}"
    try:
        resp = requests.get(url, timeout=10)
        data = resp.json()
        if "access_token" in data:
            _access_token_cache["token"] = data["access_token"]
            _access_token_cache["expires_at"] = now + 7000
            return data["access_token"]
    except Exception as e:
        print(f"[WeChat Error] {e}")
    return None


# ============== 客服接口推送（测试号可能不支持，会乱码）==============
def send_text(openid: str, content: str):
    """通过客服接口发送消息"""
    token = get_access_token()
    if not token:
        return

    url = f"https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token={token}"

    # 移除特殊字符（微信测试号可能不支持）
    safe_content = content.replace("\n", " ").replace("\r", "")

    payload = {"touser": openid, "msgtype": "text", "text": {"content": safe_content}}

    try:
        resp = requests.post(url, json=payload, timeout=10)
        result = resp.json()
        if result.get("errcode") == 0:
            print(f"[Send OK] → {openid}: {safe_content[:30]}...")
        elif result.get("errcode") == 48001:
            print(f"[Send Warning] 测试号未开通客服消息权限")
        else:
            print(f"[Send Error] {result}")
    except Exception as e:
        print(f"[Send Error] {e}")


# ============== 后台处理 ==============
def async_process(openid: str, user_input: str):
    """后台处理 AI 对话"""
    try:
        # 检查用户是否存在
        if not user_exists(openid):
            state = get_temp_state(openid, "state", "new")

            if state == "new":
                set_temp_state(openid, "state", WAITING_NAME)
                send_text(openid, "欢迎来到 AI 伴侣生成器！\n请告诉我，你想要创建一个什么样的 AI 伴侣呢？\n首先，给她起个名字吧~")
                return

            if state == WAITING_NAME:
                name = user_input.strip()
                if not name:
                    send_text(openid, "名字不能为空哦，请告诉我你的 AI 伴侣叫什么名字？")
                    return
                set_temp_state(openid, "state", WAITING_PERSONA)
                set_temp_state(openid, "name", name)
                send_text(openid, f"好名字！那么请告诉我，{name} 的性格是什么样的呢？\n（比如：温柔体贴、活泼可爱）")
                return

            if state == WAITING_PERSONA:
                personality = user_input.strip()
                if not personality:
                    send_text(openid, "请简单描述一下性格吧~")
                    return
                name = get_temp_state(openid, "name", "小可爱")
                save_user_settings(openid, name, personality)
                _temp_states.pop(openid, None)
                send_text(openid, f"创建成功！你的 AI 伴侣「{name}」已上线~ 现在可以开始聊天了！")
                return

        # 老用户
        settings = get_user_settings(openid)
        if not settings:
            _temp_states.pop(openid, None)
            send_text(openid, "系统异常，请发送「重置」重新开始~")
            return

        # 重置指令
        if user_input in ["重置", "重新开始", "reset"]:
            delete_user_data(openid)
            _temp_states.pop(openid, None)
            send_text(openid, "已重置！请告诉我新 AI 伴侣的名字~")
            return

        ai_name = settings["ai_name"]
        ai_personality = settings["ai_personality"]

        # 获取历史
        history = get_chat_history_for_gemini(openid, limit=3)

        # 调用 AI
        agent = AICustomAgent(ai_name, ai_personality, history)
        response = agent.chat(user_input)

        # 保存到数据库
        add_message(openid, "user", user_input)
        add_message(openid, "model", response)

        # 推送回复
        send_text(openid, response)

    except Exception as e:
        print(f"[Async Error] {e}")
        send_text(openid, "抱歉，出错了，请重试~")


# ============== 消息处理 ==============
@robot.text
def handle_text(message):
    """
    快速响应"收到"，后台异步处理 AI
    """
    openid = message.source
    user_input = message.content.strip()

    print(f"[WeChat] 📩 [{openid}]: {user_input}")

    # 启动后台线程处理 AI
    threading.Thread(target=async_process, args=(openid, user_input), daemon=True).start()

    # 立即返回"收到"（避免超时）
    reply = TextReply(message=message, content="💕 收到！正在思考中...")
    return reply


@robot.subscribe
def handle_subscribe(event):
    openid = event.source
    print(f"[WeChat] 🆕 新用户关注: {openid}")
    return ""


@robot.unsubscribe
def handle_unsubscribe(event):
    openid = event.source
    _temp_states.pop(openid, None)
    print(f"[WeChat] 👋 用户取消关注: {openid}")
    return ""


if __name__ == "__main__":
    print("=" * 50)
    print("AI 伴侣公众号启动！")
    print("模式：异步处理，客服接口推送")
    print("=" * 50)

    init_db()
    robot.run()
