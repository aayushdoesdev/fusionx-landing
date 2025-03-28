<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="absolute top-0 left-0">
    <img src="/svg/spotlight.svg" alt="">
  </div>
  <Navbar/>
  <main class="relative z-20">
    <RouterView />
  </main>
  <Footer/>
</template>

