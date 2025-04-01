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
    <section class="max-w-6xl 2xl:max-w-7xl mx-auto  mt-16 xl:mt-48 px-4 xl:px-0 relative animate-on-scroll">
        <div class="text-center leading-tight space-y-6 relative z-20 ">
            <div class="flex items-center justify-center w-[80%] mx-auto xl:w-full">
              <img src="/svg/best.svg" alt="">
            </div>
            <h1 class="font-bold text-[32px] md:text-[60px] xl:text-[70px]">Connect Your Favorite Broker & Start Trading</h1>
            <p>Our platform integrates with leading brokers, allowing you to trade seamlessly with automated strategies.</p>
            <p>✅ No coding. No manual trades. Just smart investing.</p>
            <button class="bg-btn">Explore Now</button>
        </div>
        <!-- <img src="/svg/grid.svg" alt="" class="absolute top-[-100px] left-0 xl:left-[200px]"> -->

        <div class=" mt-16 lg:mt-52 md:mt-20">
            <img src="/images/dashboard_image.webp" alt="" class="">
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