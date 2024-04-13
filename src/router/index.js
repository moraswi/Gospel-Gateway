import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const routes = [
  // default
  {
    path: '/',
    component: () => import("@/layouts/default"),
    children: [
      {
        path: "",
        name: "Home",
        redirect: { name: "MemberLogin" },
      },
      {
        path: "auth/login",
        name: "MemberLogin",
        component: () => import("@/views/public/MemberLogInView.vue"),
      },
      {
        path: 'auth/signup',
        name: 'MemberSignup',
        component: () => import("@/views/public/SignUpView.vue"),
      },
    ]
  },

   // member
   {
    path: '/member/',
    component: () => import("@/layouts/default"),
    children: [
    
    ]
  },

  // Admin
  {
    path: '/admin/',
    // component: () => import("@/layouts/admin"),
    component: () => import("@/layouts/admin"),

    children: [
      {
        path: '/dashboard',
        name: 'AdminDashboard',
        component: () => import("@/views/private/DashboardView.vue"),
      },
    ]
  },

  // private pages
 

  // Catch-all route
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'MemberLogin' } // Redirect to MemberLogin if no route matches
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
