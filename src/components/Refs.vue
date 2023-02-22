<template>
    <small v-for="(item, i) in list">
      {{ item }}
      <small>{{ i + 1 < list.length ? ' - ' : '' }}</small>
    </small>
  </template>
  
  <script lang="ts" setup>
  import { onBeforeUpdate, reactive, ref } from "vue";

  const year = new Date().getFullYear();
  const list = reactive([2019, year]);
  const divs = ref();

  onBeforeUpdate(() => {
    divs.value = [];
  });
  </script>