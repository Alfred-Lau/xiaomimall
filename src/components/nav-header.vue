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
        <ul class="header-menu">
          <li class="header-menu-item">登录</li>
          <li class="header-menu-item">注册</li>
          <li class="header-menu-item cart">
            <i class="iconfont xiaomi-cart "></i> 购物车
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
                  <li class="sub-menu-item">手机</li>
                  <li class="sub-menu-item">手机</li>
                  <li class="sub-menu-item">手机</li>
                  <li class="sub-menu-item">手机</li>
                  <li class="sub-menu-item">手机</li>
                  <li class="sub-menu-item">手机</li>
                </ul>
              </div>
            </li>
            <li class="nav-menu-item">红米</li>
            <li class="nav-menu-item">电视</li>
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
export default {
  name: 'nav-header',
};
</script>

<style lang="scss">
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
      .logo-wrapper {
        background: url('/imgs/logo-mi.png');
        background-size: 52px;
        width: 52px;
        height: 52px;
      }
      .nav-menu-wrapper {
        ul {
          display: flex;
          .nav-menu-item {
            font-size: 16px;
            color: #333;
            padding: 0 18px;
            left: -200px;
            position: relative;

            .sub-menu {
              display: none;
            }

            &:hover {
              .sub-menu {
                display: block;
                position: absolute;
                width: 1226px;
                height: 220px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                .sub-menu-list {
                  display: flex;
                  justify-content: space-between;
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
