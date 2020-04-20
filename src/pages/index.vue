<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <div class="menu-wrapper">
            <ul class="menu">
              <li class="menu-item">
                <a href="" class="menu-link">手机 电话卡</a>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">电视 盒子</a>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">笔记本 平板</a>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">家电 插线板</a>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">出行 穿戴</a>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">耳机 音响</a>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">电源 配件</a>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">生活 箱包</a>
              </li>
            </ul>
          </div>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in swiperData" :key="item.id">
            <a :href="`/#/product/:${item.id}`"
              ><img :src="`/imgs/slider/slide-${item.id}.jpg`" alt=""
            /></a>
          </swiper-slide>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>

          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="products-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import ServiceBar from '../components/service-bar';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import 'swiper/css/swiper.css';

export default {
  name: 'index',
  created() {
    this.$$storage.setItem('name', 'liushanzhuo', 'users');
    // alert(this.$$storage.getItem('name', 'users'));
  },
  data() {
    return {
      /* 这个就比较吊了 */
      swiperOptions: {
        /* basic */
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadow: true,
        },
        /* 分页 */
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        /* 前进后退 */
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperData: [
        {
          id: 1,
          link: '',
        },
        {
          id: 2,
          link: '',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
  },
  mounted() {
    console.log(
      this.count,
      this.getCounter,
      this.$store.dispatch('getList'),
      this.$store.commit('increase', { count: 5 }),
      this.$store.state
    );
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCounter']),
  },
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['getList']),
  },
};
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
// @import '../assets/scss/mixn.scss';

.index {
  width: $min-width;
  margin: auto;
  .container {
    /* 设置插件 */
    .swiper-button-prev {
      left: 274px;
    }
    width: 100%;
    // @include middle();
    .swiper-box {
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }
      .nav-menu {
        width: 264px;
        height: 99.3%;
        position: absolute;
        z-index: 10;
        padding-top: 26px;
        padding-bottom: 26px;
        background: #55585a7a;
        box-sizing: border-box;
        .menu-wrapper {
          .menu {
            .menu-item {
              height: 50px;
              line-height: 50px;
              color: #fff;
              padding: 17px auto;
              .menu-link {
                font-size: 16px;
                color: #fff;
                position: relative;
                display: block;
                padding-left: 30px;

                &:after {
                  content: '';
                  position: absolute;
                  right: 30px;
                  top: 17.5px;
                  background: url('/imgs/icon-arrow.png') no-repeat center;
                  display: inline-block;
                  /* 图片相关，必须设置 */
                  width: 15px;
                  height: 20px;
                  background-size: contain;
                }
              }
              &:hover {
                background: #ff6600;
              }
            }
          }
        }
      }
    }
  }
}
</style>
