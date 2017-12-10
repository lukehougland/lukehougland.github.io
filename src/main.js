// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Es6Promise from 'es6-promise';

/* eslint-disable */
// IE 11
Es6Promise.polyfill();

import Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-enable */

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
