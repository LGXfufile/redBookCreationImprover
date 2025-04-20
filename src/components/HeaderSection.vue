<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <span class="star">⭐</span>
        <h1>{{ $t('header.title') }}</h1>
        <span class="star">⭐</span>
      </div>
      <nav class="nav">
        <button class="language-switch" @click="toggleLanguage">
          {{ $t('header.langSwitch') }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderSection',
  methods: {
    toggleLanguage() {
      const currentLocale = this.$i18n.locale;
      this.$i18n.locale = currentLocale === 'zh-CN' ? 'en-US' : 'zh-CN';
    }
  }
});
</script>

<style scoped>
.header {
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.logo h1 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin: 0;
}

.star {
  font-size: 1.2rem;
  color: var(--accent-color);
}

.nav {
  display: flex;
  align-items: center;
}

.language-switch {
  background: none;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: var(--radius);
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: var(--transition);
}

.language-switch:hover {
  background-color: var(--primary-light);
}

@media (max-width: 768px) {
  .logo h1 {
    font-size: 1.2rem;
  }

  .language-switch {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style> 