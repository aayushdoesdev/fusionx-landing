<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar/>
  <main class="">
    <RouterView />
  </main>
</template>

