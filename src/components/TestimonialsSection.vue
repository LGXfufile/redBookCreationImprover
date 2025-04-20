<template>
  <section class="section testimonials-section">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.testimonials.title') }}</h2>
      
      <div class="testimonials-grid">
        <div class="testimonial-card card">
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">{{ $t('sections.testimonials.testimonial1.text') }}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">👩</div>
            <div class="testimonial-name">{{ $t('sections.testimonials.testimonial1.author') }}</div>
          </div>
        </div>
        
        <div class="testimonial-card card">
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">{{ $t('sections.testimonials.testimonial2.text') }}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">👨</div>
            <div class="testimonial-name">{{ $t('sections.testimonials.testimonial2.author') }}</div>
          </div>
        </div>
        
        <div class="testimonial-card card">
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">{{ $t('sections.testimonials.testimonial3.text') }}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">👩</div>
            <div class="testimonial-name">{{ $t('sections.testimonials.testimonial3.author') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestimonialsSection'
});
</script>

<style scoped>
.testimonials-section {
  background-color: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.testimonial-card {
  position: relative;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  text-align: left;
}

.testimonial-quote {
  position: absolute;
  top: 20px;
  left: 24px;
  font-size: 4rem;
  color: var(--primary-light);
  font-family: serif;
  opacity: 0.5;
  line-height: 0;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.testimonial-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: var(--spacing-md);
  font-size: 1.5rem;
}

.testimonial-name {
  font-weight: 600;
  color: var(--secondary-color);
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style> 