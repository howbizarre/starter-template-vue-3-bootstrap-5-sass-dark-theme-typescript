<template>
  <RouterView />
</template>

<script lang="ts" setup>
import LogRocket from 'logrocket';
LogRocket.init(`${import.meta.env.VITE_LOGROCKET_ID}`);
</script>

<style lang="scss">
.box {
  background-color: var(--bs-tertiary-bg);
}
</style>