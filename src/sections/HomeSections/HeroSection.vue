<script setup>
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
  <section class="min-h-[90vh] lg:bg max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between px-4 xl:px-0 py-8 animate-on-scroll">
    <div class="w-full xl:w-[50%] space-y-4">
      <div
        class="border border-white bg-white bg-opacity-20 w-fit px-6 py-2 rounded-full nrml-text"
      >
        <p>❤️ Smart Automation For Smart Traders</p>
      </div>
      <div class="mt-4 xl:leading-[70px]">
        <h1 class="font-extrabold text-[50px] xl:text-[60px] 2xl:text-[70px] leading-tight">The Future of Investing</h1>
        <h3 class="font-semibold text-[25px] 2xl:text-[30px]">
           Seamless, Smart & Stress Free.
        </h3>
      </div>

      <p class="nrml-text xl:mt-6 md:w-[80%]">
        A Smart Trading Assistant designed to analyse market trends, make swift
        decisions & execute trade seamlessly
      </p>

      <div class="mt-6 flex items-center flex-wrap gap-4 w-[80%]">
        <div class="flex items-center gap-1">
          <img src="/svg/tick.svg" alt="" />
          <p>Real-Time Execution</p>
        </div>
        <div class="flex items-center gap-1">
          <img src="/svg/tick.svg" alt="" />
          <p>Automated Risk Management</p>
        </div>
        <div class="flex items-center gap-1">
          <img src="/svg/tick.svg" alt="" />
          <p>24/7 Hands-Free Trading</p>
        </div>
      </div>

      <div class="mt-8 flex gap-4">
        <button class="bg-btn">
          <a href="https://calendly.com/officialfusionxtech/30min" target="_blank">Get a Call Back</a>
        </button>
        <a href="https://app.fusionxtech.in/" target="_blank" class="border-btn">Open an Account</a>
      </div>
    </div>
    <div class="w-full xl:w-[50%] h-full">
      <img src="/images/hero_image.webp" alt="" />
       
    </div>
  </section>
</template>


<style scoped>
/* Custom glow effect */
.bg-glow {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(80px);
  transform: translate(-50%, -20%);
  animation: glowAnimation 4s ease-in-out infinite alternate;
}

.bg{
  background-image: url('/public/images/hero_image.webp');
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
}

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