<template>
  <div class="app">
    <HeaderSection />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <GeneratorSection />
    <TestimonialsSection />
    <PricingSection />
    <FaqSection />
    <FooterSection />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderSection from './components/HeaderSection.vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import HowItWorksSection from './components/HowItWorksSection.vue';
import GeneratorSection from './components/GeneratorSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import PricingSection from './components/PricingSection.vue';
import FaqSection from './components/FaqSection.vue';
import FooterSection from './components/FooterSection.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    FeaturesSection,
    HowItWorksSection,
    GeneratorSection,
    TestimonialsSection,
    PricingSection,
    FaqSection,
    FooterSection
  }
});
</script>

<style>
:root {
  --primary-color: #ff4d4f;
  --primary-light: #ffccd0;
  --secondary-color: #333;
  --accent-color: #ffc53d;
  --text-color: #333;
  --text-light: #666;
  --background-color: #fff;
  --background-light: #f9f9f9;
  --border-color: #eaeaea;
  --success-color: #52c41a;
  --radius: 8px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --transition: all 0.3s ease;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  background-color: var(--background-color);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.section {
  padding: var(--spacing-xxl) var(--spacing-xl);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  color: var(--secondary-color);
}

.section-subtitle {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  color: var(--text-light);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #ff7875;
}

.btn-secondary {
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: var(--primary-light);
}

.card {
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: var(--spacing-lg);
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-xl) var(--spacing-lg);
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
