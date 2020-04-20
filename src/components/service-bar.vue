<template>
  <div class="service-wrapper">
    <ul class="service">
      <li class="service-item">
        <span class="service-item-icon icon-setting"></span
        ><span class="service-item-desc">预约维修服务</span>
      </li>
      <li class="service-item">
        <span class="service-item-icon icon-7"></span
        ><span class="service-item-desc">7天无理由退货</span>
      </li>
      <li class="service-item">
        <span class="service-item-icon icon-15"></span
        ><span class="service-item-desc">15天免费换货</span>
      </li>
      <li class="service-item">
        <span class="service-item-icon icon-post"></span
        ><span class="service-item-desc">满150元包邮</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.service-wrapper {
  height: 84.2px;
  background: #fff;
  .service {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 20px;
    font-size: 16px;
    color: #666;
    .service-item {
      border-right: 1px solid rgba(229, 229, 229, 1);
      padding-left: 82px;
      padding-right: 82px;
      display: flex;
      justify-content: center;
      &-icon {
        width: 20px;
        height: 19px;
        background-size: contain;
        /* 下面这行很关键 */
        display: inline-block;
      }
      .icon-setting {
        background: url('/imgs/icon-setting.png') no-repeat center;
      }
      .icon-post {
        background: url('/imgs/icon-post.png') no-repeat center;
      }
      .icon-7 {
        background: url('/imgs/icon-7day.png') no-repeat center;
      }
      .icon-15 {
        background: url('/imgs/icon-15day.png') no-repeat center;
      }

      &-desc {
        margin-left: 10px;
      }
    }
    .service-item:last-child {
      border: none;
    }
  }
}
</style>
