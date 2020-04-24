<template>
  <div class="modal" @click="changeName">我是modal弹窗{{ person.name }}</div>
</template>

<script>
import { reactive } from '@vue/composition-api';

export default {
  setup() {
    const person = reactive({
      name: 'liujian',
      skill: 'cool',
    });

    /* 不能是箭头函数，原因？ */
    function changeName() {
      person.name = Math.random() > 0.5 ? 'xiaoxiang' : 'hero';
    }

    return {
      person,
      changeName,
    };
  },
};
</script>

<style></style>
