<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-logo">
        <span class="star">⭐</span>
        <h2>{{ $t('header.title') }}</h2>
        <span class="star">⭐</span>
      </div>
      
      <div class="footer-social">
        <a href="#" class="social-link" title="抖音">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.589 6.686a5.698 5.698 0 0 1-3.355-1.1V14.4c0 3.313-2.69 6-6 6s-6-2.687-6-6 2.69-6 6-6c.295 0 .583.22.86.066v3.333a2.704 2.704 0 0 0-.86-.133 2.671 2.671 0 0 0-2.667 2.667c0 1.47 1.196 2.666 2.667 2.666 1.47 0 2.667-1.196 2.666-2.666V2.667h3.333a5.665 5.665 0 0 0 3.356 3.686v.333z" fill="currentColor"/>
          </svg>
        </a>
        
        <a href="#" class="social-link" title="小红书">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.5 14.5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0-3h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm-1-3.5h-5a2.5 2.5 0 0 1 0-5h5a2.5 2.5 0 0 1 0 5z" fill="currentColor"/>
          </svg>
        </a>
        
        <a href="#" class="social-link" title="B站">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" fill="currentColor"/>
          </svg>
        </a>
      </div>
      
      <div class="footer-links">
        <a href="#" class="footer-link">{{ $t('footer.contactUs') }}</a>
        <a href="#" class="footer-link">{{ $t('footer.privacyPolicy') }}</a>
        <a href="#" class="footer-link">{{ $t('footer.termsOfService') }}</a>
      </div>
      
      <div class="footer-copyright">
        {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterSection'
});
</script>

<style scoped>
.footer {
  background-color: var(--secondary-color);
  color: white;
  padding: var(--spacing-xxl) 0;
  margin-top: auto;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.footer-logo h2 {
  font-size: 1.3rem;
  margin: 0 var(--spacing-sm);
  color: white;
}

.star {
  color: var(--accent-color);
  font-size: 1rem;
}

.footer-social {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  justify-content: center;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition);
}

.footer-link:hover {
  color: white;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style> 