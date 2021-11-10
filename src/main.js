import Vue from "vue";
import CompositionApi from "@vue/composition-api";
import VueCookie from "vue-cookie";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "./utils/request";

import App from "./App.vue";

import router from "./router";
import store from "./vuex";
import storage from "./storage";

Vue.use(ElementUI);
Vue.use(CompositionApi);
Vue.use(VueCookie);

Vue.config.productionTip = false;

Vue.prototype.$$storage = storage;
Vue.prototype.$$http = axios;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
