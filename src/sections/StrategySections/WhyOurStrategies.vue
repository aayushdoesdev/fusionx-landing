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
  <section
    class="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col justify-center items-center px-4 py-10 xl:px-0 space-y-8 animate-on-scroll"
  >
    <div
      class="space-y-2 text-center max-w-6xl 2xl:max-w-7xl mx-auto relative z-20"
    >
      <h1 class="text-custom-teal font-bold text-[30px]">Why Use Our Strategies?</h1>
      <p class="nrml-text lg:w-[80%] mx-auto">
        Honestly? We built this platform because we were tired of missing out. Missing profitable trades because we had a meeting. Losing sleep over volatile markets. Watching complex trading platforms that only techies could understand.
      </p>
    </div>

    <div class="w-full xl:w-[70%] mx-auto">
        <img src="/images/why_our_strategies.png" alt="">
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