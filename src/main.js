import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import enUS from './i18n/en-US';
import zhCN from './i18n/zh-CN';

// Initialize i18n
const i18n = createI18n({
  legacy: true,
  locale: 'zh-CN', // Default language
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
  // 添加特殊处理，确保数组正确显示
  fallbackWarn: false,
  missingWarn: false
});

const app = createApp(App);
app.use(ElementPlus);
app.use(i18n);
app.mount('#app');
