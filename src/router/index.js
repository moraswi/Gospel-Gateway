// import { createRouter, createWebHistory } from 'vue-router'

// // private pages
// import DashboardView from '@/views/private/DashboardView.vue'

// const routes = [



//   // public pages
//   {
//     path: '/',
//     component: () => import("@/layouts/default"),
//     children: [
//       {
//         path: "",
//         name: "Home",
//         redirect: { name: "MemberLogin" },
//       },

//       {
//         path: "auth/login",
//         name: "MemberLogin",
//         component: () => import("@/views/public/LogInView.vue"),
//       },
//       {
//         path: 'auth/signup',
//         name: 'MemberSignup',
//         component: () => import("@/views/public/SignUpView.vue"),
//       },
//     ]
//   },


//   // private pages
//   {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: DashboardView
//   },

//     // Catch-all route
//     {
//       path: '/:catchAll(.*)',
//       redirect: { name: 'MemberLogin' } // Redirect to MemberLogin if no route matches
//     }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'



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
        component: () => import("@/views/public/LogInView.vue"),
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
    component: () => import("@/layouts/default"),
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
