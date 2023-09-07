<template>
  <div>
    <h1>Daftar Member</h1>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>No Hp</th>
          <th>Email</th>
          <th>Asal Sekolah</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <!-- {{history.data}} -->
        <tr v-for="(item, index) in member.data" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ item.nama }}</td>
          <td>{{ item.no_hp }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.asal_sekolah }}</td>
          <td>
            <span>
              <button class="badge badge-info" @click="() => detail(item.id)">Detail</button>
            </span>
            <!-- <span v-show="!editing[index]">
              <button class="icon-A" @click="() => editItem(index)">A</button>
            </span>
            <span v-show="editing[index]">
              <button class="icon-B" @click="() => saveItem(index)">B</button>
            </span> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="https://smtpjs.com/v3/smtp.js"> </script>


<script>
import axios from 'axios';
import {Email} from "../../assets/smtp/smtp.js";
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
      console.log(id);
      // this.$router
      //           .push({ path: '/admin/detail_member/'+ id })
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "eflixjunior@gmail.com",
        Password : "0790125A28DF458484D960BAA688732E33FF",
        To : 'lekdarmawan99@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ).catch((error) => console.log(error));
//     Email.send({
//     SecureToken : "5384a422-ecfc-43c5-8c95-78005ade49fa",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
    }
  },
  mounted(){
    axios.get('https://bimbelmilitaryinforce.com/api/admin/member/all', {
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
