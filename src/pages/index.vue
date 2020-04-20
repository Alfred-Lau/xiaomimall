<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
.index {
  .container {
    width: 100%;
    .swiper-box {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
