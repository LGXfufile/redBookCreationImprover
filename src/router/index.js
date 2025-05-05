import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApiTestView from '../views/ApiTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/api-test',
      name: 'api-test',
      component: ApiTestView,
      meta: {
        title: 'API测试'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: '关于'
      }
    }
  ]
})

// 路由标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - 小红书文案生成器` : '小红书文案生成器'
  next()
})

export default router 