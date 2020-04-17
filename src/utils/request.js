import Vue from 'vue';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use(VueAxios, Axios);

/* 当前后端域名不一致的时候 【jsonp，cors】 */
Axios.defaults.baseURL = 'http://localhost:8000';

/* 当前后端域名一致的时候【使用接口代理】 */
/* /a/b => /api/a/b 通过 devServer.proxy 之后被切掉，又变成了 /a/b */
Axios.defaults.baseURL = '/api';

/* 很重要，超时设置 */
Axios.defaults.timeout = 8000;

/* 接口错误拦截 */
Axios.interceptors.request.use(
  (response) => {
    console.log('response', response);
    const data = response.data;
    if (data.status === 0) {
      return data.data;
    } else if (data.status === 10) {
      /* 自定义业务代码 */
      window.location.href = '/#/login';
    } else {
      /* 报错 */
      alert(data.msg);
    }
  },
  (error) => {
    console.log(error);
  }
);

const axios = new Axios({});
export default axios;
