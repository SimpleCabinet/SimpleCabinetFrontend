import { createRouter, createWebHistory } from 'vue-router'
import CabinetView from '../views/CabinetView.vue'
import users from './users'
import auth from './auth'
import debug from './debug'
import security from './security'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CabinetView,
    },
    ...users,
    ...auth,
    ...debug,
    ...security,
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
