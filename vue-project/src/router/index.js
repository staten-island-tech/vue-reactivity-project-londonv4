import { createRouter, createWebHistory } from 'vue-router'
import IcecreamBuilder from '@/views/IcecreamBuilder.vue'


const routes = [
  {
    path: '/Icecream-builder',
    name: 'IcecreamBuilder',
    component: IcecreamBuilder,
  },
  {
    path: '/',
    redirect: '/icecream-builder'
  }
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router