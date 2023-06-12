<template>
  <div id="app">
    <div class="text-white">
    <h1>Nested Views</h1>
  <p>
    <router-link to="/">/users/eduardo</router-link>
    <br />
    <router-link to="/about"
      >/users/eduardo/profile</router-link
    >
    <br />
    <router-link to="/account">/users/eduardo/posts</router-link>
  </p>
  <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>

    </div>
    <!-- <VdDashboard
      pageBackground="#f8f8f8"
      sidebarHeaderHeight="175px"
      sidebarWidth="300px"
      headerBackground="white"
      sidebarBackground="white"
    >
      <template v-slot:main-content>
        <router-view />
      </template>
      <template v-slot:header-content>
        <HeaderItems></HeaderItems>
      </template>
      <template v-slot:sidebar-header>
        <SidebarHeader></SidebarHeader>
      </template>
      <template v-slot:sidebar-content>
        <SidebarItems></SidebarItems>
      </template>
    </VdDashboard> -->
    <HeaderItems />
    <!-- <SidebarHeader /> -->
    
    <SidebarItems />
    <div class="content">
      <div class="container">
        <router-view/>
      </div>
    </div>

  </div>
</template>


<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
// import Vue from 'vue';
import HeaderItems from './components/HeaderItems.vue';
// import SidebarHeader from './components/SidebarHeader.vue';
import SidebarItems from './components/SidebarItems.vue';

// Component({
//   components: {
//     HeaderItems,
//     SidebarHeader,
//     SidebarItems,
//   },
// })
export default  {
  name : 'App',
  components: {
    HeaderItems,
    // SidebarHeader,
    SidebarItems,
  }
}
</script>

<style>
.content {
  margin-left: 17%;
  background-color: #FFFFFF;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.title {
  margin-top: 15px;
} */
</style>