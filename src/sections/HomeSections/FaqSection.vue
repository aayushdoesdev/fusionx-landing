<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const activeIndex = ref(null);
const faqs = ref([
{
    question: "What is Fusion X, and how does it work?",
    answer:
      "Fusion X is an AI-powered trading platform that automates trade execution using pre-set AI strategies. Once you activate a strategy, the system continuously monitors the market, generates signals, and places trades automatically—without any manual effort.",
  },
  {
    question: "Do I need coding knowledge to use it?",
    answer:
      "No! Fusion X is built for all traders, including beginners. There’s no coding or manual strategy setup required—just select a strategy, set your capital, and let AI handle the rest.",
  },
  {
    question: "How is this different from manual trading?",
    answer:
      "Manual trading is often influenced by emotions and delays, leading to missed opportunities. Fusion X executes trades precisely and instantly, following AI-based logic for faster execution, risk control, and optimized performance.",
  },
  {
    question: "Which trading segments are supported on this platform?",
    answer:
      "This platform exclusively supports NSE, BSE, F&O, MCX, and ETFs in the Indian stock market.",
  },
  {
    question: "What brokers are supported on this platform?",
    answer:
      "This platform integrates with multiple API-enabled brokers for automated trading.",
  },
  {
    question: "How does this platform manage trading risks?",
    answer:
      "Pre-defined strategies come with built-in risk management tools such as stop-loss, trailing stop-loss, and position sizing to help minimize potential losses.",
  },
  {
    question: "Can I use a demo to test the strategy before trading with real money?",
    answer:
      "Yes! We offer a limited-period demo version so you can experience the platform before committing. Fusion X supports paper trading so you can test the strategy before going live.",
  },
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

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
  <section class="max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-10 xl:px-0 md:py-20 animate-on-scroll">
    <div class="text-center">
      <h1 class="font-bold text-[30px]">FAQ – Frequently Asked Questions</h1>
      <p class="nrml-text">Got Questions? We’ve Got Answers.</p>
    </div>

    <div class="max-w-4xl mx-auto mt-16">
      <div
        v-for="(item, index) in faqs"
        :key="index"
        class="border-b border-gray-700"
      >
        <button
          class="w-full text-left flex justify-between items-center py-4 text-white"
          @click="toggle(index)"
        >
          <span>{{ item.question }}</span>
          <span
            class="text-xl transition-transform duration-300"
            :class="{ 'rotate-45': activeIndex === index }"
          >
            +
          </span>
        </button>
        <div
          v-show="activeIndex === index"
          class="text-gray-400 pb-4 transition-opacity duration-300"
        >
          {{ item.answer }}
        </div>
      </div>
    </div>

    <button @click="router.push('/faq')" class="flex items-center justify-center w-full mt-8 text-custom-teal text-[16px]">See More</button>
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