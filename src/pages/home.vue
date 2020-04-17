<template>
  <div class="home">
    <nav-header> </nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/nav-header';
import NavFooter from '../components/nav-footer';

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style></style>
