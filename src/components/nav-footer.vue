<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" class="footer-logo-img" />
      <p class="footer-logo-title">小米商城</p>
    </div>
    <div class="footer-link">
      <ul class="footer-link-home">
        <li class="footer-link-home-item">
          <a href="">Github</a><span>|</span>
        </li>
        <li class="footer-link-home-item"><a href="">掘金</a><span>|</span></li>
        <li class="footer-link-home-item">
          <a href="">微信公众号</a>
          <span>|</span>
        </li>
        <li class="footer-link-home-item">
          <a href="">小程序</a><span>|</span>
        </li>
      </ul>
      <p class="footer-link-copyright">Copyright@2020-现在 十年挑灯看剑</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer',
};
</script>

<style lang="scss">
.footer {
  height: 233px;
  background: #333;
  border-top: 4px solid #ff7301;
  color: #999;
  font-size: 14px;
  text-align: center;
  &-logo {
    margin-top: 53px;
    img {
      width: 53px;
      height: 36px;
    }
  }
  &-link {
    margin-top: 31px;
    &-home {
      &-item {
        display: inline-block;

        a {
          color: #999;
          text-decoration: none;
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>
