<script setup>
import { ref } from "vue";

const activeIndex = ref(null);
const faqs = ref([
  {
    question: "What is an algo trading dashboard?",
    answer:
      "An algo trading dashboard helps automate trading using predefined strategies.",
  },
  {
    question: "Do I need coding skills to use it?",
    answer: "No, you can use pre-built strategies without coding.",
  },
  {
    question: "Can I customize the strategies?",
    answer: "Yes, you can modify existing strategies or create your own.",
  },
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="max-w-6xl 2xl:max-w-7xl mx-auto py-10 px-4 xl:px-0 xl:py-20">
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
  </section>
</template>
