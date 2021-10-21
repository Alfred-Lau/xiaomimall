<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-left">
        <ul class="header-menu">
          <li class="header-menu-item">出行</li>
          <li class="header-menu-item">MIUI</li>
          <li class="header-menu-item">云购物</li>
          <li class="header-menu-item">协议</li>
        </ul>
      </div>
      <div class="header-top-right">
        <ul class="header-menu" v-if="isLogined">
          <li class="header-menu-item">{{ username }}</li>
          <li class="header-menu-item">我的订单</li>
          <li class="header-menu-item cart" @click="gotoCart">
            <i class="iconfont xiaomi-cart"></i> 购物车
          </li>
          <li class="header-menu-item avatar">
            <img
              :src="this.user.avatar"
              alt="avatar"
              width="40px"
              class="header-menu-item avatar"
            />
          </li>
        </ul>
        <ul class="header-menu" v-else>
          <li class="header-menu-item">登录</li>
          <li class="header-menu-item">注册</li>
          <li class="header-menu-item cart" @click="gotoCart">
            <i class="iconfont xiaomi-cart"></i> 购物车
          </li>
        </ul>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-container">
        <div class="logo-wrapper"></div>
        <div class="nav-menu-wrapper">
          <ul>
            <li class="nav-menu-item">
              小米手机
              <div class="sub-menu">
                <ul class="sub-menu-list">
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-menu-item">
              红米
              <div class="sub-menu">
                <ul class="sub-menu-list">
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-menu-item">
              电视
              <div class="sub-menu">
                <ul class="sub-menu-list">
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                  <li class="sub-menu-item">
                    <div class="item-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <h3 class="item-title">手机</h3>
                    <p class="item-desc">2000元</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="search-box">
          <input type="search" class="search-text" />
          <img src="/imgs/icon-search.png" alt="" class="search-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";

export default {
  name: "nav-header",
  data() {
    return {
      isLogined: false,
      user: {},
    };
  },
  async mounted() {
    const authoriaztion = Cookie.get("authoriaztion");
    if (authoriaztion) {
      this.user = await this.$$http("/api/user/info");
      if (this.user) {
        this.isLogined = true;
      }
    }
  },
  computed: {
    cookie() {
      return this.$cookie.get("userinfo");
    },
    username() {
      return this.$store.state.username;
    },
  },
  methods: {
    reloadUserInfo(info) {
      this.$store.replaceState({
        ...this.$store.state,
        ...info,
      });
    },
    gotoCart() {
      /* 验证是否登录 */
      const cookie = this.cookie;
      if (!cookie) {
        // 前端重定向到登录页
        this.$router.push("/login");
      } else {
        this.$router.push("/cart");
      }
    },
  },
};
</script>

<style lang="less">
.header {
  background: #333;
  color: #b0b0b0;
  font-size: 12px;
  line-height: 39px;
  &-top,
  &bottom {
    display: flex;
    justify-content: space-between;
  }

  &-top {
    width: 1226px;
    margin: 0 auto;

    &-left {
      .header-menu {
        display: flex;
        &-item {
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }
    &-right {
      .header-menu {
        display: flex;
        cursor: pointer;
        &-item {
          padding-left: 10px;
          padding-right: 10px;
        }

        .cart {
          background: #f60;
          padding-left: 18px;
          padding-right: 18px;
          color: #fff;
        }

        li.avatar {
          height: 40px;
          padding: 3px;
          box-sizing: border-box;
        }

        .avatar {
          height: calc(100% - 6px);
        }
      }
    }
  }

  &-bottom {
    background: #fff;
    color: #333;
    &-container {
      width: 1226px;
      height: 112px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .logo-wrapper {
        background: url("/imgs/logo-mi.png");
        background-size: 52px;
        width: 52px;
        height: 52px;
      }
      .nav-menu-wrapper {
        margin-left: -200px;
        ul {
          display: flex;
          .nav-menu-item {
            font-size: 16px;
            color: #333;
            padding: 0 18px;

            &:hover {
              color: #f60;
              cursor: pointer;
            }

            .sub-menu {
              // display: none;
              width: 0;
              height: 0;
              opacity: 0;
              /* 下面两行很重要，因为要先把东西放到正确的地方！！！ */
              position: absolute;
              left: 0;
            }

            &:hover {
              .sub-menu {
                display: block;
                position: absolute;
                width: 1226px;
                height: 220px;
                opacity: 1;
                top: 110px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                z-index: 20;
                transition: opacity 0.5s, height 0.5s;
                .sub-menu-list {
                  display: flex;
                  justify-content: space-between;
                  .sub-menu-item {
                    width: 16.6%;
                    text-align: center;
                    .item-img {
                      margin-top: 26px;
                      img {
                        width: 92px;
                        // height: 111px;
                      }
                    }
                    .item-title {
                      color: #333;
                      font-size: 12px;
                    }
                    .item.desc {
                    }
                  }
                }
              }
            }
          }
        }
      }

      .search-box {
        width: 314px;
        display: flex;
        align-items: center;
        input {
          border: 1px solid rgba(224, 224, 224, 1);
          border-right: none;
          outline: none;
          width: 264px;
          font-size: 12px;
          padding-top: 13px;
          padding-bottom: 13px;
          padding-left: 12px;
        }
        .search-icon {
          width: 18px;
          height: 18px;
          color: #666;
          padding: 11.5px;
          border: 1px solid rgba(224, 224, 224, 1);
        }
      }
    }
  }
}
</style>
