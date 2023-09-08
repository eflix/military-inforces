<template>
    <div class="container table-admin">
      <h4>Daftar Harga Bimbingan</h4>
      <a href="/admin/add_harga_bimbingan" class="tambah-data">Tambah Bimbingan</a>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Bimbingan</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Image</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          <!-- {{history.data}} -->
          <tr v-for="(item, index) in member.data" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ item.nama_paket }}</td>
            <td>{{ item.harga }}</td>
            <td></td>
            <td>{{ item.path_foto }}</td>
            <td>
                <a href="" class="edit-opsi"><i class="bx bx-edit"></i></a>
                <a href="" class="delete-opsi"><i class="bx bx-trash"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
<script>
import axios from 'axios';

export default {
data(){
    return{
      username: this.$session.get("username")?this.$session.get("username"):"",
      member:[],
    }
  },
  methods:{
     setMember(data){
      this.member = data
    },
    detail: function (id) {
      this.$router
                .push({ path: '/admin/detail_member/'+ id })
    }
  },
  mounted(){
    axios.get('https://bimbel-militaryinforces.com/api/admin/landing_page/all_paket', {
      headers: {
        "Content-type": "application/json",
        }
    })
    .then( (response) => {
      console.log(response.data)
      this.setMember(response.data)
    })
    .catch((error) => console.log(error));
  }
}
</script>
  
  <style>
  .card-header {
      font-size: 2rem;
  }
  </style>
  