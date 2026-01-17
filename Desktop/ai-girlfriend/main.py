"""
Telegram Bot for AI Girlfriend (米彩)
"""
import os
import sys
import logging
import asyncio
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# 导入 Agent 和 Memory
from agent import AIGirlfriendAgent
from memory import MemoryManager
from dotenv import load_dotenv

load_dotenv()

# 配置日志
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# 存储每个用户的 agent 实例
user_agents = {}


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """处理 /start 命令"""
    user = update.message.from_user
    await update.message.reply_text(
        f"你好 {user.first_name}！我是米彩，你的 AI 女友～\n"
        "随时可以和我聊天，有什么想说的吗？\n\n"
        "可用命令:\n"
        "  /reset - 清空短期记忆\n"
        "  /help - 显示帮助"
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """处理 /help 命令"""
    await update.message.reply_text(
        "可用命令:\n"
        "  /reset - 清空短期记忆\n"
        "  /help - 显示帮助\n\n"
        "直接发送消息即可和我聊天～"
    )


async def reset(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """处理 /reset 命令 - 清空短期记忆"""
    user_id = update.message.from_user.id
    user_name = update.message.from_user.first_name

    print(f"[重置] 用户 {user_name} (ID: {user_id}) 请求重置")

    # 清空该用户的对话历史
    if user_id in user_agents:
        user_agents[user_id].clear_conversation_history()
        print(f"[重置] 已清空用户 {user_name} 的对话历史")
    else:
        print(f"[重置] 用户 {user_name} 没有历史记录")

    await update.message.reply_text("短期记忆已清空～我们重新开始吧！")


def get_agent(user_id: int) -> AIGirlfriendAgent:
    """获取或创建用户的 Agent 实例"""
    if user_id not in user_agents:
        user_agents[user_id] = AIGirlfriendAgent()
    return user_agents[user_id]


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """处理用户消息"""
    if not update.message or not update.message.text:
        return

    user_id = update.message.from_user.id
    user_name = update.message.from_user.first_name
    user_input = update.message.text.strip()

    print(f"[收到消息] {user_name}: {user_input}")

    try:
        # 发送 "正在输入" 状态
        await context.bot.send_chat_action(chat_id=update.message.chat_id, action="typing")

        # 获取用户的 Agent
        agent = get_agent(user_id)

        # 调用 Agent 生成回复
        response = agent.chat(user_input)

        print(f"[回复] {response[:50]}...")

        # 发送回复
        await update.message.reply_text(response)

        # 保存到记忆库（如果有 memory 管理器）
        try:
            memory_manager = MemoryManager()
            memory_manager.add_memory(user_input, response)
        except Exception as mem_err:
            logger.warning(f"保存记忆失败: {mem_err}")

    except Exception as e:
        print(f"[错误] 处理消息失败: {e}")
        import traceback
        traceback.print_exc()
        await update.message.reply_text("抱歉，刚才走神了...再说一遍好吗？")


async def error_handler(update: object, context: ContextTypes.DEFAULT_TYPE):
    """处理错误"""
    print(f"[错误Handler] {context.error}")
    import traceback
    traceback.print_exc()


async def main():
    """主函数"""
    # 获取 Telegram Bot Token
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    if not bot_token or bot_token == "your_telegram_bot_token_here":
        logger.error("未找到 TELEGRAM_BOT_TOKEN，请在 .env 文件中配置")
        print("错误: 请在 .env 文件中设置 TELEGRAM_BOT_TOKEN")
        print("获取方式: @BotFather on Telegram")
        return

    print("=" * 50)
    print("        米彩 - Telegram AI 女友 Bot")
    print("=" * 50)
    print()
    print("正在初始化...")

    try:
        # 测试 Agent 初始化
        test_agent = AIGirlfriendAgent()
        print("✓ AI 引擎初始化成功")
    except Exception as e:
        print(f"✗ AI 引擎初始化失败: {e}")
        return

    try:
        # 测试 Memory 初始化
        memory_manager = MemoryManager()
        stats = memory_manager.get_memory_count()
        print(f"✓ 记忆库初始化成功 (已有 {stats} 条记忆)")
    except Exception as e:
        print(f"! 记忆库初始化警告: {e}")
        memory_manager = None

    print()
    print("启动 Bot 中...")

    # 创建 Application
    application = (
        Application.builder()
        .token(bot_token)
        .concurrent_updates(False)  # 避免事件循环冲突
        .build()
    )

    # 添加命令处理器
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("reset", reset))

    # 添加消息处理器
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    # 添加错误处理器
    application.add_error_handler(error_handler)

    # 启动 Bot
    print("✓ Bot 启动成功！")
    print()
    print("在 Telegram 中搜索你的 Bot 并开始聊天吧～")
    print("按 Ctrl+C 停止")
    print()

    await application.initialize()
    await application.start()
    await application.updater.start_polling()

    # 保持运行直到中断
    return application


if __name__ == "__main__":
    app = None
    try:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

        async def run_app():
            global app
            app = await main()

        loop.run_until_complete(run_app())

        # 保持运行
        try:
            loop.run_forever()
        except KeyboardInterrupt:
            pass

    except KeyboardInterrupt:
        print("\n\n正在停止 Bot...")
    finally:
        if app:
            async def stop():
                await app.updater.stop_polling()
                await app.stop()
                await app.shutdown()
            asyncio.run(stop())
        sys.exit(0)
