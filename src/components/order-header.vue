<template>
  <div class="order-header">
    <div class="container">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{ title }}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "order-header",
  props: {
    title: String,
  },
  computed: {
    ...mapState(["username"]),
  },
};
</script>
<style lang="less">
.order-header {
  // padding: 30px 0;
  max-width: 1226px;
  margin: 0 auto;
  border-bottom: 2px solid #ff6600;
  .container {
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    padding-top: 10px;
    padding-bottom: 10px;
    .header-logo {
      float: left;
    }
    .title,
    .username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title {
      float: left;
      margin-left: 54px;
      h2 {
        font-size: 28px;
        color: #333333;
      }
      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999999;
        font-weight: 200;
      }
    }
    .username {
      float: right;
      a {
        color: #666666;
        font-size: 16px;
      }
    }
  }
}
</style>