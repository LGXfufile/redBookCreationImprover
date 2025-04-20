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
          
          <button class="btn btn-secondary pricing-btn">
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
          
          <button class="btn btn-primary pricing-btn">
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
          
          <button class="btn btn-secondary pricing-btn">
            {{ $t('sections.pricing.enterprise.cta') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PricingSection'
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