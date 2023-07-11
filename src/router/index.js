import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/landing_page/Home.vue'
import SekolahKedinasan from '../views/landing_page/SekolahKedinasan.vue'
import FotoKegiatan from '../views/landing_page/FotoKegiatan.vue'
import DaftarTentor from '../views/landing_page/DaftarTentor.vue'

Vue.use(VueRouter)

const routes = [
  // AUTH
  {
    path: '/logintest',
    name: 'Login',
    component: () => import('../views/Logintest.vue'),
  },


  // MEMBER
  {
    path: '/member',
    name: 'Dashboard',
    component: () => import('../Member/views/Dashboard.vue'),
  },
  {
    path: '/member/profile',
    name: 'Profile',
    component: () => import('../Member/views/Profile.vue'),
  },
  {
    path: '/member/tentor',
    name: 'Tentor',
    component: () => import('../Member/views/Tentor.vue'),
  },
  {
    path: '/member/jadwal_pelaksanaan',
    name: 'Jadwal Pelaksanaan',
    component: () => import('../Member/views/JadwalPelaksanaan.vue'),
  },
  {
    path: '/member/soal_ujian',
    name: 'Soal Ujian',
    component: () => import('../Member/views/SoalUjian.vue'),
  },
  {
    path: '/member/ujian',
    name: 'Ujian',
    component: () => import('../Member/views/Ujian.vue'),
  },
  {
    path: '/member/history',
    name: 'History',
    component: () => import('../Member/views/HistoryUjian.vue'),
  },
  {
    path: '/member/detail_history/:UjianId',
    name: 'History',
    component: () => import('../Member/views/DetailHistory.vue'),
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
