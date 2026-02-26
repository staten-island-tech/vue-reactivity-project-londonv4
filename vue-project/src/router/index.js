import icecreamBuilder from '@/views/icecreamBuilder.vue'



import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/icecreamBuilder',
      name: 'icecreamBuilder',
      component: () => import('../views/icecreamBuilder.vue'),
    },
    {
      path: '/icecreamCard',
      name: 'icecreamCard',
      component: () => import('../views/icecreamCard.vue'),
    },
{
      path: '/flavorSelector',
      name: 'flavorSelector',
      component: () => import('../views/flavorSelector.vue'),
    },
    {
      path: '/toppingSelector',
      name: 'flavorSelector',
      component: () => import('../views/flavorSelector.vue'),
    },
  ],
})

export default router

// example from notes
// import { createRouter, createWebHistory } from 'vue-router'
// import ViewLists from '@/views/ViewLists.vue'


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [

//      {
//       path: '/view-lists',
//       name: 'view-lists',
//       component: ViewLists,
//     },
    
//   ],
// })

// export default router

