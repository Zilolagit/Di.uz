import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("@/views/AboutView.vue")
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import("@/views/ContactView.vue")
    },
    {
      path: '/blog/:id',
      name: 'blogsingle',
      component: () => import("@/views/BlogSingle.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
