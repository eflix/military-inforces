import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/landing_page/Home.vue'
import SekolahKedinasan from '../views/landing_page/SekolahKedinasan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sekolah_kedinasan',
    name: 'sekolah_kedinasan',
    component: SekolahKedinasan
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
