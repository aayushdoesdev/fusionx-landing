import { createRouter, createWebHistory } from 'vue-router'


// Pages
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route for 404
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
