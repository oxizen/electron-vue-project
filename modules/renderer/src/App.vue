<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div route-area>
    <RouterView />
  </div>
</template>

<style lang="less">
@import "~@renderer/less/proj";

[route-area] { .flex; .hf; }
</style>
