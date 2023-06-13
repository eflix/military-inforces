import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/landing_page/Home.vue'
import SekolahKedinasan from '../views/landing_page/SekolahKedinasan.vue'
import FotoKegiatan from '../views/landing_page/FotoKegiatan.vue'
import DaftarTentor from '../views/landing_page/DaftarTentor.vue'
// import { Siswa } from "../App.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/member/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/member/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
  {
    path: '/member/statistics',
    name: 'Statistics',
    component: () => import('../views/Statistics.vue'),
  },
  {
    path: '/member/',
    name: 'Siswa',
    component: () => import('../Member/views/Dashboard.vue'),
  },

  // LANDING PAGE
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
    path: '/foto_kegiatan',
    name: 'foto_kegiatan',
    component: FotoKegiatan
  },
  {
    path: '/daftar_tentor',
    name: 'daftar_tentor',
    component: DaftarTentor
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
