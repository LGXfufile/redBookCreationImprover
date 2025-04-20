#!/bin/bash

# 小红书文案生成器自动部署脚本

echo "==== 小红书文案生成器部署脚本 ===="
echo "该脚本将帮助您准备并部署项目到Vercel"
echo ""

# 检查是否安装了Node.js和npm
if ! command -v node &> /dev/null; then
    echo "错误: 未安装Node.js，请先安装Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "错误: 未安装npm，请先安装npm"
    exit 1
fi

# 检查是否安装了Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "未安装Vercel CLI，正在安装..."
    npm install -g vercel
fi

# 安装项目依赖
echo "安装项目依赖..."
npm install

# 检查环境变量文件
if [ ! -f .env.local ]; then
    echo "创建.env.local文件..."
    cp .env.example .env.local
    echo "请编辑.env.local文件，填入您的DeepSeek API密钥"
    echo "按任意键继续..."
    read -n 1
fi

# 构建项目
echo "构建项目..."
npm run build

# 部署到Vercel
echo "是否要部署到Vercel? (y/n)"
read deploy_choice

if [ "$deploy_choice" = "y" ] || [ "$deploy_choice" = "Y" ]; then
    echo "正在部署到Vercel..."
    vercel --prod
    echo "部署完成！"
else
    echo "跳过部署步骤。如果想稍后部署，请运行 'vercel --prod'"
fi

echo ""
echo "==== 部署脚本执行完毕 ====" 