<template>
  <div class="home">
    <Header />
    <Navbar />
    <section>
      <div class="container">
      <div class="row mt-4">
        <div class="col-md-5">
          <div class="d-flex h-100 text-white" style="height:100px;">
            <div class="justify-content-center align-self-center">
              <h5>SELAMAT DATANG DI</h5><hr>
              <h1>MILITARY IN FORCES LEARNING CENTRE</h1>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div>
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="1024"
              img-height="720"
            >
              <b-carousel-slide
                caption="First Slide"
                img-src="https://picsum.photos/1024/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
    </section>
    

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/landing_page/Header.vue'
import Navbar from '@/components/landing_page/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Navbar
  }
}
</script>
