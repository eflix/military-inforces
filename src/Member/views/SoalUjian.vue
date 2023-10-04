<template>
  <div class="container mt-3">
    <h3>Soal Ujian</h3> 

    <div class="form-group row">
        <label for="" class="col-sm-3 col-form-label">Masukan Nama Kategori Soal</label>
        <div class="col-sm-9">
            <select name="id_paket" class="form-control" @change="onChange($event)">
              <option value=""></option>
                <option v-for="(item, index) in paket.data" :key="index" :value="item.id" >{{item.nama_paket}}</option>
            </select>
        </div>
    </div>

    <b-row>
        <b-col sm="3" class="mb-3">Paket</b-col><b-col sm="9">: {{nama_paket}}</b-col>
        <b-col sm="3" class="mb-3">jumlah Soal</b-col><b-col sm="9">: {{jumlah_soal}}</b-col>
        <b-col sm="3" class="mb-3">Waktu</b-col><b-col sm="9">: {{waktu}} Menit</b-col>
        <b-col sm="3" class="mb-3">Deskripsi</b-col><b-col sm="9">: {{deskripsi}}</b-col>
        <b-col sm="3" class="mb-3">List Kategori</b-col><b-col sm="9">: {{list_category}}</b-col>
    </b-row>
    <!-- {{jadwal.data}} -->

    <button v-if="jadwal.data" class="btn btn-success" v-on:click.prevent = "returnUjian()"> Lanjutkan Ujian </button>
    <button v-else class="btn btn-success" v-on:click.prevent = "setDetailUjian()"> Mulai Ujian </button>
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
      id_user: this.$session.get("id")?this.$session.get("id"):"",
      jadwal:[],
      paket:[],
      nama_paket:'',
      jumlah_soal:0,
      waktu:0,
      id_paket:0,
      deskripsi:'',
      list_category:'',
      tmp_ujian:false
    }
  },
  methods:{
     setDetailUjian(){
        axios.post('https://bimbel-militaryinforces.com/api/member/ujian/set_detail_ujian', 
        {id_paket : this.id_paket,id_user:this.id_user,jumlah_soal:this.jumlah_soal,waktu:this.waktu},
        {
          headers: {
            "Content-type": "text/plain",
            }
        })
      .then( 
        (response) => console.log(response.data),
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
     setTempUjian(data){
      this.jadwal = data
    },
    setPaket(data){
      this.paket = data
    },
    onChange(e){
      // this.nama_paket = e.target.value
      this.id_paket = e.target.value
      // this.jumlah_soal = 100
      // this.waktu = 120

      axios.post('https://bimbel-militaryinforces.com/api/member/ujian/paket_by_id', 
        {id_paket : this.id_paket,id_user:this.id_user},
        {
          headers: {
            "Content-type": "text/plain",
            }
        })
      .then( (response) => {
        var paket = response.data.data[0]
        this.nama_paket = paket.nama_paket
        // console.log(paket)
        this.jumlah_soal = paket.jumlah_soal
        this.waktu = paket.waktu
        this.deskripsi = paket.deskripsi
        this.list_category = paket.list_deskripsi_paket
      })
      .catch((error) => console.log(error));
    }
  },
  mounted(){
    axios.post('https://bimbel-militaryinforces.com/api/member/ujian/temp_ujian', 
    {id_user : this.id_user},
    {
      headers: {
        "Content-type": "text/plain",
        }
    })
  .then( (response) => {
    this.setTempUjian(response.data)
    console.log(response.data) 
    }
    )
  .catch((error) => console.log(error));
  axios.post('https://bimbel-militaryinforces.com/api/member/ujian/all_paket_by_member', 
        {id_user : this.id_user},
        {
          headers: {
            "Content-type": "text/plain",
            }
        })
      .then( (response) => {
        // console.log(response.data)
        this.setPaket(response.data)
      })
      .catch((error) => console.log(error));
  }
}
</script>

<style>

</style>