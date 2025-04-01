<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const faq = ref([
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
  {
    question: "How do I choose the right strategy for me?",
    answer:
      "We offer multiple pre-tested strategies based on different trading styles. Our dashboard provides details on each strategy, including risk level and market conditions, helping you select the right one. You can select the one that fits your risk appetite and trading goals.",
  },
  {
    question: "Can I manage multiple accounts with a single subscription?",
    answer:
      "No, each subscription is tied to one account. If you need multiple accounts, additional licenses are required.",
  },
  {
    question: "Do I need to keep my system or internet running for trades to execute?",
    answer:
      "No, since everything is cloud-based, trades execute even if your device is turned off.",
  },
  {
    question: "How are trades executed on this platform?",
    answer:
      "Trades are executed automatically based on the selected strategies, eliminating the need for manual intervention. However, users can monitor performance in real time.",
  },
  {
    question: "How can I get support if I have questions?",
    answer:
      "Our expert team is available via WhatsApp, email, and phone to assist you.",
  },
  {
    question: "Do the trading strategies get updated over time?",
    answer:
      "Yes, Fusion X constantly learns and adapts to new market conditions to improve strategy performance.",
  },
  {
    question: "How much capital do I need to start trading with Fusion X?",
    answer:
      "You can start trading with a minimum capital of ₹20,000. However, capital requirements may vary based on the strategy you choose.",
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer:
      "Yes, you can upgrade your plan anytime from the Fusion X dashboard.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept UPI, net banking, debit/credit cards, and direct payments from your own dashboard.",
  },
  {
    question: "Can I make payments directly from the dashboard?",
    answer:
      "Yes! The dashboard allows easy plan activation, renewal, and upgrades with a secure payment gateway.",
  },
  {
    question: "What types of strategies does Fusion X offer?",
    answer:
      "Our strategies cover option buying, selling, hedging, futures trading, and equity-based setups, ensuring diversification and risk control.",
  },
  {
    question: "Can I run multiple strategies at the same time?",
    answer:
      "Yes, multiple strategies can be activated, but it's recommended to manage your capital wisely to avoid overexposure in the market.",
  },
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <main
    class="max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-10 xl:px-0 md:py-20 text-white"
  >
    <div class="text-center">
      <h1 class="font-bold text-[30px]">FAQ – Frequently Asked Questions</h1>
      <p class="nrml-text">Got Questions? We’ve Got Answers.</p>
    </div>

    <div class="flex flex-col w-full items-center justify-between gap-8 mt-12 md:max-w-[60%] mx-auto">
      <div class="w-full">
        <div
          v-for="(item, index) in faq"
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
    </div>
  </main>
</template>
