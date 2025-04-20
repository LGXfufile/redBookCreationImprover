<template>
  <section class="hero-section">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('sections.hero.title') }}</h1>
        <p class="hero-subtitle">{{ $t('sections.hero.subtitle') }}</p>
        <button class="btn btn-primary hero-cta" @click="scrollToGenerator">
          {{ $t('sections.hero.cta') }}
        </button>
      </div>
      <div class="hero-image">
        <div class="illustration">
          <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="400" rx="20" fill="#FFF7F7"/>
            <circle cx="300" cy="180" r="100" fill="#FFCCD0"/>
            <rect x="200" y="230" width="200" height="120" rx="10" fill="#FF4D4F" opacity="0.8"/>
            <path d="M250 290 L350 290" stroke="white" stroke-width="4" stroke-linecap="round"/>
            <path d="M270 260 L330 260" stroke="white" stroke-width="4" stroke-linecap="round"/>
            <path d="M285 320 L315 320" stroke="white" stroke-width="4" stroke-linecap="round"/>
            <circle cx="300" cy="180" r="40" fill="#FF4D4F"/>
            <path d="M285 170 L315 170" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M285 180 L315 180" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M285 190 L315 190" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M220 120 L260 120" stroke="#FF4D4F" stroke-width="5" stroke-linecap="round"/>
            <path d="M340 120 L380 120" stroke="#FF4D4F" stroke-width="5" stroke-linecap="round"/>
            <path d="M180 180 L220 180" stroke="#FF4D4F" stroke-width="5" stroke-linecap="round"/>
            <path d="M380 180 L420 180" stroke="#FF4D4F" stroke-width="5" stroke-linecap="round"/>
            <circle cx="170" cy="130" r="15" fill="#FFC53D"/>
            <circle cx="430" cy="130" r="15" fill="#FFC53D"/>
            <circle cx="200" cy="350" r="12" fill="#FFC53D"/>
            <circle cx="400" cy="350" r="12" fill="#FFC53D"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="hero-bg"></div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',
  methods: {
    scrollToGenerator() {
      const generatorSection = document.querySelector('#generator-section');
      if (generatorSection) {
        generatorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: var(--spacing-xxl) 0;
  background-color: var(--background-light);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(135deg, rgba(255, 77, 79, 0.1) 0%, rgba(255, 197, 61, 0.1) 100%);
  z-index: 0;
}

.hero-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-xxl);
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: var(--spacing-md);
  color: var(--secondary-color);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
}

.hero-cta {
  font-size: 1.1rem;
  padding: 12px 28px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background-color: white;
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
  }

  .hero-content {
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }

  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .illustration svg {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style> 