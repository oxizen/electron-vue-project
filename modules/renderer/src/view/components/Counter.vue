<script lang="ts" setup>
import { ref } from 'vue';
import { sleep } from '@common/utils';

const v = ref(0);

const add = () => {
  v.value = v.value + 1;
};
const remove = async () => {
  await sleep(1000);
  v.value = v.value - 1;
}
</script>
<template>
  <div counter>
    <button @click="remove">-</button>
    <span>{{ v }}</span>
    <button @click="add">+</button>
  </div>
</template>

<style lang="less">
@import "~@renderer/less/proj";

[counter] { .flex; .gap(10); .items-center;
  button { .fs(14); }
  span { .fs(12); }
}
</style>
