<template>
  <div class="container mt-3">
    <b-card
            header-text-variant="h1"
            border-variant="warning"
            header="Profile"
            header-bg-variant="transparent"
            align="left"
        >
        <b-card-body>
            <b-row>
                <b-col sm="3" class="mb-3">Nama</b-col><b-col sm="9">: {{products.data[0].nama}}</b-col>
                <b-col sm="3" class="mb-3">No Hp</b-col><b-col sm="9">: {{products.data[0].no_hp}}</b-col>
                <b-col sm="3" class="mb-3">Email</b-col><b-col sm="9">: {{products.data[0].email}}</b-col>
                <b-col sm="3">Asal Sekolah</b-col><b-col sm="9">: {{products.data[0].asal_sekolah}}</b-col>
            </b-row>

        </b-card-body>
    </b-card>

    <b-card
            header-text-variant="h1"
            border-variant="warning"
            header="Paket"
            header-bg-variant="transparent"
            align="left"
            class="mt-4"
        >
        <b-card-body>

            <b-card-text>
                Coming Soon
            </b-card-text>

        </b-card-body>
    </b-card>
    <!-- {{products.data[0]}} -->

</div>
</template>

<script>
import axios from 'axios';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
data(){
    return{
      username: this.$session.get("username")?this.$session.get("username"):"",
      products:[]
    }
  },
  methods:{
     setProducts(data){
      this.products = data
    }
  },
  mounted(){
    axios.get('http://localhost/api/military_inforces/member/profile/profile', {
      headers: {
        "Content-type": "application/json",
        //  "Clear-Site-Data": "*",
        //  'Content-Type': 'application/x-www-form-urlencoded'
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept",
          //     'content-type': 'application/json',
          //     'Access-Control-Allow-Credentials' : true,
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