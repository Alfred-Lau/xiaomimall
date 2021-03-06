import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import VueCookie from 'vue-cookie';
import App from './App.vue';

import router from './router';
import store from './vuex';
import storage from './storage';

Vue.use(CompositionApi);
Vue.use(VueCookie);

Vue.config.productionTip = false;

Vue.prototype.$$storage = storage;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
