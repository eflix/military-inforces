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
                <b-col sm="3">Nama</b-col>
                <b-col sm="9">: {{username }}</b-col>
            </b-row>

            <b-card-text>
                
            </b-card-text>

        </b-card-body>
    </b-card>
    {{products}}

    <!-- <div class="row mb-3">
      <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product"/>
      </div>
    </div> -->
</div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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
    axios.get('http://localhost/api2/military_inforces/member/profile/profile/', this.data, {
      headers: {
          // "Access-Control-Allow-Origin": 'http://localhost:8080/member/profile',
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