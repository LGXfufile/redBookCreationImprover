# Vercel 部署指南

这个文档详细说明了如何将小红书文案生成器部署到 Vercel 平台。

## 部署选项

您有以下几种部署方式可以选择：

### 1. 一键部署

点击下面的按钮直接部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fxiaohongshu-generator&env=VITE_DEEPSEEK_API_KEY&envDescription=DeepSeek%20API%20密钥，用于文案生成&envLink=https%3A%2F%2Fplatform.deepseek.com%2F&project-name=xiaohongshu-content-generator&repository-name=xiaohongshu-generator)

### 2. 使用部署脚本

我们提供了一个自动化部署脚本，可以简化部署过程：

```bash
# 给脚本添加执行权限
chmod +x deploy.sh

# 运行部署脚本
./deploy.sh
```

### 3. 手动部署

如果您想手动控制部署过程，可以按以下步骤操作：

1. 安装 Vercel CLI:
```bash
npm install -g vercel
```

2. 登录 Vercel (首次使用):
```bash
vercel login
```

3. 部署项目:
```bash
vercel --prod
```

## 环境变量设置

无论采用哪种部署方式，您都需要设置以下环境变量：

- `VITE_DEEPSEEK_API_KEY`: 您的 DeepSeek API 密钥

可以在 Vercel 仪表板中进行设置：
1. 进入项目设置
2. 找到 "Environment Variables" 部分
3. 添加名为 `VITE_DEEPSEEK_API_KEY` 的变量，值为您的 API 密钥

## 部署配置说明

本项目已包含 `vercel.json` 配置文件，主要配置内容包括：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

这些配置确保了：
- 使用正确的构建命令 (`npm run build`)
- 指定了正确的输出目录 (`dist`)
- 配置了 SPA 应用所需的路由重写，确保客户端路由可以正常工作

## 持续集成/持续部署 (CI/CD)

如果您的代码托管在 GitHub 上，本项目已配置好GitHub Actions工作流，每当推送到主分支时会自动部署。

要启用此功能，您需要在 GitHub 仓库设置中添加以下密钥：
- `VERCEL_TOKEN`: 从 Vercel 获取的 API 令牌
- `VERCEL_ORG_ID`: 您的 Vercel 组织 ID
- `VERCEL_PROJECT_ID`: 您的 Vercel 项目 ID

## 问题排查

如果您在部署过程中遇到问题：

1. **API 密钥问题**:
   - 确认已正确设置 `VITE_DEEPSEEK_API_KEY` 环境变量
   - 验证 API 密钥是否有效

2. **构建错误**:
   - 检查 Vercel 构建日志
   - 确认本地构建是否正常 (`npm run build`)

3. **API 调用失败**:
   - 检查浏览器控制台是否有错误信息
   - 验证 DeepSeek API 服务是否可用

4. **网络限制**:
   - 某些地区可能无法直接访问 DeepSeek API，考虑使用代理服务

## 获取帮助

如果您需要更多帮助，请：
- 提交 GitHub Issue
- 查阅 [DeepSeek API 文档](https://api-docs.deepseek.com/)
- 查阅 [Vercel 部署文档](https://vercel.com/docs/deployments/overview) 