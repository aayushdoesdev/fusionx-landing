<script setup>
import LottieAnimation from '@/components/LottieAnimation.vue';

import { onMounted } from 'vue';

onMounted(() => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
});
</script>

<template>
    <section class="bg-white bg-opacity-5 py-20 lg:py-32 mt-24 px-4 xl:px-0 animate-on-scroll">
        <div class="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:w-[50%] xl:w-[50%] space-y-6">
                <h2 class="font-bold leading-tight text-[30px]">
                    Why You Need an Algo Trading Dashboard
                </h2>
                <p>Manually managing trades is time-consuming, stressful, and often inefficient. With an algo trading dashboard, you can automate every step—from strategy execution to risk management—while maintaining full control and visibility.</p>

                <div class="space-y-4">
                    <div class="flex items-start gap-2">
                        <img src="/svg/verified.svg" alt="" class="w-[30px]">
                        <p>No more missed opportunities. The dashboard executes trades instantly when conditions are met.</p>
                    </div>
                    <div class="flex items-start gap-2">
                        <img src="/svg/verified.svg" alt="" class="w-[30px]">
                        <p>No more screen time overload. Your trades run 24/7, even when you’re offline.</p>
                    </div>
                    <div class="flex items-start gap-2">
                        <img src="/svg/verified.svg" alt="" class="w-[30px]">
                        <p>No more emotional trading. Pre-set rules ensure disciplined, consistent execution.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mt-8 xl:mt-0 md:w-[50%] xl:w-[40%]">
                <LottieAnimation animationPath="/animations/webanim.json"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(-60px);
  transition: opacity 0.8s ease-out, transform 1.2s ease-out;
}

.animate-on-scroll.in-view {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>