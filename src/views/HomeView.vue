<script setup>
import HeroSection from '@/sections/HomeSections/HeroSection.vue';
import WhySection from '@/sections/HomeSections/WhySection.vue';
import FeaturesSection from '@/sections/HomeSections/FeaturesSection.vue';
import WhyChooseUsSection from '@/sections/HomeSections/WhyChooseUsSection.vue';
import Animation from '@/sections/HomeSections/Animation.vue';
import CompetitionSection from '@/sections/HomeSections/CompetitionSection.vue';
import BrokerSection from '@/sections/HomeSections/BrokerSection.vue';
import PricingSection from '@/sections/HomeSections/PricingSection.vue';
import FaqSection from '@/sections/HomeSections/FaqSection.vue';
import TradeSmarterSection from '@/sections/HomeSections/TradeSmarterSection.vue';
</script>

<template>
  <main class="text-white">
    <HeroSection/>
    <WhySection/>
    <FeaturesSection id="feature"/>
    <WhyChooseUsSection/>
    <CompetitionSection id="why"/>
    <Animation/>
    <BrokerSection/>
    <PricingSection id="pricing"/>
    <FaqSection id="faq"/>
    <TradeSmarterSection/>
  </main>
</template>