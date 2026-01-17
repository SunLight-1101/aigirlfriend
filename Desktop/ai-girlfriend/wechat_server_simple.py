"""
微信服务器 - 简单版本 + 自定义角色功能
(已修改适配云平台端口)
"""
import werobot
import threading
from werobot.config import Config
from agent_simple import AICustomAgent, AIGirlfriendAgent
from dotenv import load_dotenv
import os

load_dotenv()

# 代理设置
os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"

# 配置
MY_APP_ID = os.getenv("WECHAT_APP_ID")
MY_APP_SECRET = os.getenv("WECHAT_APP_SECRET")
MY_TOKEN = os.getenv("WECHAT_TOKEN")

# 状态常量
WAITING_START = "waiting_start"    # 等待确认是否创建
WAITING_NAME = "waiting_name"      # 等待输入名字
WAITING_PERSONA = "waiting_persona"  # 等待输入性格
CHATTING = "chatting"              # 正常聊天

# 用户状态存储
user_states = {}

# 已创建过 AI 的用户（持久化到文件）
USERS_FILE = "users.txt"


def load_users():
    """从文件加载已创建的用户"""
    users = {}
    try:
        with open(USERS_FILE, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if "|" in line:
                    parts = line.split("|")
                    if len(parts) >= 3:
                        openid, name, personality = parts[0], parts[1], parts[2]
                        users[openid] = {"name": name, "personality": personality}
    except FileNotFoundError:
        pass
    return users


def save_user(openid, name, personality):
    """保存用户到文件"""
    with open(USERS_FILE, "a", encoding="utf-8") as f:
        f.write(f"{openid}|{name}|{personality}\n")


# 加载已创建的用户
existing_users = load_users()
print(f"[WeChat] 已加载 {len(existing_users)} 个用户")

# ==========================================
# 👇 修改重点在这里 👇
# ==========================================
# 获取云平台的环境变量 PORT，如果没获取到（比如在本地），就默认用 8080
HTTP_PORT = int(os.environ.get("PORT", 8080))

config = Config(
    TOKEN=MY_TOKEN,
    APP_ID=MY_APP_ID,
    APP_SECRET=MY_APP_SECRET,
    SERVER="auto",
    HOST="0.0.0.0",  # 云平台必须是 0.0.0.0
    PORT=HTTP_PORT,  # 使用变量，不再写死 8080
    SESSION_STORAGE=False
)
# ==========================================
# 👆 修改结束 👆
# ==========================================

robot = werobot.WeRoBot(config=config)

# 配置代理
import requests
proxies = {
    "http": "http://127.0.0.1:7890",
    "https": "http://127.0.0.1:7890",
}
robot.client.session.proxies = proxies


def get_user_agent(user_id, name=None, personality=None):
    """获取或创建用户的 AI"""
    if user_id not in user_states:
        print(f"🆕 新用户接入: {user_id}")
        user_states[user_id] = {"state": WAITING_NAME, "name": None, "personality": None, "agent": None}

    # 如果还没有 agent，创建它
    if user_states[user_id]["agent"] is None:
        if name and personality:
            user_states[user_id]["agent"] = AICustomAgent(name=name, personality=personality)
            print(f"[WeChat] 为 {user_id} 创建了「{name}」")
        else:
            # 默认米彩
            user_states[user_id]["agent"] = AIGirlfriendAgent()
            print(f"[WeChat] 为 {user_id} 创建了默认米彩")

    return user_states[user_id]["agent"]


def process_ai_reply(user_id, user_input):
    """处理 AI 回复并发送"""
    try:
        # 确保内存状态存在
        if user_id not in user_states:
            # 检查是否已创建过用户
            if user_id in existing_users:
                user = existing_users[user_id]
                # 恢复用户状态
                user_states[user_id] = {
                    "state": CHATTING,
                    "name": user["name"],
                    "personality": user["personality"],
                    "agent": None  # agent 重新创建
                }
                print(f"[WeChat] 恢复用户 {user_id}: {user['name']}")
            else:
                user_states[user_id] = {"state": WAITING_START, "name": None, "personality": None, "agent": None}
        else:
            # 用户状态已存在，但可能是刚关注恢复的，检查是否需要从 existing_users 恢复
            state = user_states[user_id]
            if state["agent"] is None and state["name"] is None and user_id in existing_users:
                user = existing_users[user_id]
                user_states[user_id] = {
                    "state": CHATTING,
                    "name": user["name"],
                    "personality": user["personality"],
                    "agent": None
                }
                print(f"[WeChat] 恢复用户 {user_id}: {user['name']}")

        state = user_states[user_id]["state"]

        # 状态 0: 等待确认是否创建
        if state == WAITING_START:
            # 检查是否确认创建
            if user_input in ["创建", "创建新角色", "开始", "好", "yes", "Y"]:
                user_states[user_id]["state"] = WAITING_NAME
                robot.client.send_text_message(user_id, "好的！请给你的 AI 伴侣起个名字吧~")
                return
            # 如果用户直接输入名字
            if len(user_input) <= 10 and not any(kw in user_input for kw in ["你好", "在吗", "聊天", "说话"]):
                name = user_input.strip()
                user_states[user_id]["state"] = WAITING_PERSONA
                user_states[user_id]["name"] = name
                robot.client.send_text_message(user_id, f"好名字！那么请告诉我，{name} 的性格是什么样的呢？\n（比如：温柔体贴、活泼可爱）")
                return
            # 其他情况，提示创建
            robot.client.send_text_message(user_id, "你想创建一个新的 AI 伴侣吗？回复「创建」开始~")
            return

        # 状态 1: 等待名字
        if state == WAITING_NAME:
            name = user_input.strip()
            if not name:
                robot.client.send_text_message(user_id, "名字不能为空哦，请告诉我你的 AI 伴侣叫什么名字？")
                return

            user_states[user_id]["state"] = WAITING_PERSONA
            user_states[user_id]["name"] = name
            robot.client.send_text_message(user_id, f"好名字！那么请告诉我，{name} 的性格是什么样的呢？\n（比如：温柔体贴、活泼可爱）")
            return

        # 状态 2: 等待性格
        if state == WAITING_PERSONA:
            personality = user_input.strip()
            if not personality:
                robot.client.send_text_message(user_id, "请简单描述一下性格吧~")
                return

            name = user_states[user_id]["name"]
            user_states[user_id]["state"] = CHATTING
            user_states[user_id]["personality"] = personality

            # 创建 AI Agent
            agent = get_user_agent(user_id, name=name, personality=personality)
            user_states[user_id]["agent"] = agent

            # 保存到文件
            save_user(user_id, name, personality)
            existing_users[user_id] = {"name": name, "personality": personality}

            robot.client.send_text_message(user_id, f"创建成功！你的 AI 伴侣「{name}」已上线~\n现在可以开始聊天了！")
            return

        # 状态 3: 正常聊天
        if state == CHATTING:
            # 检查重置指令
            if user_input in ["重置", "重新开始", "reset"]:
                user_states[user_id] = {"state": WAITING_START, "name": None, "personality": None, "agent": None}
                robot.client.send_text_message(user_id, "已重置！回复「创建」开始创建新的 AI 伴侣吧~")
                return

            agent = get_user_agent(user_id)
            reply = agent.chat(user_input)
            print(f"✅ 回复 [{user_id}]: {reply}")
            robot.client.send_text_message(user_id, reply)
            return

        # 默认情况：发送欢迎语
        robot.client.send_text_message(user_id, "欢迎来到 AI 伴侣生成器！\n回复「创建」开始创建一个属于你的 AI 伴侣吧~")

    except Exception as e:
        print(f"❌ 处理失败: {e}")
        import traceback
        traceback.print_exc()
        robot.client.send_text_message(user_id, "抱歉，出错了，请重试~")


@robot.text
def handle_text(message):
    user_id = message.source
    user_input = message.content
    print(f"📩 收到 [{user_id}]: {user_input}")

    # 开启线程处理
    thread = threading.Thread(target=process_ai_reply, args=(user_id, user_input))
    thread.start()

    # 秒回正在输入
    return "💕正在输入中······💕"


@robot.subscribe
def handle_subscribe(event):
    user_id = event.source
    print(f"[WeChat] 🆕 新用户关注: {user_id}")
    # 初始化用户状态
    user_states[user_id] = {"state": WAITING_START, "name": None, "personality": None, "agent": None}
    return ""


@robot.unsubscribe
def handle_unsubscribe(event):
    user_id = event.source
    print(f"[WeChat] 👋 用户取消关注: {user_id}")
    if user_id in user_states:
        del user_states[user_id]
    return ""


if __name__ == "__main__":
    print("=" * 50)
    print("✨ AI 伴侣公众号启动成功！")
    print("支持自定义角色（名字 + 性格）")
    print("=" * 50)
    robot.run()