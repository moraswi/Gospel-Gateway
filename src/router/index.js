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
    component: () => import("@/layouts/admin"),

    children: [
      // AdminDashboard
      {
        path: '/dashboard',
        name: 'AdminDashboard',
        component: () => import("@/views/private/dashboard/DashboardView.vue"),
      },

       // AdminChurchPlan
       {
        path: '/church-plan',
        name: 'AdminChurchPlan',
        component: () => import("@/views/private/churchplan/ChurchPlan.vue"),
      },

       // AdminEvents
       {
        path: '/events',
        name: 'AdminEvents',
        component: () => import("@/views/private/events/Events.vue"),
      },

      // AdminMemberAndRoles
      {
        path: '/member-and-roles',
        name: 'AdminMemberAndRoles',
        component: () => import("@/views/private/member&roles/Member&Roles.vue"),
      },

        // AdminServiceProgram
        {
          path: '/service-program',
          name: 'AdminServiceProgram',
          component: () => import("@/views/private/serviceprogram/ServiceProgram.vue"),
        },

      // AdminOffering
      {
        path: '/offering',
        name: 'AdminOffering',
        component: () => import("@/views/private/offering/Offering.vue"),
      },

       // AdminPeople
       {
        path: '/people',
        name: 'AdminPeople',
        component: () => import("@/views/private/people/People.vue"),
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
