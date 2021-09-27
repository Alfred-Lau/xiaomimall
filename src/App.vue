<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less">
@import "./assets/less/reset.less";
@import "./assets/less/config.less";

#app {
  overflow: hidden;
}
</style>
