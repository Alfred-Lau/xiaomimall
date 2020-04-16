import Vue from 'vue';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use(VueAxios, Axios);

Axios.interceptors.request.use(
  (response) => {
    console.log('response', response);
  },
  (error) => {
    console.log(error);
  }
);

const axios = new Axios({});
export default axios;
