import Router from 'vue-router';
import Vue from 'vue';

import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product.vue';

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
      {
        path: '/product/:id',
        name: 'product',
        component: Product,
      },
    ],
  },
];

export default new Router({
  routes,
});
