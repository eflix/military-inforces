import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/landing_page/Home.vue'
import SekolahKedinasan from '../views/landing_page/SekolahKedinasan.vue'
import FotoKegiatan from '../views/landing_page/FotoKegiatan.vue'
import DaftarTentor from '../views/landing_page/DaftarTentor.vue'
import TentangKami from '../views/landing_page/TentangKami.vue'
import ProsesKegiatan from '../views/landing_page/ProsesKegiatan.vue'
import SusunanOrganisasi from '../views/landing_page/SusunanOrganisasi.vue'
import Registrasi from '../views/landing_page/Registrasi.vue'
import Login from '../views/landing_page/Login.vue'
import SyaratKetentuan from '../views/landing_page/SyaratKetentuan.vue'
import RegistrasiSuccess from '../views/landing_page/RegistrasiSuccess.vue'

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
  {
    path: '/tentang_kami',
    name: 'tentang_kami',
    component: TentangKami
  },
  {
    path: '/proses_kegiatan',
    name: 'proses_kegiatan',
    component: ProsesKegiatan
  },
  {
    path: '/susunan_organisasi',
    name: 'susunan_organisasi',
    component: SusunanOrganisasi
  },
  {
    path: '/registrasi',
    name: 'registrasi',
    component: Registrasi
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/syarat_ketentuan',
    name: 'syarat_ketentuan',
    component: SyaratKetentuan
  },
  {
    path: '/pembayaran',
    name: 'registrasi_success',
    component: RegistrasiSuccess
  },

  // ADMIN
  {
    path: '/admin/member',
    name: 'admin',
    component: () => import('../Admin/views/Member.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
