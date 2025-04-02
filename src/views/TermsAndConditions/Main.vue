<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import Terms from "./Terms.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";
import Disclaimer from "./Disclaimer.vue";
import Disclosure from "./Disclosure.vue";
import Refund from "./Refund.vue";
import Grievance from "./Grievance.vue";

// Use Vue Router composables
const route = useRoute();
const router = useRouter();

// Reactive variable for the active content
const activeContent = ref(route.query.tab || 'terms');

// Watch for changes in the route query to update active content
watch(() => route.query.tab, (newTab) => {
  activeContent.value = newTab || 'terms';
});

const termTypeButtons = [
  {
    title: "Terms and Conditions",
    type: "terms",
  },
  {
    title: "Privacy Policy",
    type: "privacy",
  },
  {
    title: "Disclaimer",
    type: "disclaimer",
  },
  {
    title: "Disclosure",
    type: "disclosure",
  },
  {
    title: "Refund Policy",
    type: "refund",
  },
  {
    title: "Grievance",
    type: "grievance",
  },
];

const selectedTermType = ref("terms");

const toggleTermType = (button) => {
  selectedTermType.value = button;
};
</script>

<template>
  <main class="max-w-4xl mx-auto">
    <div class="">
      <div class="p-4">
        <router-link to="/">
          <img
          src="/svg/fusionx_logo_white.svg"
          class="mx-auto xl:ml-0 w-[180px]"
        />
        </router-link>
      </div>

      <div
        class="flex justify-start md:justify-start gap-6 py-4 pb-0 border-b border-white border-opacity-20 whitespace-nowrap mx-4 overflow-x-auto no-scrollbar"
      >
        <router-link
          v-for="item in termTypeButtons"
          :to="{ query: { tab: item.type } }"
          type="button"
          class="nrml-text px-4 pb-2"
          :class="{
              'text-custom-teal border-b-2 border-custom-teal': activeContent === item.type,
              'text-white': activeContent !== item.type,
            }"
          @click="toggleTermType(item.type)"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
    <Terms v-if="selectedTermType === 'terms'" />
    <PrivacyPolicy v-if="selectedTermType === 'privacy'"/>
    <Disclaimer v-if="selectedTermType === 'disclaimer'"/>
    <Refund v-if="selectedTermType === 'refund'"/>
    <Disclosure v-if="selectedTermType === 'disclosure'"/>
    <Grievance v-if="selectedTermType === 'grievance'"/>
  </main>
</template>
