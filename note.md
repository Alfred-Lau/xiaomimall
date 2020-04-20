1.sass: 需要 node-sass 和 sass-loader

2. 插件 vue-laazyload element-ui vue-awesome-swiper vue-axios vue-cookie

3. publicPath 如果不在系统根目录就需要配置！

4. 路由按需加载！
   方法一：resolve => require([''],resolve)

```js
 {
 path: '/product/:id',
 name: 'product',
 /_ 第一种按需加载方式 _/
 component: (resolve) => require(['./pages/product.vue'], resolve),
 },

```

方法二：动态 import 是 es7 的语法！所以光有 preset 不够

```js
{
        path: '/product/:id',
        name: 'product',
        /* 第一种按需加载方式 */
        component: () =>
          import(/* webpackChunkName:"product"*/ './pages/product.vue'),
      },
```

5.  tinypng.com

6.  prefetch 预加载 网络面板 others 查看

- prefetch 和 preload 的区别？

7. nginx 推荐 yum 安装，node 可以直接 wget + ln

8. 上传源码可以通过 ftp
