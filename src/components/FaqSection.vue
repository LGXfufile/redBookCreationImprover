<template>
  <section class="section faq-section">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.faq.title') }}</h2>
      
      <div class="faq-container">
        <el-collapse>
          <el-collapse-item :title="$t('sections.faq.q1')" name="1">
            <div class="faq-answer">{{ $t('sections.faq.a1') }}</div>
          </el-collapse-item>
          
          <el-collapse-item :title="$t('sections.faq.q2')" name="2">
            <div class="faq-answer">{{ $t('sections.faq.a2') }}</div>
          </el-collapse-item>
          
          <el-collapse-item :title="$t('sections.faq.q3')" name="3">
            <div class="faq-answer">{{ $t('sections.faq.a3') }}</div>
          </el-collapse-item>
          
          <el-collapse-item :title="$t('sections.faq.q4')" name="4">
            <div class="faq-answer">{{ $t('sections.faq.a4') }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FaqSection'
});
</script>

<style scoped>
.faq-section {
  background-color: white;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: var(--spacing-xl);
}

.faq-answer {
  color: var(--text-light);
  line-height: 1.6;
  padding: var(--spacing-md) 0;
}

:deep(.el-collapse-item__header) {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--secondary-color);
  padding: var(--spacing-md) 0;
}

:deep(.el-collapse-item__wrap) {
  background-color: white;
}

:deep(.el-collapse) {
  border: none;
}

:deep(.el-collapse-item) {
  border-bottom: 1px solid var(--border-color);
}
</style> 