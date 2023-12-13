<script setup lang="ts">
import Counter from '@renderer/view/components/Counter.vue';
</script>

<template>
  <div page-home>
    <h1>Home</h1>
    <counter />
    <router-link to="/other">go Other</router-link>
  </div>
</template>

<style lang="less">
@import "~@renderer/less/proj";

[page-home] { .rel;
  h1 { .fs(20); .app-drag; }
}
</style>
