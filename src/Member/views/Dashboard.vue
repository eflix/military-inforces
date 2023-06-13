<template>
  <div>
    <h1>Dashboard Siswa</h1>
    {{input.username}}
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data(){
    return{
        input:{
            username: this.$session.get("username")?this.$session.get("username"):"",
            password: ""
        }
    }
  },
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/logintest')
    }
  }

}
</script>
