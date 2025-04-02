import { createRouter, createWebHistory } from 'vue-router'

import NormalLayout from '@/layout/NormalLayout.vue'

// Pages
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import FaqView from '@/views/FaqView.vue'
import TermsView from '@/views/TermsAndConditions/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: NormalLayout,
      children: [
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
          path: '/faq',
          name: 'faq',
          component: FaqView,
        },
      ]
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsView,
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route for 404
      name: 'not-found',
      component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router
