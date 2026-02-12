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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
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

