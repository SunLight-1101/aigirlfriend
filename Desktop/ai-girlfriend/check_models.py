import os
import google.generativeai as genai
from dotenv import load_dotenv

# 1. 强制设置代理 (保持和你刚才填的一样)
# 如果你是 v2rayN，可能需要改成 10809
os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"

# 2. 读取 Key
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    print("❌ 错误：没读到 Key，请检查 .env 文件")
else:
    print(f"✅ 读到了 Key，正在连接 Google 服务器查询模型列表...\n")
    try:
        genai.configure(api_key=api_key)
        
        # 3. 获取所有模型
        print("====== 你的账号可用的模型列表 ======")
        found_any = False
        for m in genai.list_models():
            # 我们只关心能聊天的模型 (generateContent)
            if 'generateContent' in m.supported_generation_methods:
                print(f"- {m.name}")
                found_any = True
        
        if not found_any:
            print("❌ 奇怪，连接成功了，但列表是空的。可能是 API Key 权限问题。")
        else:
            print("====================================")
            print("👉 请把上面列表里看着像 'gemini' 的那个名字复制给我！")

    except Exception as e:
        print(f"❌ 连接失败: {e}")