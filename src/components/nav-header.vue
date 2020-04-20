<template>
  <div class="header">
    <div class="header-top">
      我是上部的header
      <i class="iconfont xiaomi-cart"></i>

      header
    </div>
    <div class="header-bottom">我是下部的header</div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
};
</script>

<style lang="scss">
.header {
  &-top,
  &bottom {
    display: flex;
    justify-content: space-between;
  }

  &-top {
    height: 16px;
  }
}
</style>
