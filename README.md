# 小红书文案生成器

![小红书文案生成器](https://user-images.githubusercontent.com/your-user-id/your-image-path.jpg)

> 基于DeepSeek AI技术的智能小红书文案生成工具，一键创作吸睛笔记，提升内容创作效率

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fxiaohongshu-generator&env=VITE_DEEPSEEK_API_KEY&envDescription=DeepSeek%20API%20密钥，用于文案生成&envLink=https%3A%2F%2Fplatform.deepseek.com%2F&project-name=xiaohongshu-content-generator&repository-name=xiaohongshu-generator)

## 🌟 核心功能

- **🧠 智能生成** - 基于DeepSeek先进AI技术，生成符合小红书平台调性的原创内容
- **🎨 多样文风** - 支持情感共鸣、专业测评、日常分享、深度种草等17种不同风格
- **🎯 精准定位** - 为20+不同用户群体定制个性化内容，精准触达目标受众
- **👤 丰富人设** - 提供23种创作人设选择，从辣妈生活家到职场达人应有尽有
- **🌍 中英双语** - 完整支持中英文界面切换，满足多语言用户需求
- **🚀 便捷操作** - 简洁直观的界面设计，一键生成高质量文案
- **📱 响应式设计** - 完美适配桌面端和移动端，随时随地创作内容
- **🛡️ 稳定API** - 基于DeepSeek可靠API，确保文案生成稳定且高质量

## 📊 应用场景

- **内容创作者** - 快速生成小红书平台吸引眼球的原创笔记内容
- **营销人员** - 为产品创作富有说服力的种草文案，提升转化率
- **电商卖家** - 生成产品描述和推广文案，增加商品曝光和销量
- **社区运营** - 批量生成平台内容，活跃社区氛围
- **普通用户** - 记录生活点滴，打造个人影响力

## 💻 技术栈

- **前端框架**: Vue 3 + Composition API
- **UI组件库**: Element Plus
- **HTTP请求**: Axios
- **国际化**: Vue I18n
- **AI接口**: DeepSeek AI API
- **构建工具**: Vite
- **部署平台**: Vercel

## 🔥 功能亮点

### 多样化人设与受众

- **支持20+目标受众群体**：女性用户、男性用户、95后、00后、新手妈妈、职场新人、资深职场人、都市白领等
- **提供23种创作人设**：辣妈生活家、职场达人、美妆博主、数码测评师、美食探店家、旅行体验官等

### 丰富的文案风格

- **17种文风选择**：情感共鸣、专业测评、日常分享、深度种草、轻松幽默、干货攻略、小确幸等
- **多种内容长度**：短篇、中篇、长篇，满足不同场景需求

### 智能生成核心

- **基于强大的DeepSeek AI**：利用先进大模型技术生成高质量内容
- **高度定制化提示词**：专为小红书平台内容优化，符合平台调性
- **智能优化参数**：通过精心调整的API参数，确保内容自然流畅

## 📱 使用截图

*此处可添加实际应用截图*

## 🚀 快速开始

### 安装

1. 克隆项目
```bash
git clone https://github.com/yourusername/xiaohongshu-generator.git
cd xiaohongshu-generator
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
```bash
# 复制环境变量示例文件
cp .env.example .env.local

# 编辑 .env.local 文件，填入你的 DeepSeek API 密钥
VITE_DEEPSEEK_API_KEY=your_api_key_here
```

4. 启动开发服务器
```bash
npm run dev
```

### 使用方法

1. 选择目标受众和创作人设
2. 输入产品/主题和关键词
3. 选择文案风格和内容长度
4. 点击"立刻生成文案"按钮
5. 复制生成的内容用于小红书平台发布

## ☁️ 部署到 Vercel

本项目已配置好 Vercel 部署文件，可以一键部署到 Vercel 平台。

1. Fork 本仓库或将代码推送到你自己的 GitHub 仓库

2. 在 Vercel 中导入项目
   - 访问 [Vercel](https://vercel.com)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Import"

3. 配置环境变量
   - 在项目设置中找到 "Environment Variables" 
   - 添加名为 `VITE_DEEPSEEK_API_KEY` 的环境变量
   - 值为你的 DeepSeek API 密钥

4. 部署
   - 点击 "Deploy"
   - 等待部署完成
   - 访问你的应用 URL

更多部署详情，请参考 [VERCEL.md](VERCEL.md)。

## 🔑 API密钥配置

本项目使用DeepSeek API进行内容生成。API密钥已预配置，无需额外设置即可使用：

```javascript
// 已预先配置好的API密钥
const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || 'sk-0f69d5e4890f450d9b958d6ad9e19c7e';
```

> **注意**：预配置的API密钥仅供演示使用。如果您计划在生产环境中部署，建议使用自己的API密钥替换。

### 自定义API密钥

如果您想使用自己的API密钥，可以通过以下方式配置：

1. 通过环境变量（推荐）：
```
VITE_DEEPSEEK_API_KEY=your_api_key_here
```

2. 修改`.env.local`文件：
```
# 复制环境变量示例文件
cp .env.example .env.local

# 编辑 .env.local 文件，填入你的 DeepSeek API 密钥
VITE_DEEPSEEK_API_KEY=your_api_key_here
```

## 📂 项目结构

```
src/
├── api/             # API调用服务
│   └── deepseek.js  # DeepSeek API 集成
├── assets/          # 静态资源文件
├── components/      # Vue组件
│   ├── HeaderSection.vue    # 页头组件
│   ├── GeneratorSection.vue # 生成器核心组件
│   ├── FeaturesSection.vue  # 功能展示组件
│   └── ...                  # 其他组件
├── i18n/            # 国际化资源
│   ├── zh-CN.js     # 中文翻译
│   └── en-US.js     # 英文翻译
├── App.vue          # 主应用组件
└── main.js          # 应用入口文件
```

## 📝 示例文案

以下是使用本工具生成的示例文案：

> 这次真的被面试教程种草了！📝 给面试过埋坑，自信满满地被面试官拍死，找到这个教程后感觉豁然开朗。
> 
> 教程里不仅详细讲解了如何准备自我介绍，还提供了一些常见问题的回答技巧。最神奇的是它教我如何应对一些刁钻问题，这真的救了我一命！作为上班族，这份教程简直解决了我跳槽路上的大难题，职场达人给我的建议太实用了～👍 
> 
> 现在面试前都会翻出来看看，感觉整个人自信了不少！真心推荐给和我一样的上班族～每次看完都能获得新的面试思路，真的很棒！💯

## ❓ 常见问题

1. **如何提高生成文案的质量？**  
   提供详细的关键词和明确的目标人群，选择合适的文案风格，填写有特色的主题，这些都能帮助系统生成更精准的内容。

2. **文案是否可以二次编辑？**  
   当然！生成的文案可以复制后进行个性化修改，以更好地符合您的需求和品牌调性。

3. **系统使用了什么AI技术？**  
   我们使用DeepSeek先进大语言模型，通过精心设计的提示词和参数优化，提供高度符合小红书平台特性的文案生成能力。

4. **部署时遇到API调用失败？**  
   请确保：
   - 已经配置了正确的DeepSeek API密钥
   - 已经在Vercel环境变量中设置了VITE_DEEPSEEK_API_KEY
   - 检查浏览器控制台是否有API调用错误
   - 网络环境是否能够访问DeepSeek API

5. **为什么有时候生成的内容风格不够统一？**  
   AI生成内容会有一定的随机性，您可以尝试调整关键词和主题描述，或者多次生成，选择最符合需求的结果。

## 🛠️ 开发计划

- [ ] 添加更多文案风格
- [ ] 实现内容历史记录功能
- [ ] 支持批量生成功能
- [ ] 添加SEO优化建议
- [ ] 支持图文搭配推荐

## 📜 版权信息

© 2025 李光新 版权所有

## 🔗 相关链接

- [DeepSeek API 文档](https://api-docs.deepseek.com/)
- [Vue 3 文档](https://vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [Vercel 部署文档](https://vercel.com/docs)