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

9. 多行多列的展示可以数据映射为 多维数组做样式！

10. div 包 img

11. v-for:'item in [[1,2],[3,4]]'

12. flex + width 实现一行多个

13. splice 和 slice 的区别？？？

14. 插槽的语法： slot+name 结合 template + v-slot:

！！！15. width 和 height 不管干什么，除非有限制，否则优先考虑设置！！！

16. chrome 调试工具 添加一个类，直接添加一个现有的类

17. enter 要放在 active 动画样式下面！！！

18. 自定义事件 @click="\$emit('submit')"

19. 图片懒加载的实现 vue-lazyload v-lazy=''

20. 类名或者图片名称出现 ad 字样会被插件拦截
