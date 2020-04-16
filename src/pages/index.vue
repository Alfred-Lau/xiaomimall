<template>
  <div class="index">我是首页</div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  name: 'index',
  created() {
    this.$$storage.setItem('name', 'liushanzhuo', 'users');
    // alert(this.$$storage.getItem('name', 'users'));
  },

  mounted() {
    console.log(
      this.count,
      this.getCounter,
      this.$store.dispatch('getList'),
      this.$store.commit('increase', { count: 5 }),
      this.$store.state
    );
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCounter']),
  },
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['getList']),
  },
};
</script>

<style></style>
