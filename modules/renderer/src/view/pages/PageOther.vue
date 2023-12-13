<script setup lang="ts"></script>

<template>
  <div page-other>
    <h1>Other</h1>
    <router-link to="/">go home</router-link>
  </div>
</template>

<style lang="less">
@import "~@renderer/less/proj";

[page-other] { .rel;
  h1 { .fs(20); .app-drag; }
}
</style>
