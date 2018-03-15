import Vue from 'vue'
import router from './router'
import axios from 'axios'

import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
Vue.use(VueRouter)
Vue.use(BootstrapVue);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.prototype.$axios = axios; // Using axios

const app = new Vue({
  router
}).$mount('#app')
