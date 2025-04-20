# 小红书文案生成器

一键生成吸睛小红书文案，智能文案生成工具。

## 功能特点

- **智能生成**：基于DeepSeek先进AI，结合东方玄学与西方数据分析
- **多样文风**：支持情感共鸣、专业测评、日常分享等多种风格
- **精准定位**：针对不同用户群体生成最具吸引力的内容
- **中英双语**：支持中英文界面切换
- **便捷操作**：简单易用的界面，一键生成高质量文案

## 技术栈

- Vue 3
- Element Plus
- JavaScript
- DeepSeek AI API

## 安装运行

1. 克隆项目
```bash
git clone [仓库地址]
cd xiaohongshu-generator
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## API密钥配置

本项目使用DeepSeek API进行内容生成。API密钥已在代码中配置：

```javascript
const API_KEY = 'sk-0f69d5e4890f450d9b958d6ad9e19c7e';
```

## 项目结构

```
src/
├── api/             # API调用
├── assets/          # 静态资源
├── components/      # 组件
├── i18n/            # 国际化
├── App.vue          # 主应用组件
└── main.js          # 入口文件
```

## 常见问题

1. **如何提高生成文案的质量？**
   提供详细的关键词和明确的目标人群，选择合适的文案风格，这些都能帮助系统生成更精准的内容。

2. **文案是否可以二次编辑？**
   当然可以！生成的文案可以复制后进行个性化修改，以更好地符合您的需求。

3. **系统使用了什么AI技术？**
   我们使用DeepSeek先进大语言模型，结合东方玄学和西方数据分析技术，提供独特的文案生成能力。

## 版权信息

© 2025 李光新 版权所有 # redBookCreationImprover
