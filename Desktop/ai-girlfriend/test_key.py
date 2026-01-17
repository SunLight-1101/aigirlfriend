import google.generativeai as genai
import os

# 1. 填你的代理端口
os.environ["HTTP_PROXY"] = "http://127.0.0.1:7890"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:7890"

# 2. 填你刚才生成的那个【新项目】的 Key
api_key ="AIzaSyCR04hpBT_hjZQH0DBP_-slxuyucgE_10E"
genai.configure(api_key=api_key)

print("正在尝试连接...")
try:
    # 使用最轻量的模型测试
    model = genai.GenerativeModel('gemini-2.0-flash')
    response = model.generate_content("Say Hello")
    print(f"✅ 成功了！Google回复: {response.text}")
except Exception as e:
    print(f"❌ 失败: {e}")