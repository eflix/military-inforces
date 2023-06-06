<template>
  <div class="">
    <Header />
    <Navbar />
    <section class="bg-white">
      <div class="container">
        <div class="row">
            <div class="col-md-12 text-right mt-4">
                <router-link class="card-text btn-orange" to="/">Beranda</router-link> / Sekolah Kedinasan
            </div>
            <div class="col-md-12 m-4">
                <h1>SEKOLAH KEDINASAN</h1>
            </div>
        </div>
        <div class="row m-4">
            <div class="col-md-4">
                <table>
                    <thead><tr><td>Pilih Kategori Sekolah Kedinasan</td></tr></thead>
                    <tbody>
                        <tr rowspan="2"><td><a href="">Kementrian Kelautan & Perikanan</a></td></tr>
                        <tr><td><a href="">Kementrian Pertahanan</a></td></tr>
                        <tr><td><a href="">Kementrian Hukum & HAM</a></td></tr>
                        <tr><td><a href="">Kementrian Keuangan</a></td></tr>
                        <tr><td><a href="">Kementrian Luar Negeri</a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/landing_page/Header.vue'
import Navbar from '@/components/landing_page/Navbar.vue'
import Footer from '@/components/landing_page/Footer.vue'

export default {
  name: 'SekolahKedinasan',
  components: {
    Header,
    Navbar,
    Footer
  }
}
</script>
