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
  <section class="max-w-6xl 2xl:max-w-7xl mx-auto mt-16 lg:mt-24 py-20 px-4 xl:px-0 animate-on-scroll">
    <div class="text-center">
      <h1 class="font-bold text-[30px]">Key Features at a Glance</h1>
      <p class="nrml-text">Powerful Tools for Automated, Profitable Trading</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8">
      <div
        class="border border-white border-opacity-20 py-4 px-8 rounded-3xl overflow-hidden flex flex-col items-center justify-between relative hover:scale-105 transition duration-300 ease-in-out"
      >
        <div class="absolute top-0 left-0">
          <img src="/svg/spotlight2.svg" alt="" />
        </div>
        <img src="/images/feature1.webp" alt="" class="xl:max-w-[500px]  " />

        <div class="space-y-2">
          <p class="text-custom-teal font-bold text-[19px]">
            Pre-Built Strategies
          </p>
          <p class="nrml-text">
            Access a library of professionally designed, backtested algorithms
            ready for immediate deployment.
          </p>
        </div>
      </div>

      <div
        class="border border-white border-opacity-20 py-4 px-8 rounded-3xl overflow-hidden flex flex-col items-center justify-between relative hover:scale-105 transition duration-300 ease-in-out"
      >
        <div class="absolute top-0 left-0">
          <img src="/svg/spotlight2.svg" alt="" />
        </div>
        <img src="/images/feature2.webp" alt="" class="xl:max-w-[500px]" />

        <div class="space-y-2">
          <p class="text-custom-teal font-bold text-[19px]">
            Real-Time Execution
          </p>
          <p class="nrml-text">
            Enjoy instant trade execution without delays, ensuring you
            capitalize on market moves.
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6">
      <div
        class="border border-white border-opacity-20 py-4 px-8 rounded-3xl overflow-hidden flex flex-col items-center justify-between relative hover:scale-105 transition duration-300 ease-in-out"
      >
        <div class="absolute top-0 left-0">
          <img src="/svg/spotlight2.svg" alt="" />
        </div>
        <img src="/images/feature3.webp" alt="" class="xl:max-w-[300px]" />

        <div class="space-y-2 mt-4">
          <p class="text-custom-teal font-bold text-[19px]">
            Risk Management Tools
          </p>
          <p class="nrml-text">
            Automated stop-loss, take-profit, and position sizing to protect
            your capital.
          </p>
        </div>
      </div>
      <div
        class="border border-white border-opacity-20 py-4 px-8 rounded-3xl overflow-hidden flex flex-col items-center justify-between relative hover:scale-105 transition duration-300 ease-in-out"
      >
        <div class="absolute top-0 left-0">
          <img src="/svg/spotlight2.svg" alt="" />
        </div>
        <img src="/images/feature4.webp" alt="" class="xl:max-w-[300px]" />

        <div class="space-y-2 mt-4">
          <p class="text-custom-teal font-bold text-[19px]">
            24/7 Hands-Free Trading
          </p>
          <p class="nrml-text">
            Your strategies run continuously—even when you’re offline.
          </p>
        </div>
      </div>
      <div
        class="border border-white border-opacity-20 py-4 px-8 rounded-3xl flex overflow-hidden flex-col items-center justify-between relative hover:scale-105 transition duration-300 ease-in-out"
      >
        <div class="absolute top-0 left-0">
          <img src="/svg/spotlight2.svg" alt="" />
        </div>
        <img src="/images/feature5.webp" alt="" class="xl:max-w-[300px]" />

        <div class="space-y-2 mt-4">
          <p class="text-custom-teal font-bold text-[19px]">
            Performance Analytics
          </p>
          <p class="nrml-text">
            Track real-time metrics, including P&L, win rates, and drawdowns.
          </p>
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