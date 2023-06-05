<template>
  <Nav />

  <header class="container">
    <Heads>Starter template based on Vue 3, Bootstrap 5, SASS with Dark Theme and Typescript!</Heads>
  </header>

  <main class="container flex-shrink-0 mb-4">
    <router-view />
  </main>

  <footer class="container footer mb-2 mt-auto">
    <Footer />
  </footer>
</template>

<script lang="ts" setup>
import Nav from "@/components/Nav.vue";
import Heads from "@/components/Heads.vue";
import Footer from "@/components/Footer.vue";
</script>