<template>
<div class="Pembayaran">
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
    <section class="body-skedinasan halaman-info-pembayaran">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h1>Registrasi Berhasil</h1>
            <p>Terimakasih Anda telah mendaftar bimbingan belajar pada kami dan pendaftaran Anda telah berhasil</p>
            <p>Selanjutnya Anda dapat mentransfer biaya pendaftaran Anda sesuai pilihan pembelajaran Anda ke rekening dibawah ini</p>
            <div class="no-rek">
                <img src="../../assets/images/bank/bca.png" class="bank-logo">
                <p>No rekening: <b>1234567890</b></p>
                <p>Atas Nama: <b>CV. Media Utama</b></p>
            </div>
            <p>Kemudian Anda dapat mengirimkan bukti transfer pada form dibawah ini.</p>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Upload Bukti Pembayaran</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
                <div class="mb-3">
                    <label for="username">Atas Nama pengirim </label>
                    <input type="text" id="" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="password">Transfer melalui </label>
                    <input type="text" id="" class="form-control" />
                </div>
                <button class="btn-daftar" type="submit" v-on:click.prevent = "login()">
                    Kirim Bukti Pembayaran
                </button>
            </form>
          </div>
        </div>
        <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1">
            <p class="my-4">Terimakasih bukti transfer Anda berhasil terkirim. Silahkan tunggu 1x24 kami akan kirimkan password login anda ke email yang telah terdaftar</p>
        </b-modal>
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
  name: 'RegistrasiSuccess',
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
          text: 'Registrasi',
          href: '/registrasi'
        },
        {
          text: 'Pembayaran',
          active: true
        }
      ]
    }
  },
  methods:{
    
  }
}
</script>
