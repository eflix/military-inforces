<template>
  <div class="container mt-3">
    <h3>Soal Ujian</h3> 

    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label">Masukan Nama Kategori Soal</label>
        <div class="col-sm-9">
            <select name="id_category" class="form-control" @change="onChange($event)">
                <option v-for="(item, index) in category.data" :key="index" :value="item.id" >{{item.nama_category}}</option>
            </select>
        </div>
    </div>

    <b-row>
        <b-col sm="3" class="mb-3">Paket</b-col><b-col sm="9">: {{nama_paket}}</b-col>
        <b-col sm="3" class="mb-3">jumlah Soal</b-col><b-col sm="9">: {{jumlah_soal}}</b-col>
        <b-col sm="3" class="mb-3">Waktu</b-col><b-col sm="9">: {{waktu}} Menit</b-col>
    </b-row>
    <!-- {{jadwal.data}} -->

    <button v-if="jadwal.data" class="btn btn-success" v-on:click.prevent = "returnUjian()"> Lanjutkan Ujian </button>
    <button v-else class="btn btn-success" v-on:click.prevent = "getPertanyaan()"> Mulai Ujian </button>
    <!-- <b-table
      id="table-transition-example"
      :items="Jadwal.data"
      :fields="fields"
      striped
      small
      primary-key="tanggal"
      :tbody-transition-props="transProps"
    ></b-table> -->  
</div>
</template>

<script>
import axios from 'axios';

export default {
data(){
    return{
      username: this.$session.get("username")?this.$session.get("username"):"",
      jadwal:[],
      category:[],
      nama_paket:'',
      jumlah_soal:'',
      waktu:0,
    }
  },
  methods:{
     getPertanyaan(){
        axios.get('http://localhost/api2/military_inforces/member/member/set_ujian', {
          headers: {
            "Content-type": "application/json",
            }
        })
      .then( 
        (response) => console.log(response.data.message),
      this.$router
                .push({ path: '/member/ujian' })
                .then(() => { this.$router.go() })
      )
      .catch((error) => console.log(error));
     },
     returnUjian(){
      this.$router
                .push({ path: '/member/ujian' })
                .then(() => { this.$router.go() })
     },
     setJadwal(data){
      this.jadwal = data
    },
    setCategory(data){
      this.category = data
    },
    onChange(e){
      this.nama_paket = e.target.value
      this.jumlah_soal = 100
      this.waktu = 120
    }
  },
  mounted(){
    axios.get('http://localhost/api2/military_inforces/member/member/cek_ujian', {
      headers: {
        "Content-type": "application/json",
        }
    })
  .then( (response) =>this.setJadwal(response.data))
  .catch((error) => console.log(error));
  axios.get('https://bimbel-militaryinforces.com/api/admin/landing_page/all_category', {
          headers: {
            "Content-type": "application/json",
            }
        })
      .then( (response) => {
        console.log(response.data)
        this.setCategory(response.data)
      })
      .catch((error) => console.log(error));
  }
}
</script>

<style>

</style>