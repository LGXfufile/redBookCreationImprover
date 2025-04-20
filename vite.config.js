import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    // 生成静态资源的存放目录
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码
    assetsInlineLimit: 4096,
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 指定输出路径（相对于 项目根目录)
    outDir: 'dist',
    // 自定义rollup配置
    rollupOptions: {
      output: {
        // 入口文件的输出配置
        manualChunks: {
          vendor: ['vue', 'vue-i18n', 'element-plus', 'axios'],
        },
      },
    },
  },
  // 公共基础路径，如果要部署到子目录可以修改
  base: '/',
}); 