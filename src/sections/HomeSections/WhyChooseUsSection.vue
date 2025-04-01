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
  <section class="bg-custom-teal py-10 md:py-20 lg:py-32 mt-16 lg:mt-24 px-4 xl:px-0 ">
    <div class="max-w-6xl 2xl:max-w-7xl mx-auto animate-on-scroll">
      <div class="text-center">
        <h1 class="font-bold text-[30px]">Why Choose Our Algo Trading Dashboard?</h1>
        <p class="nrml-text">
            Trade with Confidence Using a Platform Built for Performance
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 mt-16 gap-10">
        <div class="space-y-1">
            <img src="/svg/verified.svg" alt="">
            <p class="font-bold">Battle-Tested Strategies</p>
            <p class="nrml-text">Every strategy is rigorously backtested with historical data to ensure reliability and performance.</p>
        </div>
        <div class="space-y-1">
            <img src="/svg/verified.svg" alt="">
            <p class="font-bold">AI-Powered Optimization</p>
            <p class="nrml-text">Our machine learning algorithms continuously refine strategies based on live market conditions.</p>
        </div>
        <div class="space-y-1">
            <img src="/svg/verified.svg" alt="">
            <p class="font-bold">Seamless Exchange Integration</p>
            <p class="nrml-text">Connect effortlessly with leading exchanges and brokers.</p>
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