<template>
  <div class="product">我是产品商城页</div>
</template>

<script>
export default {
  name: 'product',
  mounted() {
    const { id } = this.$route.params;
    console.log('id', id);
  },
};
</script>

<style></style>
