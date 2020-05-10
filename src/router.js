import Router from 'vue-router';
import Vue from 'vue';

import Home from './pages/home';
import Index from './pages/index';
// import Login from './pages/login';
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
  {
    name:'cart',
    path:'/cart',
    component:() => import('./pages/cart.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName:"login"*/ './pages/login.vue'),
  },
];

export default new Router({
  routes,
});
