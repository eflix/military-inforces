<template>
  <div class="">
    <Header />
    <Navbar />
    <section class="bg-white">
      <div class="container">
        <div class="row">
            <div class="col-md-12 text-right mt-4">
                <router-link class="card-text btn-orange" to="/">Beranda</router-link> / Foto Kegiatan
            </div>
            <div class="col-md-12 mt-5">
                <h1>GALERI FOTO KEGIATAN</h1>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-md-2 mb-3">
                <a href=""><img src="https://picsum.photos/417/289/?image=22" class="card-img-top" alt="..."></a>
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
  name: 'FotoKegiatan',
  components: {
    Header,
    Navbar,
    Footer
  }
}
</script>
