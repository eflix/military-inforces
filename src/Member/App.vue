<template>
  <div id="app">
    <Header />
    <Sidebar />
    <div class="content">
      <div class="container">
        <router-view/>
      </div>
    </div>

  </div>
</template>


<script>
// import { Component, Vue } from 'vue-property-decorator';
// import Vue from 'vue';
// import HeaderItems from './../components/HeaderItems.vue';
// // import SidebarHeader from './components/SidebarHeader.vue';
// import SidebarItems from './../components/SidebarItems.vue';

import Header from './../components/member/Header.vue';
import Sidebar from './../components/member/Sidebar.vue';

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
    Header,
    Sidebar,
    // SidebarItems,
  }
}
</script>

<style>
.container {
  margin-left: 0px;
  /* background-color: #FFFFFF; */
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.title {
  margin-top: 15px;
} */
</style>