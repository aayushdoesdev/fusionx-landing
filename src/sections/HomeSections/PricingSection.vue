<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStrategiesStore } from "@/stores/strategies";
import Cart from "@/sections/HomeSections/Cart.vue"
import useProfileStore from "@/stores/profile";

const strategyStore = useStrategiesStore()
const profileStore = useProfileStore();

const {products, billingPeriod} = storeToRefs(strategyStore)
const { logged, isPopupOpen } = storeToRefs(profileStore);

const featuresList = ref([
  { name: "Price", key: "timely_price" },
  { name: "No. of Strategies", key: "max_webhook_strategies" },
  { name: "Max Deployments", key: "max_deployment" },
  { name: "Max Brokers", key: "max_brokers" },
  { name: "Paper Trade", key: "paper_trade" },
  { name: "Segments", key: "segments" },
  { name: "Index", key: "index" },
  { name: "Trade Type", key: "trade_type" },
  { name: "Personal Customer Support", key: "customer_support" },
]);

const matrixPlans = computed(() => {
  let data = products.value || [];
  const filteredPlans = data
    .filter((product) => product.category_name.toLowerCase() === "algo")
    .slice(0, 4);
  
  // Parse the description JSON for each product
  return filteredPlans.map(product => {
    const enhancedProduct = { ...product };
    
    try {
      if (product.description) {
        const descriptionData = JSON.parse(product.description);
        // Add parsed values to the product
        enhancedProduct.segments = descriptionData.segments;
        enhancedProduct.index = descriptionData.index;
        enhancedProduct.trade_type = descriptionData.trade_type;
        enhancedProduct.customer_support = descriptionData.customer_support;
        enhancedProduct.stg_count_text = descriptionData.stg_count_text;
        enhancedProduct.recommended_text = descriptionData.recommended_text;
      }
    } catch (error) {
      console.error(`Error parsing description for product ${product.product_id}:`, error);
    }
    
    return enhancedProduct;
  });
});

const selectedProducts = ref([]);

const subscribe = (product) => {
  if(selectedProducts.value.length > 0) {
    selectedProducts.value = [];
    selectedProducts.value.push(product);
  } else {
    selectedProducts.value.push(product);
  }
};

const setBillingPeriod = (period) => {
  billingPeriod.value = period;
};

const removeFromCart = (item) => {
  console.log("print call removeFromCart", item);
  selectedProducts.value = selectedProducts.value.filter(product => product.product_id !== item.product_id);
};

const calculateDiscount = (originalPrice, offerPrice) => {
  if (!originalPrice || !offerPrice) return 0; // Prevent division by zero
  return Math.round(((originalPrice - offerPrice) / originalPrice) * 100);
};

// Helper function to get feature value from a product
const getFeatureValue = (product, key) => {
  if (key === "timely_price" || key === "max_webhook_strategies" || 
      key === "max_deployment" || key === "max_brokers" || key === "paper_trade") {
    return product[key];
  }
  
  // For keys from the description JSON
  if (key === "segments" || key === "index" || key === "trade_type" || key === "customer_support") {
    return product[key];
  }
  
  return "N/A";
};

const billingPeriodLabels = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  half_yearly: "Half Yearly",
  yearly: "Yearly",
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
  <section class="relative px-4 xl:px-0 animate-on-scroll">
    <div
      class="space-y-2 text-center max-w-6xl 2xl:max-w-7xl mx-auto relative z-20"
    >
      <h1 class="font-bold text-[30px]">Pricing & Plans</h1>
      <p class="nrml-text lg:w-[60%] mx-auto">
        Skip the guesswork. Our SaaS platform offers a suite of expertly
        designed, backtested trading strategies, ready to deploy with a single
        click.
      </p>
    </div>
    <div class="w-full py-24 bg">

    
    <div class="text-white overflow-x-auto max-w-7xl mx-auto  rounded-xl relative z-20">
      <table class="w-full">
        <thead>
          <tr class="flex items-center justify-between w-full text-left px-4 py-3 text-[14px] font-bold tracking-wide">
            <td class="min-w-[200px] xl:min-w-0 w-[20%]"></td>

            <td v-for="product in matrixPlans"
            class="min-w-[250px] xl:min-w-0 w-[20%] flex items-center gap-2">
              <div v-if="product.is_recommended && !product.recommended_text" class="bg-[#DF15A2] px-1 rounded-md text-[12px] font-extrabold text-black">
                RECOMMENDED
              </div>

              <div v-if="product.is_recommended && product.recommended_text" class="bg-[#DF1518] px-1 rounded-md text-[12px] font-extrabold text-black uppercase">
                {{ product.recommended_text }}
              </div>
            </td>
          </tr>
          <tr
            class="flex items-center justify-between w-full text-left px-4 py-3 text-[14px] font-bold tracking-wide bg-[#131920]"
          >
            <td class="min-w-[200px] xl:min-w-0 w-[20%]">Features</td>
            <td
              v-for="product in matrixPlans"
              class="min-w-[250px] xl:min-w-0 w-[20%] flex items-center gap-2"
            >
            <img src="/svg/fusionx_logo_white.svg" alt="" class="w-[100px]">

              <div v-if="product.product_name === 'Expert'" class="">
                <img src="/svg/Expert.svg" alt="" class="max-w-[60%]">
              </div>


              <div v-if="product.product_name === 'Premium'" class="">
                <img src="/svg/Premium.svg" alt="" class="max-w-[60%]">
              </div>


              <div v-if="product.product_name === 'Pro'" class="">
                <img src="/svg/Pro.svg" alt="" class="max-w-[60%]">
              </div>

              <!-- <p v-if="product.is_recommended === true" class="recommended-bg-tag">Recommended</p> -->

              <!-- <p class="text-white">{{ product }}</p> -->
            </td>
          </tr>
        </thead>

        <tbody class="flex flex-col overflow-y-auto">
          <tr
            v-for="(feature, index) in featuresList"
            class="flex justify-between text-left w-full px-4 py-6 transition-all text-[12px] bg-[#030B11] font-semibold tracking-wider border-b border-white border-opacity-20"
          >
            <td class="min-w-[200px] xl:min-w-0 w-[20%]">{{ feature.name }}</td>
            <td
              v-for="product in matrixPlans"
              :key="product.product_name"
              class="min-w-[250px] xl:min-w-0 w-[20%]"
              :class="{'text-xl leading-4 font-bold': feature.key === 'timely_price'}"
            >
              <!-- Price display logic -->
              <template v-if="feature.key === 'timely_price'">
                <div v-if="product?.timely_price[billingPeriod]?.offer_price" class="space-y-2">
                  <div class="flex items-start gap-2">
                    <p class="uppercase line-through text-[14px]">₹{{ (product?.timely_price[billingPeriod]?.price || 0).toLocaleString() }}</p>
                    <p class="no-bg-tag w-fit">{{ calculateDiscount(product?.timely_price[billingPeriod]?.price, product?.timely_price[billingPeriod]?.offer_price) }} % Off</p>
                  </div>
                  <div class="">
                    <p>₹{{ (product?.timely_price[billingPeriod]?.offer_price || 0).toLocaleString() }} <span class="text-[12px]">/ Yearly</span></p>
                  </div>
                </div>
              </template>

              <!-- Always display "Yes" for paper trading -->
            <template v-else-if="feature.key === 'paper_trade'">
              Yes
            </template>

            <template v-else-if="feature.key === 'max_webhook_strategies'">
              {{ product[feature.key] }} Strategies <span v-if="product.stg_count_text" class="bg-custom-orange text-[10px] px-1 rounded-md font-bold text-black py-1 ">{{ product.stg_count_text }}</span>
            </template>
              
              <!-- For segments, index, trade_type, and customer_support -->
              <template v-else-if="feature.key === 'segments' || feature.key === 'index' || feature.key === 'trade_type' || feature.key === 'customer_support'">
                {{ product[feature.key] || "N/A" }}
              </template>
              
              <!-- For other regular fields -->
              <template v-else>
                {{ product[feature.key] || "N/A" }}
              </template>
            </td>
          </tr>

          <tr class="flex items-center justify-between text-left w-full px-4 py-2 bg-[#030B11]  border-b border-white border-opacity-20">
            <td class="min-w-[200px] xl:min-w-0 w-[20%]"></td> 
            <td
            v-for="product in matrixPlans"
            :key="product.product_name"
            class="min-w-[250px] xl:min-w-0 w-[20%]"
            >
            <button 
                v-if="logged"
                @click="subscribe(product)"
                class="nrml-text text-custom-teal border border-custom-teal font-semibold tracking-wide rounded-md px-8 py-1"
            >
                Subscribe
            </button>
            <button 
                v-if="!logged"
                @click="isPopupOpen = true"
                class="nrml-text text-custom-teal border border-custom-teal font-semibold tracking-wide rounded-md px-8 py-1"
            >
                Login
            </button>
            </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
    <!-- <div class="hidden md:block absolute top-[30%] left-[0px]">
      <img src="/images/light.webp" alt="" class="w-[760px]">
    </div>
    <div class="hidden md:block absolute top-[30%] right-[0px]">
      <img src="/images/light2.webp" alt="" class="w-[760px]">
    </div> -->

    <Cart :cart="selectedProducts" :removeFromCart="removeFromCart" :billingPeriod="billingPeriod" />
  </section>
</template>

<style scoped>
.bg{
  background-image: url('/public/images/pricing-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

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