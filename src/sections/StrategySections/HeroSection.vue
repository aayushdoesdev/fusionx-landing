<script setup>
import { ref, computed, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useStrategiesStore } from "@/stores/strategies";
import useProfileStore from "@/stores/profile";
import { onMounted } from 'vue';

const strategiesStore = useStrategiesStore();
const profileStore = useProfileStore();

const { products } = storeToRefs(strategiesStore);
const { logged, isPopupOpen } = storeToRefs(profileStore);

let filteredStrategies = ref([]);
let selectedPlan = ref(1);
const selectedPlanData = ref({});

const strategyTypeOptions = {
  "options": "Single Leg",
  "straddle strangle": "Multi Leg",
  "multi script": "Equity/Futures",
}

const plans = computed(() => {
  let data = products.value || [];
  const matrixPlans = data.filter(
    (product) =>
      product.category_name === "algo" || product.category_name === "all in one"
  );

  return matrixPlans || [];
});

filteredStrategies = computed(() => {
  // Get selected plan data
  selectedPlanData.value = plans.value.find(
    (plan) => plan.product_id === selectedPlan.value
  );

  if (selectedPlanData.value && selectedPlanData.value.strategies) {
    return selectedPlanData.value.strategies;
  } else {
    return [];
  }
});

const toggleSelectedPlan = (button) => {
  selectedPlan.value = button;
};

// Function to parse the message and check if recommended is true
const checkRecommended = (data) => {
  if (!data || !data.message) return false; // Return false if data or message is missing
  try {
    const parsedMessage = JSON.parse(data.message); // Parse the JSON string
    return parsedMessage.recommended === true;
  } catch (error) {
    // console.error("Error parsing message:", error);
    return false; // Return false if JSON parsing fails
  }
};

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
      class="border border-white bg-white bg-opacity-20 w-fit px-6 py-2 rounded-full nrml-text"
    >
      <p>❤️ Smart Automation For Smart Traders</p>
    </div>

    <h1
      class="font-extrabold text-center text-[34px] xl:leading-[80px] md:text-[60px] leading-tight"
    >
      Smart Strategies. Smarter <br />
      Investments.
    </h1>

    <p class="nrml-text text-center">
      Trade with confidence using pre-built, backtested strategies—no coding
      required.
    </p>

    <div class="border border-white border-opacity-20 bg-[#0C1219] rounded-xl w-full">
      <div
        class="flex gap-4 p-4 border-b border-white border-opacity-20 overflow-x-auto w-full"
      >
        <button
          v-for="item in plans"
          @click="toggleSelectedPlan(item.product_id)"
          class="whitespace-nowrap w-fit hover:text-black hover:bg-custom-teal transition-all"
          :class="{
            'bg-custom-teal text-[12px] px-4 py-1 rounded-md text-black font-bold border border-custom-teal w-fit':
              selectedPlan === item.product_id,
            'text-custom-teal text-[12px] px-4 py-1 rounded-md border border-custom-teal font-bold w-fit':
              selectedPlan !== item.product_id,
          }"
        >
          {{ item.title }}
        </button>
      </div>

      <div class="overflow-auto">
        <div class="p-4 text-white">
          <h2 class="title-text">
            {{ filteredStrategies.length }} Strategies found in this Plan
          </h2>
        </div>

        <template
          v-if="filteredStrategies && filteredStrategies.length > 0"
          v-for="(data, index) in filteredStrategies"
          class="overflow-auto w-full"
        >
          <div
            class="p-4 flex flex-col items-start md:flex-row md:items-center justify-between border-b border-white border-opacity-20 md:gap-16 space-y-6 md:space-y-0 w-full xl:hover:bg-white xl:hover:bg-opacity-10 transition-all"
          >
            <div class="flex items-start gap-3 min-w-[350px] w-[30%]">
              <p class="rounded-lg">
                <img
                  :src="data.image_url"
                  alt=""
                  class="w-[50px] h-[50px] object-cover rounded-lg"
                />
              </p>
              <div
                class="text-white flex flex-col items-start gap-2 flex-wrap whitespace-nowrap"
              >
                <div class="flex items-center gap-2">
                  <p class="title-text">{{ data.strategy_name }}</p>
                  <p class="small-text opacity-60 tracking-wide">By Fusion</p>
                  <p v-if="checkRecommended(data)" class="recommended-bg-tag">
                    Recommended
                  </p>
                </div>
                <div class="flex items-center gap-2 capitalize">
                  <p class="no-bg-tag">{{ data.script }}</p>
                  <p class="no-bg-tag" v-if="strategyTypeOptions[data.strategy_type_name]">{{ strategyTypeOptions[data.strategy_type_name] }}</p>
                <p class="no-bg-tag">{{ data.risk }} RISK</p>
              </div>
              </div>
            </div>

            <div
              class="text-white flex items-center gap-4 xl:gap-8 2xl:gap-12 whitespace-nowrap"
            >
              <div class="">
                <p class="nrml-text opacity-70">Min Capital</p>
                <p class="text-[#8B9DEF] font-bold text-[12px] md:text-[14px]">
                  ₹{{ Number(data.capital_required || "0").toLocaleString() }}
                </p>
              </div>
              <div class="border border-white border-opacity-10 h-[30px]"></div>
              <div class="">
                <p class="nrml-text opacity-70">Avg Drawdown</p>
                <p class="text-[#EFD68B] font-bold text-[12px] md:text-[14px]">
                  {{ data.avg_drawdown }}
                </p>
              </div>
              <div class="border border-white border-opacity-10 h-[30px]"></div>
              <div class="">
                <p class="nrml-text opacity-70">Risk Reward</p>
                <p class="text-[#B38BEF] font-bold text-[12px] md:text-[14px]">
                  {{ data.win_ratio }}
                </p>
              </div>
              <div class="border border-white border-opacity-10 h-[30px]"></div>
              <div class="">
                <p class="nrml-text opacity-70">Win Streak</p>
                <p class="text-[#8BEFA2] font-bold text-[12px] md:text-[14px]">
                  {{ data.win_percentage }}
                </p>
              </div>
            </div>

            <div class="flex w-full md:w-fit text-white">
              <a v-if="logged" href="https://app.fusionxtech.in/" target="_blank"
                class="border border-custom-teal text-custom-teal hover:bg-custom-teal hover:text-white font-bold transition-all px-6 py-1 rounded-full w-full md:w-fit text-[14px] shining-btn"
              >
                Info
              </a>
              <button 
                v-if="!logged"
                @click="isPopupOpen = true"
                class="border border-custom-teal text-custom-teal hover:bg-custom-teal hover:text-white font-bold transition-all px-6 py-1 rounded-full w-full md:w-fit text-[14px]"
            >
                Login
            </button>
            </div>
          </div>
        </template>
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