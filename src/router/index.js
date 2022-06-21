import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/createticket',
    name: 'createticket',
    component: () => import('../components/CreateTicket.vue'),
  },
  {
    path: '/editticket',
    name: 'editticket',
    component: () => import('../components/EditTicket.vue'),
  },
  {
    path: '/UserManagement',
    name: 'Usermanagement',
    component: () => import('../components/UserManagement.vue'),
  },

  {
    path: '/EditUser',
    name: 'EditUser',
    component: () => import('../components/EditUser.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
