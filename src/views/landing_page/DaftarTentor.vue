<template>
<div class="daftar-tentor">
    <Header />
    <Navbar />

    <section class="head-breadcrumb">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <b-breadcrumb :items="items"></b-breadcrumb>
          </div>
        </div>
      </div>
    </section>
    <section class="body-skedinasan">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h1>Daftar Tentor</h1>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
  },
  data() {
    return {
      items: [
        {
          text: 'Beranda',
          href: '/'
        },
        {
          text: 'Daftar Tentor',
          active: true
        }
      ]
    }
  }
}
</script>
