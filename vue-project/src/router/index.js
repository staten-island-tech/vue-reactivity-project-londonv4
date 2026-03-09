import { createRouter, createWebHistory } from 'vue-router'
import icecreamBuilder from '@/views/icecreamBuilder.vue'
import icecreamCard from '@/views/icecreamCard.vue'
import icecreamCone from '@/views/icecreamCone.vue'

const routes = [
  {
    path: '/icecreamBuilder',
    name: 'icecreamBuilder',
    component: icecreamBuilder,
  },
  {
    path: '/icecreamCard',
    name: 'icecreamCard',
    component: icecreamCard,
  },
  {
    path: '/icecreamCone',
    name: 'IcecreamCone',
    component: icecreamCone,
  },
  {
    path: '/', 
    redirect: '/icecreamBuilder',
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router