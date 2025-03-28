<script setup>
import { useRouter } from "vue-router";
import LottieAnimation from "@/components/LottieAnimation.vue";

const router = useRouter()
</script>

<template>
  <main class="flex flex-col xl:flex-row items-center justify-between mx-auto px-4 md:px-0 max-w-6xl 2xl:max-w-7xl py-20">
    <div class="text-white space-y-8">
      <div class="">
        <h1 class="font-bold text-[40px] md:text-[60px]">Oops! Nothing Here.....</h1>
        <p>The page you’re trying to access is out of this universe</p>
      </div>
      <button @click="router.push('/')" class="bg-btn">Go to home</button>
    </div>
    <div class="w-[400px]">
      <LottieAnimation animationPath="/animations/not_found.json" />
    </div>
  </main>
</template>
