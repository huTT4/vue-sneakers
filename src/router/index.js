import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import FavouritesPage from '@/views/FavouritesPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/favourites', component: FavouritesPage },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router