import os
from dotenv import load_dotenv
import anthropic

# 1. 尝试读取环境变量
load_dotenv()
api_key = os.getenv("ANTHROPIC_API_KEY")

print("-" * 30)
if not api_key:
    print("❌ 错误：根本没读到 API Key！")
    print("请检查：")
    print("1. 文件夹里有没有 .env 文件？")
    print("2. .env 文件里是不是写着 ANTHROPIC_API_KEY=sk-ant-...")
    exit()
else:
    # 只打印前10位，防止泄露，确认读到了
    print(f"✅ 成功读到 Key: {api_key[:15]}...") 

print("\n正在尝试连接 Claude 服务器...")

# 2. 尝试发送最简单的请求
try:
    client = anthropic.Anthropic(api_key=api_key)
    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=1024,
        messages=[
            {"role": "user", "content": "如果你能看到这句话，请回复“连接成功”"}
        ]
    )
    print(f"\n🎉 测试成功！Claude 回复: {message.content[0].text}")

except anthropic.AuthenticationError:
    print("\n❌ 认证失败 (401)")
    print("原因：API Key 是错的，或者已经失效。")
    print("解决：去 console.anthropic.com 重新生成一个 Key。")

except anthropic.PermissionError:
    print("\n❌ 权限错误 (403)")
    print("原因：可能是没充值，或者你的 Key 没有访问该模型的权限。")
    print("解决：检查 Billing 页面是否有余额。")

except Exception as e:
    print(f"\n❌ 其他错误: {e}")