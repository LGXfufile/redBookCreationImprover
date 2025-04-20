<template>
  <section class="section how-it-works-section">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.howItWorks.title') }}</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3 class="step-title">{{ $t('sections.howItWorks.step1') }}</h3>
            <div class="step-icon">📝</div>
          </div>
        </div>
        
        <div class="step-connector"></div>
        
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3 class="step-title">{{ $t('sections.howItWorks.step2') }}</h3>
            <div class="step-icon">👥</div>
          </div>
        </div>
        
        <div class="step-connector"></div>
        
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3 class="step-title">{{ $t('sections.howItWorks.step3') }}</h3>
            <div class="step-icon">✨</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HowItWorksSection'
});
</script>

<style scoped>
.how-it-works-section {
  background-color: var(--background-light);
}

.steps-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: var(--spacing-xl);
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  position: relative;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: var(--spacing-md);
  z-index: 2;
}

.step-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: var(--radius);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow);
  width: 100%;
}

.step-title {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon {
  font-size: 2.5rem;
}

.step-connector {
  height: 2px;
  background-color: var(--primary-color);
  width: 60px;
  flex-shrink: 0;
}

@media (max-width: 992px) {
  .steps-container {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
  
  .step-connector {
    width: 2px;
    height: 40px;
  }
}
</style> 