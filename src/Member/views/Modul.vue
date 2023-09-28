<template>
  <div class="container mt-3">
    <h3>Daftar Modul</h3>
    <!-- <a href="https://bimbel-militaryinforces.com/api/assets/modul/test.pdf" download>DOWNLOAD</a> -->
    <!-- <a href="https://bimbel-militaryinforces.com/api/assets/modul/test.pdf" download>DOWNLOAD</a> -->
    <!-- <button v-on:click="clickedDownload()">download</button> -->
    <b-table
      id="table-transition-example"
      :items="modul.data"
      :fields="fields"
      striped
      small
      primary-key="nama"
      :tbody-transition-props="transProps"
    >
    <template v-slot:cell(path_modul)="data">
      <b-button size="sm" class="mr-2" v-on:click="clickedDownload(data.item.path_modul)">
           download
        </b-button>
    </template>
    </b-table>
    <!-- {{products.data}} -->

</div>
</template>

<script>
import axios from 'axios';

export default {
data(){
    return{
      username: this.$session.get("username")?this.$session.get("username"):"",
      modul:[],
      transProps: {
          // Transition name
          name: 'flip-list'
        },
        fields: [
        {key : "nama_modul", sortable: true},
        {key : "path_modul", sortable: false}
        ]
    }
  },
  methods:{
     setModul(data){
      this.modul = data
    },
    clickedDownload(url){
      var fileName='https://bimbel-militaryinforces.com/api/assets/modul/' + url;
        // var fileName='https://bimbel-militaryinforces.com/api/assets/modul/test.pdf';
      window.open(fileName, 'Download');
    }
  },
  mounted(){
    axios.get('http://localhost/api2/military_inforces/admin/member/all_modul', {
      headers: {
        "Content-type": "application/json",
        }
    })
  .then( (response) =>this.setModul(response.data))
  .catch((error) => console.log(error));
  }
}
</script>

<style>
.card-header {
    font-size: 2rem;
}
</style>