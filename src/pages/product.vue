<template>
  <div class="all-area">
    <div class="product">
      <div class="nav-menu">
        <div class="left">
          <h3 class="title">小米8 透明探索版本</h3>
          <span class="sub-title">小米8</span>
          <span class="sub-title">小米H</span>
        </div>
        <div class="right">
          <div class="ul">
            <ul>
              <li>概述</li>
              <li>参数</li>
              <li>用户评价</li>
            </ul>
          </div>
          <span class="buy">立即购买</span>
        </div>
      </div>
    </div>
    <div class="container">
      <img src="/imgs/product/product-bg-1.png" alt="" />
      <div class="img-info">
        我要显示一些信息
      </div>
    </div>
    <div class="container middle">
      <img src="/imgs/product/product-bg-2.png" alt="" />
    </div>
    <div class="container">
      <img src="/imgs/product/product-bg-3.png" alt="" />
    </div>
    <div class="container slide-show">
      我是 slider-show
    </div>

    <div class="video-wrapper-container">
      <div class="info">
        <p>
          60帧超慢动作摄影
        </p>
        <p>
          慢慢回味每一瞬间的精彩
        </p>
        <div class="desc">
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！ 更能AI
          精准分析视频内容，15个场景智能匹配背景音效。
        </div>
      </div>
      <div class="container video-wrapper" @click="showVideo">
        <img src="/imgs/product/gallery-1.png" />
        <div class="overlay" v-if="isShowVideo"></div>
        <div class="video" :class="{ show: isShowVideo }">
          <div class="inner">
            <video
              src="/imgs/product/video.mp4"
              muted
              autoplay="off"
              controls="controls"
            ></video>
            <div class="close" @click.stop="closeModal">
              x
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      isShowVideo: false,
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.loadData(id);
    window.addEventListener('scroll', this.toggleFixed);
  },
  methods: {
    toggleFixed() {},
    closeModal(e) {
      console.log('sss');
      this.isShowVideo = false;
    },
    showVideo() {
      console.log('show');
      this.isShowVideo = true;
    },
    loadData(id) {
      console.log(id);
    },
  },
};
</script>

<style lang="scss">
.all-area {
  .product {
    width: 1226px;
    margin: 0 auto;

    .nav-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      line-height: 40px;
      .left {
        .title {
          display: inline-block;
          font-size: 18px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
        .sub-title {
          font-weight: bold;
          color: rgba(102, 102, 102, 1);

          font-size: 12px;
          padding-left: 10px;
        }
      }

      .right {
        .ul {
          display: inline-block;
          ul {
            li {
              display: inline-block;
              font-weight: bold;
              color: rgba(102, 102, 102, 1);
              font-size: 12px;
              padding-right: 12px;
            }
            li + li::before {
              content: '|';
              padding-right: 6px;
            }
          }
        }
        .buy {
          display: inline-block;
          width: 110px;
          height: 30px;
          background: rgba(255, 115, 1, 1);
          font-size: 12px;
          font-family: PingFang;
          line-height: 30px;
          text-align: center;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .container {
    position: relative;
    img {
      width: 100%;
    }
  }

  .img-info {
    position: absolute;
    top: 20%;
    left: 50%;
  }

  .middle {
    padding: 5% 20%;
    img {
      border: 1px dashed #333;
    }
  }

  .video-wrapper-container {
    background: rgba(7, 7, 8, 1);
    padding-bottom: 140px;
    margin-bottom: 20px;

    .info {
      position: absolute;
      margin-top: 82px;
      margin-bottom: 58px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      p {
        font-size: 60px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }

      .desc {
        font-size: 24px;
        font-family: PingFang SC;
        color: #fff;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 36px;
      }
    }
    .video-wrapper {
      position: relative;
      margin-bottom: 20px;
      padding-top: 370px;

      width: 1226px;
      height: 540px;
      margin: auto;

      .video {
        opacity: 0;
        position: absolute;
        top: -50%;
        left: 50%;
        z-index: 0;
        padding: 200px;
        /* must have */
        transition: top 0.6s, opacity 0.6s;
      }

      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #333;
        opacity: 0.8;
      }

      .show {
        opacity: 1;
        position: absolute;
        width: 50%;
        margin: 40px auto;
        z-index: 20;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .inner {
          width: 100%;
          position: relative;
          video {
            width: 100%;
          }
        }
        .inner .close {
          position: absolute;
          top: -2px;
          right: 10px;
          z-index: 30;
          font-size: 40px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
