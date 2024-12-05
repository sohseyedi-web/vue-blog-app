<script setup>
import Header from './components/ui/Header.vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
</script>

<template>
  <Header/>
  <main class="max-w-7xl mx-auto p-5">
    <router-view />
  </main>
</template>


