<script setup>
import { ref, computed, watchEffect } from "vue";
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
]);

const matrixPlans = computed(() => {
  let data = products.value || [];
  return data.filter(
    (product) => product.category_name.toLowerCase() === "algo"
  ).slice(0, 4);
});

const selectedProducts = ref([])

const subscribe = (product) => {
  if(selectedProducts.value.length > 0) {
    selectedProducts.value = []
    selectedProducts.value.push(product)
  } else {
    selectedProducts.value.push(product)
  }
};

const billingPeriodLabels = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  half_yearly: "Half Yearly",
  yearly: "Yearly",
};

const setBillingPeriod = (period) => {
  billingPeriod.value = period
}

const removeFromCart = (item) => {
  console.log("print call removeFromCart", item);
  selectedProducts.value = selectedProducts.value.filter(product => product.product_id !== item.product_id)
}
</script>

<template>
  <section class="pb-20 relative px-4 xl:px-0">
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
          <tr
            class="flex items-center justify-between w-full text-left px-4 py-3 text-[14px] font-bold tracking-wide bg-[#131920]"
          >
            <td class="min-w-[200px] xl:min-w-0 w-[20%]">Features</td>
            <td
              v-for="product in matrixPlans"
              class="min-w-[250px] xl:min-w-0 w-[20%] flex items-center gap-2"
            >
              <p>{{ product.product_name }}</p>
              <p v-if="product.is_recommended === true" class="text-[12px] bg-custom-orange text-black px-2 py-1 rounded-lg">Recommended</p>
            </td>
          </tr>
        </thead>

        <tbody class="flex flex-col overflow-y-auto">
          <tr
            v-for="(feature, index) in featuresList"
            class="flex justify-between text-left w-full px-4 py-6 transition-all text-[12px] bg-[#030B11] font-semibold tracking-wider border-b border-white border-opacity-20"
          >
            <td class="min-w-[200px] xl:min-w-0 w-[20%] text-[14px]">{{ feature.name }}</td>
            <td
                v-for="product in matrixPlans"
                :key="product.product_name"
                class="min-w-[250px] xl:min-w-0 w-[20%]"
                :class="{'text-xl leading-4  font-bold': feature.key === 'timely_price'}"
                >
                <template v-if="feature.key === 'timely_price'">
                    <div v-if="product?.timely_price[billingPeriod]?.offer_price">
                      ₹{{ (product?.timely_price[billingPeriod]?.offer_price || 0).toLocaleString() }} <span class="text-[14px]">/ <span class="uppercase line-through" >  ₹{{ (product?.timely_price[billingPeriod]?.price || 0).toLocaleString() }}</span> </span>
                      <br/><span class="text-[14px] text-custom-teal uppercase">{{ billingPeriodLabels[billingPeriod] }}</span>
                    </div>
                    <div v-else>₹{{ (product?.timely_price[billingPeriod]?.price || 0).toLocaleString() }} <span class="text-[14px]">/ <span class="uppercase text-custom-teal" > {{  billingPeriodLabels[billingPeriod] }}</span> </span></div>
                </template>
                <template v-else>
                    <p class="text-[14px]">{{ product[feature.key] || "N/A" }}</p>
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
</style>
