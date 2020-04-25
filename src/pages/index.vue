<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <div class="menu-wrapper">
            <ul class="menu">
              <li class="menu-item">
                <a href="" class="menu-link">手机 电话卡</a>
                <div class="show-child">我是二级子菜单</div>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">电视 盒子</a>
                <div class="show-child">我是二级子菜单</div>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">笔记本 平板</a>
                <div class="show-child">我是二级子菜单</div>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">家电 插线板</a>
                <div class="show-child">我是二级子菜单</div>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">出行 穿戴</a>
                <div class="show-child">我是二级子菜单</div>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">耳机 音响</a>
                <div class="show-child">我是二级子菜单</div>
              </li>
              <li class="menu-item">
                <a href="" class="menu-link">电源 配件</a>
                <div class="show-child">我是二级子菜单</div>
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
      <div class="as-box">
        <div class="a-box"><img src="/imgs/as/as-1.png" alt="" /></div>
        <div class="a-box"><img src="/imgs/as/as-2.jpg" alt="" /></div>
        <div class="a-box"><img src="/imgs/as/as-3.png" alt="" /></div>
        <div class="a-box"><img src="/imgs/as/as-4.jpg" alt="" /></div>
      </div>
      <div class="banner">
        <img src="/imgs/banner-1.png" alt="" />
      </div>
    </div>
    <div class="products-box">
      <div class="container">
        <h3 class="title">手机</h3>
        <div class="show">
          <div class="left-show">
            <div class="container">
              <img src="/imgs/mix-alpha.jpg" alt="mix-alpha" srcset="" />
            </div>
          </div>
          <div class="right-show">
            <div class="right-show-container">
              <ul class="products-all">
                <li
                  v-for="(items, index) in [
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                  ]"
                  :key="index"
                  class="products-row"
                >
                  <ul class="item-wrapper">
                    <li v-for="item in items" :key="item" class="item">
                      <div class="tag">新品</div>
                      <div class="img-wrapper">
                        <img src="/imgs/nav-img/nav-2.png" alt="" />
                      </div>
                      <h3 class="title">小米手机</h3>
                      <p class="desc">我是描述</p>
                      <p class="price">2999元</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal></modal>
  </div>
</template>

<script>
import ServiceBar from '../components/service-bar';
import Modal from '../components/modal';
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
    Modal,
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
// @import '../assets/scss/mixn.scss';

.index {
  width: 100%;
  .container {
    margin: auto;
    width: $min-width;

    /* 设置插件 */
    .swiper-button-prev {
      left: 274px;
    }
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
          position: relative;

          .menu {
            .menu-item {
              .show-child {
                // display: none;
                position: absolute;
                top: -27px;
                left: 263px;
                width: 0;
                opacity: 0;
              }
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
                .show-child {
                  display: block;
                  width: 963px;
                  height: 461px;
                  opacity: 1;
                  position: absolute;
                  left: 264px;
                  top: -27px;
                  background: #fff;
                  color: #ff6600;
                  z-index: 21;
                  transition: width 0.5s, opacity 0.5s;
                }
              }
            }
          }
        }
      }
    }

    .as-box {
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
      .a-box {
        width: 24%;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .banner {
      img {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }

  .products-box {
    width: 100%;
    background: rgba(245, 245, 245, 1);
    padding: 71px auto 50px;
    padding-bottom: 50px;
    .container {
      .title {
        font-size: 22px;
        font-family: FZLanTingHeiS-R-GB;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 60px;
      }

      .show {
        display: flex;
      }

      .left-show {
        width: 224px;
        .container {
          width: 100%;
          img {
            width: 224px;
            height: 619px;
          }
        }
      }

      .right-show {
        width: 100%;
        .right-show-container {
          margin-left: 15px;
          width: 100%;
          .products-all {
            .products-row {
              display: block;
              .item-wrapper {
                display: flex;
                justify-content: space-between;
                .item {
                  width: 236px;
                  height: 302px;
                  background: rgba(255, 255, 255, 1);
                  text-align: center;
                  margin-bottom: 14px;

                  .img-wrapper {
                    width: 195px;
                    height: 172px;
                    margin: 0 auto;
                    img {
                      width: 100%;
                      margin-top: 20px;
                    }
                  }

                  .tag {
                    background: rgba(126, 207, 104, 1);
                    color: #fff;
                    width: 67px;
                    line-height: 24px;
                    height: 24px;
                    margin: 0 auto;
                  }

                  .title {
                    margin-top: 10px;
                    font-size: 14px;
                    color: rgba(51, 51, 51, 1);
                    font-family: FZLanTingHeiS-R-GB;
                    font-weight: bold;
                    line-height: 24px;
                  }

                  .desc {
                    height: 13px;
                    font-size: 12px;
                    line-height: 20px;
                    color: rgba(153, 153, 153, 1);
                    font-family: FZLanTingHeiS-R-GB;
                    font-weight: bold;
                  }

                  .price {
                    height: 13px;
                    font-size: 14px;
                    line-height: 22px;
                    color: rgba(242, 10, 10, 1);
                    font-family: FZLanTingHeiS-R-GB;
                    margin-top: 15px;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
