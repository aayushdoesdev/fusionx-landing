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
  <section class="bg-white bg-opacity-10 py-20 px-4 xl:px-0">
    <div
      class="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col justify-center items-center animate-on-scroll"
    >
      <div
        class="space-y-2 text-center max-w-6xl 2xl:max-w-7xl mx-auto relative z-20"
      >
        <h1 class="font-bold text-[30px]">How It Works</h1>
        <p class="nrml-text lg:w-[80%] mx-auto">
            Gone are the days of staring at charts for hours or second-guessing every trade. With our algo trading dashboard, you get access to pre-built, backtested investment strategies that you can deploy in just a few clicks.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="bg-custom-teal py-4 px-8 rounded-xl nrml-text space-y-4">
            <p class="font-bold text-[30px]">01</p>
            <p class="font-semibold">Pick a Strategy</p>
            <p>Choose from a range of backtested, high-performance strategies designed for different market conditions.</p>
        </div>

        <div class="bg-custom-teal py-4 px-8 rounded-xl nrml-text space-y-4">
            <p class="font-bold text-[30px]">02</p>
            <p class="font-semibold">Customize Your Settings</p>
            <p>Adjust lot size, re-entry rules, and risk preferences to match your investment goals.</p>
        </div>

        <div class="bg-custom-teal py-4 px-8 rounded-xl nrml-text space-y-4">
            <p class="font-bold text-[30px]">03</p>
            <p class="font-semibold">Deploy & Let It Run</p>
            <p>Our system automates your trades, managing risks and executing strategies in real-time.</p>
        </div>
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