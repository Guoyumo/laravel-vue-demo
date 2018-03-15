import Vue from 'vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.prototype.$axios = axios; // Using axios
import store from './vuex/store'
const app = new Vue({
  router,
  store
}).$mount('#app')
