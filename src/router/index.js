import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    component: () => import("@/layouts/admin.vue"),

    children: [
      // AdminDashboard
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import("@/views/private/dashboard/DashboardView.vue"),
      },

       // AdminChurchPlan
       {
        path: 'church-plan',
        name: 'AdminChurchPlan',
        component: () => import("@/views/private/churchplan/ChurchPlan.vue"),
      },

       // AdminEvents
       {
        path: 'events',
        name: 'AdminEvents',
        component: () => import("@/views/private/events/Events.vue"),
      },

      // AdminMemberAndRoles
      {
        path: 'announcement',
        name: 'Announcement',
        component: () => import("@/views/private/announcement/Announcement.vue"),
      },

        // AdminServiceProgram
        {
          path: 'service-program',
          name: 'AdminServiceProgram',
          component: () => import("@/views/private/serviceprogram/ServiceProgram.vue"),
        },

      // AdminOffering
      {
        path: 'offering',
        name: 'AdminOffering',
        component: () => import("@/views/private/offering/Offering.vue"),
      },

       // AdminPeople
       {
        path: 'people',
        name: 'AdminPeople',
        component: () => import("@/views/private/people/People.vue"),
      },

        // AdminPeople
        {
          path: 'gallary',
          name: 'AdminGallary',
          component: () => import("@/views/private/gallary/Gallary.vue"),
        },
    ]
  },
 
  // Catch-all route
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'MemberLogin' } // Redirect to MemberLogin if no route matches
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
