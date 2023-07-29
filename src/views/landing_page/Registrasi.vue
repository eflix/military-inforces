<template>
<div class="susunan-organisasi">
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
    <section class="body-skedinasan halaman-registrasi">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h1>Registrasi</h1>
            <p>Silahkan untuk mengisi form dibawah ini, jika Anda ingin mendaftar bimbel pada kami. Silahkan <a href="/login">Login Disini</a> jika Anda telah memiliki akun</p>

            <form>
                <div class="form-group row">
                    <label for="email" class="col-md-3 col-form-label">Email Anda</label>
                    <div class="col-md-9">
                        <input type="email" class="form-control" id="email" placeholder="Masukan email Anda" value="" v-model="input.email">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="no_hp" class="col-md-3 col-form-label">Nomor HP</label>
                    <div class="col-md-9">
                        <input type="number" class="form-control" id="no_hp" placeholder="Masukan Nomor Hp Anda" value="" v-model="input.no_hp">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="nama" class="col-md-3 col-form-label">Nama Anda</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="nama" placeholder="Masukan nama Anda" value="" v-model="input.nama">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="asal_sekolah" class="col-md-3 col-form-label">Asal Sekolah Anda</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="asal_sekolah" placeholder="Masukan Sekolah Asal Anda" value="" v-model="input.asal_sekolah">
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Upload Foto diri Anda</label>
                    <input type="file" class="form-control-file" id="file" v-on:change="onChangeFileUpload()">
                </div>
                <div class="form-group text-pilih-paket">
                    <label for="">Pilih Paket Anda</label>
                </div>
                <select class="custom-select my-1 mr-sm-2" id="category" @change="onChange($event)">
                    <option selected hidden>Pilih Kategori</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">
                        <div class="list-paket">
                            <div class="dlist-paket">
                                <h3>BIN</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing</p>
                                <h2>Rp 100.000</h2>
                                <span><b>Paket Untuk</b></span>
                                <ol>
                                    <li>Masa expired akun 1 tahun</li>
                                    <li>Paket psikotest</li>
                                    <li>Bimbingan latihan fisik</li>
                                    <li>Daftar soal TIU</li>
                                </ol>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">
                        <div class="list-paket">
                            <div class="dlist-paket">
                                <h3>Pengantar Ilmu Politik</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing</p>
                                <h2>Rp 6.000.000</h2>
                                <span><b>Paket Untuk</b></span>
                                <ol>
                                    <li>Masa expired akun 1 tahun</li>
                                    <li>Paket psikotest</li>
                                    <li>Bimbingan latihan fisik</li>
                                    <li>Daftar soal TIU</li>
                                </ol>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">
                        <div class="list-paket">
                            <div class="dlist-paket">
                                <h3>Pengantar Ilmu Politik</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing</p>
                                <h2>Rp 6.000.000</h2>
                                <span><b>Paket Untuk</b></span>
                                <ol>
                                    <li>Masa expired akun 1 tahun</li>
                                    <li>Paket psikotest</li>
                                    <li>Bimbingan latihan fisik</li>
                                    <li>Daftar soal TIU</li>
                                </ol>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">
                        <div class="list-paket">
                            <div class="dlist-paket">
                                <h3>Pengantar Ilmu Politik</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing</p>
                                <h2>Rp 6.000.000</h2>
                                <span><b>Paket Untuk</b></span>
                                <ol>
                                    <li>Masa expired akun 1 tahun</li>
                                    <li>Paket psikotest</li>
                                    <li>Bimbingan latihan fisik</li>
                                    <li>Daftar soal TIU</li>
                                </ol>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">
                        <div class="list-paket">
                            <div class="dlist-paket">
                                <h3>Pengantar Ilmu Politik</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing</p>
                                <h2>Rp 6.000.000</h2>
                                <span><b>Paket Untuk</b></span>
                                <ol>
                                    <li>Masa expired akun 1 tahun</li>
                                    <li>Paket psikotest</li>
                                    <li>Bimbingan latihan fisik</li>
                                    <li>Daftar soal TIU</li>
                                </ol>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Pastikan data yang Anda masukan telah benar
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Anda telah menyetujui <a href="/syarat_ketentuan">Syarat dan Ketentuan</a>
                    </label>
                </div>
                <div class="form-group row mt-5 mb-5">
                    <label for="staticEmail" class="col-md-3 col-form-label"><b>Total Pembayaran</b></label>
                    <div class="col-md-9">
                        <h1>Rp 10.000.000</h1>
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </small>
                    </div>
                    
                </div>
                
                <button class="btn-daftar" v-on:click.prevent = "registrasi()">Daftar Sekarang</button>
            </form>
          </div>
          
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import Header from '@/components/landing_page/Header.vue'
import Navbar from '@/components/landing_page/Navbar.vue'
import Footer from '@/components/landing_page/Footer.vue'

export default {
  name: 'SusunanOrganisasi',
  components: {
    Header,
    Navbar,
    Footer
  },
  data() {
    return {
        file: '',
        onChange(e) {
              console.log(e.target.value);
              this.input.caegory = e.target.value;
          },
      items: [
        {
          text: 'Beranda',
          href: '/'
        },
        {
          text: 'Registrasi',
          active: true
        }
      ],
      input:{
        email: "",
        no_hp: "",
        nama: "",
        asal_sekolah: "",
        file:"",
        caegory:1,
        paket:[],
      }
    }
  },
  methods :{
    registrasi(){
//         var formData = new FormData();
// var imagefile = document.querySelector('#file');
// formData.append("image", imagefile.files[0]);
// axios.post('upload', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
// })   
        if (this.input.email != '' && this.input.no_hp != '' && this.input.nama != '' && this.input.asal_sekolah != '') {
            axios.post('https://bimbelmilitaryinforce.com/api/auth/register', {
                  email : this.input.email,
                  no_hp : this.input.no_hp,
                  nama : this.input.nama,
                  asal_sekolah : this.input.asal_sekolah,
                  category : this.input.category,
                }, {
              headers: {
                "Content-type": "text/plain",
                // "Access-Control-Allow-Origin": "*",
                },
            })
          .then( 
            (response) => {
                console.log(response.data)
                const status = response.data.status
                const message = response.data.message
    
                alert(message)
    
                if (status == 1) {
                    this.$router
                    .push({ path: '/pembayaran' })
                } 
            }
          )
          .catch((error) => console.log(error));
        } else {
            alert('Data Tidak Lengkap')
        }
    },
    submitForm(){
            var formData = new FormData();
var imagefile = document.querySelector('#file');
formData.append("file", imagefile.files[0]);
  
            axios.post('https://bimbelmilitaryinforce.com/api/auth/upload',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              console.log(data.data);
            })
            .catch(function(){
              console.log('FAILURE!!');
            });
      },
    //   onChangeFileUpload(){
    //     // this.file = this.$refs.file.files[0];
    //   }
  }
}
</script>
