<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <footer
    class="max-w-6xl 2xl:max-w-7xl mx-auto text-white px-4 pt-24 xl:px-0 flex flex-col items-start justify-between"
  >
    <!-- Main Footer Content -->
    <div class="w-full flex flex-col md:flex-row items-start justify-between">
      <div class="w-full xl:w-[50%] space-y-3">
        <a href="#"><img src="/svg/Logo.svg" alt="" /></a>
        <p class="text-[14px] w-[70%]">
          Founded in 2023, we are an automated platform for your best
          investment, offering seamless and intelligent trading solutions.
        </p>
      </div>
      <div
        class="w-full xl:w-[50%] grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-0"
      >
        <div class="space-y-6">
          <p class="font-bold text-[19px]">Quick Links</p>
          <div class="text-[14px] flex flex-col items-start space-y-2">
            <router-link
              to="/about"
              class="hover-text"
              :class="{ 'text-custom-teal': route.path === '/about' }"
              >Why Us</router-link
            >
            <router-link
              to="/strategy"
              class="hover-text"
              :class="{ 'text-custom-teal': route.path === '/strategy' }"
              >Strategy</router-link
            >
            <a href="/#feature" class="hover-text">Features</a>
            <!-- <a href="/#why" class="hover-text">Why Us</a> -->
            <a href="/#pricing" class="hover-text">Pricing</a>
            <button
              type="button"
              @click="router.push('/faq')"
              class="hover-text"
            >
              FAQ
            </button>
          </div>
        </div>
        <div class="space-y-6">
          <p class="font-bold text-[19px]">Support</p>
          <div class="text-[14px] space-y-2">
            <p>Contact Us:</p>
            <a
              href="mailto:officialfusionxtech@gmail.com"
              class="underline underline-offset-2"
              >officialfusionxtech@gmail.com</a
            >
          </div>
          <div class="">
            <p class="font-bold">Follow Us:</p>
            <div class="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/fusionxtech/"
                target="_blank"
                class=""
              >
                <i class="pi pi-instagram text-[16px]"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574610607402"
                target="_blank"
                class=""
              >
                <i class="pi pi-facebook text-[16px]"></i>
              </a>
              <a
                href="https://www.youtube.com/@fusionx_tech"
                target="_blank"
                class=""
              >
                <i class="pi pi-youtube text-[16px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Separator -->
    <hr class="w-full border-[#ffffff11] my-8" />

    <!-- Disclaimer Section -->
    <div class="w-full opacity-50">
      <p class="font-bold text-[13.33px] mb-4">Disclaimer</p>
      <div class="text-[13.33px] space-y-4">
        <p>
          Fusion X Technology is an algorithmic trading platform designed to
          provide research-based insights and automated trading solutions. By
          using our platform, users acknowledge and agree to the following:
        </p>

        <div class="space-y-3 text-[13.33px]">
          <div>
            <p class="font-bold">1. No Guarantee of Returns</p>
            <ul class="list-disc pl-6 mt-1">
              <li>
                The stock market is subject to fluctuations, and all investments
                carry inherent risks. Past performance is not indicative of
                future results.
              </li>
              <li>
                While our algorithms and research are based on data-driven
                analysis, we do not guarantee any specific financial returns.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">2. Regulatory Compliance and Certification</p>
            <ul class="list-disc pl-6 mt-1">
              <li>
                Fusion X Technology operates in compliance with applicable
                regulatory guidelines and holds the necessary registrations and
                certifications, including NISM certification.
              </li>
              <li>
                However, holding a registration or certification does not imply
                guaranteed profits or protection against market losses.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">3. Market Risks</p>
            <ul class="list-disc pl-6 mt-1">
              <li>
                Trading and investing in financial markets involve inherent
                risks, including but not limited to liquidity risk, volatility,
                regulatory changes, and economic factors.
              </li>
              <li>
                Sudden market movements or unforeseen global events may impact
                investment outcomes, leading to potential losses.
              </li>
              <li>
                Users should be aware that algorithmic trading does not
                eliminate risks but rather provides data-driven execution
                strategies.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">4. Risk Associated with Open Positions</p>
            <ul class="list-disc pl-6 mt-1">
              <li>
                Open positions in financial markets are subject to price
                fluctuations, and users must monitor them closely to mitigate
                potential losses.
              </li>
              <li>
                Market conditions such as slippage, gaps, and sudden volatility
                can result in positions being liquidated at unfavorable prices.
              </li>
              <li>
                It is the user's responsibility to manage risk by using
                stop-loss, hedging strategies, and proper position sizing.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">5. User Responsibility</p>
            <ul class="list-disc pl-6 mt-1">
              <li>
                The use of algorithmic trading involves potential risks,
                including technical failures and market volatility. Users should
                exercise their discretion before making any financial decisions.
              </li>
              <li>
                It is recommended that users consult with financial advisors and
                assess their risk appetite before engaging in trading
                activities.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">6. Limitation of Liability</p>
            <ul class="list-disc pl-6 mt-1">
              <li>
                Fusion X Technology shall not be held responsible for any
                financial losses incurred as a result of using our platform or
                relying on our research.
              </li>
              <li>
                Users acknowledge that all trading and investment decisions are
                made at their own risk.
              </li>
            </ul>
          </div>

          <div>
            <p class="font-bold">7. Amendments</p>
            <ul class="list-disc pl-6 mt-1">
              <li>
                This disclaimer is subject to change without prior notice. Users
                are encouraged to review it periodically.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-6 w-full py-4">
      <div
        class="text-[14px] space-y-3 flex flex-col justify-between items-center w-full"
      >
        <hr class="w-full opacity-20" />
        <div
          class="flex justify-center items-center w-full text-[11px] gap-4 opacity-50"
        >
          <router-link to="/terms-and-conditions?tab=terms">Terms and Conditions</router-link>
          <router-link to="/terms-and-conditions?tab=privacy">Privacy Policy</router-link>
          <router-link to="/terms-and-conditions?tab=disclaimer">Disclaimer</router-link>
          <router-link to="/terms-and-conditions?tab=disclosure">Disclosure</router-link>
          <router-link to="/terms-and-conditions?tab=refund">Refund Policy</router-link>
          <router-link to="/terms-and-conditions?tab=grievance">Grievances</router-link>
        </div>
        <hr class="w-full opacity-20" />
      </div>
      <p class="text-center text-[11px]">
        © 2025 All rights reserved by FusionX Tech | Proudly Developed with ❤️‍🔥
        by
        <a
          href="https://xtentioncrew.tech"
          target="_blank"
          class="text-custom-teal underline underline-offset-2"
          >X-tention crew technologies</a
        >
      </p>
    </div>
  </footer>
</template>
