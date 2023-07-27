<template>
  <div class="sekolah-kedinasan">
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
            <h1>SEKOLAH KEDINASAN</h1>
            <h5>pilih kategori sekolah kedinasan</h5>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab title="Kementerian Kelautan & Perikanan" active><b-card-text>
                  <a href="" class="card-sk">
                    <div class="dcard-sk">
                      <img src="../../assets/images/icon-skedinasan/tni-ad.png">
                      <p>TNI AD</p>
                    </div>
                  </a>
                  <a href="" class="card-sk">
                    <div class="dcard-sk">
                      <img src="../../assets/images/icon-skedinasan/tni-al.png">
                      <p>TNI AL</p>
                    </div>
                  </a>
                  <a href="" class="card-sk">
                    <div class="dcard-sk">
                      <img src="../../assets/images/icon-skedinasan/tni-au.png">
                      <p>TNI AU</p>
                    </div>
                  </a>
                  <a href="" class="card-sk">
                    <div class="dcard-sk">
                      <img src="../../assets/images/icon-skedinasan/polri.png">
                      <p>POLRI</p>
                    </div>
                  </a>
                  <a href="" class="card-sk">
                    <div class="dcard-sk">
                      <img src="../../assets/images/icon-skedinasan/bin.png">
                      <p>Badan Intelijen Negara</p>
                    </div>
                  </a>
                </b-card-text></b-tab>
                <b-tab title="Kementerian Pertahanan"><b-card-text>Tab contents 2</b-card-text></b-tab>
                <b-tab title="Kementerian Hukum & HAM"><b-card-text>Tab contents 3</b-card-text></b-tab>
                <b-tab title="Kementerian Keuangan"><b-card-text>Tab contents 2</b-card-text></b-tab>
                <b-tab title="Kementerian Luar Negeri"><b-card-text>Tab contents 3</b-card-text></b-tab>
              </b-tabs>
            </b-card>
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
  },
  data() {
    return {
      items: [
        {
          text: 'Beranda',
          href: '/'
        },
        {
          text: 'Sekolah Kedinasan',
          active: true
        }
      ]
    }
  }
}
</script>
