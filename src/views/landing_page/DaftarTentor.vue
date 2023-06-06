<template>
  <div class="">
    <Header />
    <Navbar />
    <section class="bg-white">
      <div class="container">
        <div class="row">
            <div class="col-md-12 text-right mt-4">
                <router-link class="card-text btn-orange" to="/">Beranda</router-link> / Daftar Tentor
            </div>
            <div class="col-md-12 mt-4">
                <h1>DAFTAR TENTOR</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-3 mb-3">
                <div class="card" style="border:0">
                    <img src="https://picsum.photos/250/250/?image=22" class="card-img-top" alt="...">
                    <div class="" style="">
                        <h5 class="card-title mt-2">Walt Disney Signature</h5>
                        <p class="btn-orange">Sersant</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card" style="border:0">
                    <img src="https://picsum.photos/250/250/?image=22" class="card-img-top" alt="...">
                    <div class="" style="">
                        <h5 class="card-title mt-2">Walt Disney Signature</h5>
                        <p class="btn-orange">Sersant</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card" style="border:0">
                    <img src="https://picsum.photos/250/250/?image=22" class="card-img-top" alt="...">
                    <div class="" style="">
                        <h5 class="card-title mt-2">Walt Disney Signature</h5>
                        <p class="btn-orange">Sersant</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card" style="border:0">
                    <img src="https://picsum.photos/250/250/?image=22" class="card-img-top" alt="...">
                    <div class="" style="">
                        <h5 class="card-title mt-2">Walt Disney Signature</h5>
                        <p class="btn-orange">Sersant</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card" style="border:0">
                    <img src="https://picsum.photos/250/250/?image=22" class="card-img-top" alt="...">
                    <div class="" style="">
                        <h5 class="card-title mt-2">Walt Disney Signature</h5>
                        <p class="btn-orange">Sersant</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card" style="border:0">
                    <img src="https://picsum.photos/250/250/?image=22" class="card-img-top" alt="...">
                    <div class="" style="">
                        <h5 class="card-title mt-2">Walt Disney Signature</h5>
                        <p class="btn-orange">Sersant</p>
                    </div>
                </div>
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
  name: 'DaftarTentor',
  components: {
    Header,
    Navbar,
    Footer
  }
}
</script>
