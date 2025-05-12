<template>
  <section class="section pricing-section">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.pricing.title') }}</h2>
      
      <div class="pricing-grid">
        <div class="pricing-card card">
          <div class="pricing-header">
            <h3 class="pricing-title">{{ $t('sections.pricing.free.title') }}</h3>
            <div class="pricing-price">{{ $t('sections.pricing.free.price') }}</div>
          </div>
          
          <ul class="pricing-features">
            <li>
              <span class="feature-icon">✓</span> 每日5次生成机会
            </li>
            <li>
              <span class="feature-icon">✓</span> 基础文案模板
            </li>
            <li>
              <span class="feature-icon">✓</span> 标准响应速度
            </li>
          </ul>
          
          <button class="btn btn-secondary pricing-btn" @click="handleUpgradeClick('免费版')">
            {{ $t('sections.pricing.free.cta') }}
          </button>
        </div>
        
        <div class="pricing-card card featured">
          <div class="pricing-badge">推荐</div>
          <div class="pricing-header">
            <h3 class="pricing-title">{{ $t('sections.pricing.pro.title') }}</h3>
            <div class="pricing-price">{{ $t('sections.pricing.pro.price') }}</div>
          </div>
          
          <ul class="pricing-features">
            <li>
              <span class="feature-icon">✓</span> 无限生成次数
            </li>
            <li>
              <span class="feature-icon">✓</span> 全部高级模板
            </li>
            <li>
              <span class="feature-icon">✓</span> 优先响应速度
            </li>
            <li>
              <span class="feature-icon">✓</span> 文案历史保存
            </li>
          </ul>
          
          <button class="btn btn-primary pricing-btn" @click="handleUpgradeClick('专业版')">
            {{ $t('sections.pricing.pro.cta') }}
          </button>
        </div>
        
        <div class="pricing-card card">
          <div class="pricing-header">
            <h3 class="pricing-title">{{ $t('sections.pricing.enterprise.title') }}</h3>
            <div class="pricing-price">{{ $t('sections.pricing.enterprise.price') }}</div>
          </div>
          
          <ul class="pricing-features">
            <li>
              <span class="feature-icon">✓</span> 自定义模板开发
            </li>
            <li>
              <span class="feature-icon">✓</span> 专属客户经理
            </li>
            <li>
              <span class="feature-icon">✓</span> API接口调用
            </li>
            <li>
              <span class="feature-icon">✓</span> 团队多人协作
            </li>
          </ul>
          
          <button class="btn btn-secondary pricing-btn" @click="handleUpgradeClick('企业版')">
            {{ $t('sections.pricing.enterprise.cta') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 飞书机器人 webhook URL
const FEISHU_WEBHOOK_URL = 'https://open.feishu.cn/open-apis/bot/v2/hook/02ab958a-de59-430d-ba77-63a08da843a5';

export default defineComponent({
  name: 'PricingSection',
  methods: {
    async handleUpgradeClick(plan) {
      try {
        const timestamp = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
        const userAgent = navigator.userAgent;
        const screenSize = `${window.innerWidth}x${window.innerHeight}`;
        
        const message = {
          msg_type: 'text',
          content: {
            text: `小红书升级通知\n\n` +
                  `时间：${timestamp}\n` +
                  `计划：${plan}\n` +
                  `用户代理：${userAgent}\n` +
                  `屏幕尺寸：${screenSize}\n` +
                  `来源页面：${window.location.href}`
          }
        };

        await axios.post(FEISHU_WEBHOOK_URL, message);
        console.log('升级通知发送成功');
        
        // 显示升级提示
        ElMessage({
          message: '感谢您的关注！我们的客服会尽快与您联系。',
          type: 'success',
          duration: 5000
        });
      } catch (error) {
        console.error('发送升级通知失败:', error.message);
        // 通知失败不影响主流程
        ElMessage({
          message: '感谢您的关注！我们的客服会尽快与您联系。',
          type: 'success',
          duration: 5000
        });
      }
    }
  }
});
</script>

<style scoped>
.pricing-section {
  background-color: var(--background-light);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.pricing-card {
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card.featured {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  position: relative;
  border: 2px solid var(--primary-color);
}

.pricing-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
}

.pricing-header {
  padding: var(--spacing-lg);
  background-color: var(--primary-light);
  text-align: center;
}

.pricing-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--secondary-color);
}

.pricing-price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.pricing-features {
  list-style: none;
  padding: var(--spacing-lg);
  flex-grow: 1;
}

.pricing-features li {
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: flex-start;
}

.feature-icon {
  margin-right: var(--spacing-sm);
  color: var(--success-color);
  font-weight: bold;
}

.pricing-btn {
  margin: var(--spacing-lg);
  width: calc(100% - var(--spacing-lg) * 2);
}

@media (max-width: 992px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .pricing-card.featured {
    transform: scale(1);
    order: -1;
  }
}
</style> 