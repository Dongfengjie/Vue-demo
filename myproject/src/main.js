// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Es6Promise from 'es6-promise';
import FastClick from 'fastclick';
import router from './router';
FastClick.attach(document.body);
//Es6Promise.ployfill()

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});