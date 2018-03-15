import Vue from 'vue';
import VueRouter from 'vue-router';

import Demo from './components/Demo.vue';
// import Error404 from './components/Error404.vue';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/demo', component: Demo },

    // Always leave this last one
    // { path: '*', component: Error404 } 
  ]
})