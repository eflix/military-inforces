<template>
    <div class="halaman-tentang-kami">
      <Header />
      <Navbar />
      <section class="banner-tk">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <b-breadcrumb :items="items"></b-breadcrumb>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                    <h3>Tentang Kami</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </div>
      </section>
      <section class="tentang-kami page-tentang-kami">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <table class="tb-tentang-kami">
              <tr>
                <td>
                  <img src="../../assets/images/ptentang-kami.png" class="ptentan-kami-image">
                </td>
                <td>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <h3>Visi Kami</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <h3>Misi kami</h3>
                  <ol>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                  </ol>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
      <section class="daftar-harga">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h1>MACAM Bimbingan Belajar</h1>
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
    name: 'Tentang Kami',
    components: {
      Header,
      Navbar,
      Footer,
    },
    data() {
      return {
        items: [
          {
            text: 'Beranda',
            href: '/'
          },
          {
            text: 'Tentang Kami',
            active: true
          }
        ],
      }
    }
  }
  </script>
  