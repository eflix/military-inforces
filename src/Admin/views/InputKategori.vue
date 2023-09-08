<template>
    <div class="container table-admin">
      <h4>Daftar Nama Kategori soal</h4>
      <a href="/admin/add_kategori" class="tambah-data">Tambah Kategori</a>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kategori</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in category.data" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ item.nama_category }}</td>
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
          category:[],
        }
      },
      methods:{
        setCategory(data){
          this.category = data
        },
      },
      mounted(){
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
  