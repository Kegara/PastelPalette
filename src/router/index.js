import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Stock from '../views/Stock.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Stock',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/Orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  }

]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

export default router
