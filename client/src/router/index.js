import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/currencies',
    name: 'Cryptomonnaies',
    component: () => import('../views/Currencies.vue')
  },
  {
    path: '/blockchain',
    name: 'Blockchain',
    component: () => import('../views/Nothing.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/currencies/monero',
    name: 'Monero',
    component: () => import('../views/Monero.vue')
  },
  {
    path: '/nothing',
    name: 'Nothing',
    component: () => import('../views/Nothing.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
