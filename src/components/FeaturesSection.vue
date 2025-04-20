<template>
  <section class="section features-section">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.features.title') }}</h2>
      <div class="features-grid">
        <div class="feature-card card">
          <div class="feature-icon">
            <i class="feature-emoji">🤖</i>
          </div>
          <h3 class="feature-title">{{ $t('sections.features.feature1.title') }}</h3>
          <p class="feature-description">{{ $t('sections.features.feature1.description') }}</p>
        </div>
        
        <div class="feature-card card">
          <div class="feature-icon">
            <i class="feature-emoji">✍️</i>
          </div>
          <h3 class="feature-title">{{ $t('sections.features.feature2.title') }}</h3>
          <p class="feature-description">{{ $t('sections.features.feature2.description') }}</p>
        </div>
        
        <div class="feature-card card">
          <div class="feature-icon">
            <i class="feature-emoji">🎯</i>
          </div>
          <h3 class="feature-title">{{ $t('sections.features.feature3.title') }}</h3>
          <p class="feature-description">{{ $t('sections.features.feature3.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeaturesSection'
});
</script>

<style scoped>
.features-section {
  background-color: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-xl);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.feature-emoji {
  font-size: 2.5rem;
  font-style: normal;
}

.feature-title {
  font-size: 1.4rem;
  margin-bottom: var(--spacing-md);
  color: var(--secondary-color);
}

.feature-description {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style> 