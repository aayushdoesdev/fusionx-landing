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
  <section class="bg-custom-teal px-4 py-10 md:py-20 xl:px-0">
    <div class="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col items-center justify-center space-y-12 md:space-y-8 animate-on-scroll">
      <div class="text-center">
        <h1 class="font-bold text-[30px] leading-tight">Trade Smarter with Proven Strategies</h1>
        <p class="nrml-text w-[80%] mx-auto">
            Join thousands of traders using our platform to automate their trades and maximize profits—without writing a single line of code.
        </p>
      </div>
      <div class="flex items-center gap-4">
        <a href="https://calendly.com/officialfusionxtech/30min" target="_blank" class="border border-white rounded-full px-6 py-2">Get a Call Back</a>
        <button class="border border-white rounded-full px-6 py-2">Open an Account</button>
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