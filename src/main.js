import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

// vue dashboard
import VueDashboard from 'vue-dashboard-vd';
Vue.use(VueDashboard);

import HeaderItems from './components/HeaderItems.vue';
import SidebarHeader from './components/SidebarHeader.vue';
import SidebarItems from './components/SidebarItems.vue';

Vue.component('header-items', HeaderItems);
Vue.component('sidebar-items', SidebarItems);
Vue.component('sidebar-header', SidebarHeader);

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
