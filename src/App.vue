<script setup>
import Header from './components/ui/Header.vue';
</script>

<template>
  <Header/>
  <main class="max-w-7xl mx-auto lg:px-0 px-3 py-5">
    <router-view />
  </main>
</template>

