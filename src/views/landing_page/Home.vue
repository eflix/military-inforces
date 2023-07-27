<template>
  <div class="home">
    <Header />
    <Navbar />
    
    <section class="text-banner">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                  <div class="dtext-banner">
                      <h4>SELAMAT DATANG DI</h4>
                      <h1>MILITARY IN FORCES LEARNING CENTRE</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                      <p class="btnz-index"><a href="/registrasi" class="btn-default">GABUNG SEKARANG</a></p>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section class="banner">
        <table class="table-banner">
            <tr>
                <td>
                  <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="900000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                  >
                    <!-- Text slides with image -->
                    <b-carousel-slide
                      img-src="assets/images/logo.png"
                    >
                      <img src="../../assets/images/banner/banner1.jpg">
                    </b-carousel-slide>

                    <b-carousel-slide
                      img-src="assets/images/logo.png"
                    >
                      <img src="../../assets/images/banner/banner1.jpg">
                    </b-carousel-slide>

                    <b-carousel-slide
                      img-src="assets/images/logo.png"
                    >
                      <img src="../../assets/images/banner/banner1.jpg">
                    </b-carousel-slide>
                  </b-carousel>
                </td>
            </tr>
        </table>
    </section>
    <section class="spesialis-kami">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="dspesialis-kami">
              <div class="first-sp">
                <h2>SPESIALISASI KAMI</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <a href="/sekolah_kedinasan" class="btn-default">lihat Lebih banyak</a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href="" class="">
              <div class="dspesialis-kami">
                <img src="../../assets/images/spesialis/1.jpg">
                <div class="text-foot">
                  <h2>KORPS POLRI</h2>
                  <p><a href="" class="">lihat Selengkapnya</a></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href="" class="">
              <div class="dspesialis-kami">
                <img src="../../assets/images/spesialis/2.jpg">
                <div class="text-foot">
                  <h2>Tentara nasional indonesia</h2>
                  <p><a href="" class="">lihat Selengkapnya</a></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href="" class="">
              <div class="dspesialis-kami">
                <img src="../../assets/images/spesialis/3.jpg">
                <div class="text-foot">
                  <h2>Stan</h2>
                  <p><a href="" class="">lihat Selengkapnya</a></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href="" class="">
              <div class="dspesialis-kami">
                <img src="../../assets/images/spesialis/4.jpg">
                <div class="text-foot">
                  <h2>Stin</h2>
                  <p><a href="" class="">lihat Selengkapnya</a></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <a href="" class="">
              <div class="dspesialis-kami">
                <img src="../../assets/images/spesialis/5.jpg">
                <div class="text-foot">
                  <h2>CET BEA cukai</h2>
                  <p><a href="" class="">lihat Selengkapnya</a></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="tentang-kami">
      <img src="../../assets/images/icon1.png" class="icon1">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <table class="tb-tentang-kami">
              <tr>
                <td>
                  <h2>TENTANG KAMI</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <p><a href="/tentang_kami" class="btn-default">Selengkapnya</a></p>
                  <h3>Keunggulan kami</h3>
                  <ol>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                  </ol>
                </td>
                <td>
                  <img src="../../assets/images/icon2.png" class="icon2">
                  <img src="../../assets/images/tentang-kami.jpg">
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section class="quotes">
      <div class="oquotes">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div class="quotes-img">
                <img src="../../assets/images/img1.png" class="img-quotes">
              </div>
            </div>
            <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12">
              <div class="quotes-text">
                <h1>Tunggu apa lagi?</h1>
                <p>Segera bergabung bersama <span class="font-merk">Military in Forces Learning Centre</span> & gapai impian-mu berkarir di POLRI maupun TNI atau Sekolah Kedinasan lainnya.</p>
                <p><a href="/registrasi" class="btn-default">GABUNG SEKARANG</a></p>
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
  name: 'Home',
  components: {
    Header,
    Navbar,
    Footer
  },
  data () {
    return {
      items: [
        
      ],
    }
  },
}
</script>
