import Axios from "axios";
import Cookie from "js-cookie";

// 创建 axios 实例
const axios = Axios.create({
  baseURL: process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "",
  // baseURL: process.env.VUE_APP_API, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。 // baseURL: 'http://168.192.0.123',
  timeout: 6000, // 请求超时时间
  headers: {
    Authorization: `Bearer ${Cookie.get("authorization")}`,
  },
});

/* 接口错误拦截 */
axios.interceptors.response.use(
  (response) => {
    console.log("response", response);
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 10) {
      /* 自定义业务代码 */
      window.location.href = "/#/login";
    } else {
      /* 报错 */
      alert(response.data);
    }
  },
  (error) => {
    console.log(error);
  }
);

export default axios;
