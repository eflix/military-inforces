<template>
    <div class="program-bimbingan">
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
                <h1>Program Bimbingan</h1>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="box-bimbingan">
                    <div class="dbox-bimbingan">
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/1.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/2.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/1.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/2.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/1.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/2.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/1.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
                        <a href="" class="list-harga-bimbingan">
                            <img src="../../assets/images/macam-bimbingan/2.jpg">
                            <div class="div-text">
                                <p><b>Pengantar Ilmu Politik</b></p>
                                <span>Rp 250.000</span>
                            </div>
                        </a>
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
      name: 'ProgramBimbingan',
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
              text: 'Program Bimbingan',
              active: true
            }
          ]
        }
      }
    }
    </script>
    