import Router from 'vue-router';
import Vue from 'vue';

import Home from './pages/home';
import Index from './pages/index';
// import Product from './pages/product.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'index',
        component: Index,
      },
      // {
      //   path: '/product/:id',
      //   name: 'product',
      //   /* 第一种按需加载方式 */
      //   component: (resolve) => require(['./pages/product.vue'], resolve),
      // },

      {
        path: '/product/:id',
        name: 'product',
        /* 第一种按需加载方式 */
        component: () =>
          import(/* webpackChunkName:"product"*/ './pages/product.vue'),
      },
    ],
  },
];

export default new Router({
  routes,
});
