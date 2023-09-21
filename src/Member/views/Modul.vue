<template>
  <div class="container mt-3">
    <h3>Daftar Modul</h3>
    <!-- <a href="https://bimbel-militaryinforces.com/api/assets/modul/test.pdf" download>DOWNLOAD</a> -->
    <!-- <a href="https://bimbel-militaryinforces.com/api/assets/modul/test.pdf" download>DOWNLOAD</a> -->
    <button v-on:click="clickedDownload()">download</button>
    <b-table
      id="table-transition-example"
      :items="products.data"
      :fields="fields"
      striped
      small
      primary-key="nama"
      :tbody-transition-props="transProps"
    >
    <template v-slot:cell(actions)="">
    <b-button size="sm" class="mr-2">
           Details
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
      products:[],
      transProps: {
          // Transition name
          name: 'flip-list'
        },
        fields: [
        {key : "nama", sortable: true},
        {key : "jabatan", sortable: true},
        {key : "actions", sortable: false}
        ]
    }
  },
  methods:{
     setProducts(data){
      this.products = data
    },
    clickedDownload(){
        var fileName='https://bimbel-militaryinforces.com/api/assets/modul/test.pdf';
      window.open(fileName, 'Download');
    }
  },
  mounted(){
    axios.get('http://localhost/api2/military_inforces/member/member/tentor', {
      headers: {
        "Content-type": "application/json",
        }
    })
  .then( (response) =>this.setProducts(response.data))
  .catch((error) => console.log(error));
  }
}
</script>

<style>
.card-header {
    font-size: 2rem;
}
</style>