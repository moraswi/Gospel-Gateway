import { createRouter, createWebHistory } from 'vue-router'

// public pages
import HomeView from '@/views/public/HomeView.vue'
import LogInView from '@/views/public/LogInView.vue'
import SignUpView from '@/views/public/SignUpView.vue'

// private pages
import DashboardView from '@/views/private/DashboardView.vue'

const routes = [

  // public pages
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },

  // private pages
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
