import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'

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
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  base: '/',
  routes,
  publicPath: '/'
})

export default router
