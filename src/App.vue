<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="absolute top-0 left-0">
    <img src="/svg/spotlight.svg" alt="" class="max-h-[600px]">
  </div>
  <main class="relative z-20">
    <RouterView />
  </main>
</template>

