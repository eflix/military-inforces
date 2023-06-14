<template>
  <div class="header">
    <b-navbar type="none" variant="none">
        <!-- <img src="../../assets/images/logo.png" alt="logo" width="10%" class="position-absolute" style="margin-top:70px;"> -->
        <b-navbar-nav class="ml-auto">
          
            <b-nav-item-dropdown :text="username" right class="mr-2">           
                    <li class="nav-item">
                        <router-link class="nav-link" to="/member/profile">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link :to="{path : '/'}"><button>Sign Out</button></router-link> -->
                        <button class="btn btn-danger" @click="logout">Sign Out</button>
                        <!-- <a class="btn btn-danger" href="#" @click="logout">Sign Out</a> -->
                    </li>
                </b-nav-item-dropdown>

        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name : 'Header',
  data(){
    return{
      username: this.$session.get("username")?this.$session.get("username"):""
    }
  },
  methods : {
    logout: function () {
        this.$session.destroy()
        this.$router
                  .push({ path: '/' })
                  .then(() => { this.$router.go() })
      }
  }
}
</script>

<style>
.header {
  background-color: #EF800F;
  padding : 5px;
}
</style>
