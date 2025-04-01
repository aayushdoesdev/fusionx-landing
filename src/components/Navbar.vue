<script setup>
import { ref, reactive, toRefs, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { onClickOutside } from "@vueuse/core";
import axios from "axios";
import { baseApiUrl, setToken } from "@/requests/request";
import { storeToRefs } from "pinia";
import Popup from "./Popup.vue";
import LottieAnimation from "@/components/LottieAnimation.vue";
import ForgotPassSection from "@/sections/HomeSections/ForgotPassSection.vue";
import { auth, provider, signInWithPopup, signOut } from "@/firebase";
import useProfileStore from "@/stores/profile";
import useProductsStore from "@/stores/subscription";

const router = useRouter();
const route = useRoute();
const profileStore = useProfileStore();
const productsStore = useProductsStore();
const { logged, isPopupOpen } = storeToRefs(profileStore);

const isOpen = ref(false);
const closeSidebar = ref(null);
const activeForm = ref("login");

const openSidebar = () => {
  isOpen.value = true;
};

// Close sidebar when clicking outside
onClickOutside(closeSidebar, () => {
  isOpen.value = false;
});

const showForm = (form) => {
  activeForm.value = form;
};

// Prevent body scrolling when sidebar is open
watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});


const togglePopup = (button) => {
  isPopupOpen.value = button;
};

const loginModal = ref(null);
const loginFormData = reactive({
  email: "",
  password: "",
});
const errors = ref({});
const showPassword = ref(false);
const termsError = ref("");

const handleEnterKey = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (!checked.value) {
      termsError.value =
        "You must accept the terms and conditions before proceeding.";
    } else {
      termsError.value = ""; // Clear error if terms are accepted
      login();
    }
  }
};

// onClickOutside(loginModal, () => {
//   showLoginModal.value = false;
// });

const checked = ref(false);
const requested = ref(false);
const errorMsg = ref("");

const login = async () => {
  if (loginFormData.email && loginFormData.password) {
    try {
      requested.value = true;
      let response = await axios.post(
        baseApiUrl.value + "/auth/login/email",
        loginFormData,
        { headers: {} }
      ); //await makeRequest("login","POST",loginFormData,{},{},0,null);
      response = response.data;
      if (response) {
        setToken(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("role", response.data.user_role);
        localStorage.setItem("matrix", "algo");
        errorMsg.value = "";
        isPopupOpen.value = false;
        // showLoginModal.value = false;
        profileStore.getProfile();
        productsStore.getProducts();
      } else {
        errors.value.password = "Invalid password or Email!";
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        errorMsg.value = error.response.data.message || "Something went wrong";
      } else {
        errorMsg.value =
          "An error occurred while logging in. Please try again later.";
      }
    } finally {
      requested.value = false;
    }
  } else {
    errorMsg.value = "Please enter email and password";
  }
};

const user = ref(null);

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    user.value = result.user;
    console.log("User Info:", result.user);
  } catch (error) {
    console.error("Google Sign-in Error:", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    user.value = null;
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
</script>

<template>
  <nav class="max-w-6xl 2xl:max-w-7xl mx-auto flex items-center justify-between px-4 xl:px-0 py-6 relative z-20">
    <div @click="router.push('/')" class="cursor-pointer">
      <img src="/svg/Logo.svg" alt="" />
    </div>

    <div class="hidden text-white xl:flex items-center gap-8">
      <router-link to="/about" class="hover-text"
        :class="{ 'text-custom-teal': route.path === '/about' }">Why Us</router-link>
      <a href="/#feature" class="hover-text">Features</a>
      <!-- <a href="/#why" class="hover-text">Why Us</a> -->
      <a href="/#pricing" class="hover-text">Pricing</a>
      <button type="button" @click="router.push('/faq')" class="hover-text">FAQ's</button>

      <div class="flex gap-4" v-if="!logged">
        <!-- <button class="border-btn">Sign Up</button> -->
        <button @click="togglePopup(true)" class="bg-btn">
          <p class="text-transparent shine-text">Login</p>
        </button>
      </div>

      <div class="" v-if="logged">
        <button class="bg-btn">Go to Dashboard</button>
      </div>
    </div>

    <div @click="openSidebar()" class="xl:hidden">
      <button class="pi pi-bars text-white text-[25px]"></button>
    </div>
  </nav>

  <!-- Sidebar -->
  <div ref="closeSidebar" :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
    class="bg-[#151719] z-50 absolute left-0 w-[75%] top-0 transform transition-transform duration-300 ease-in-out p-8 text-white space-y-4 h-[100dvh] md:w-[45%] xl:hidden">
    <router-link to="/about"  @click="isOpen = false"
      class="text-[18px] hover:bg-white hover:bg-opacity-20 transition-all w-full flex items-start px-4 py-2 rounded-md">
      Why Us
    </router-link>
    <a href="/#feature"  @click="isOpen = false"
      class="text-[18px] hover:bg-white hover:bg-opacity-20 transition-all w-full flex items-start px-4 py-2 rounded-md">
      Features
    </a>
    <!-- <a href="/#why"
      class="text-[18px] hover:bg-white hover:bg-opacity-20 transition-all w-full flex items-start px-4 py-2 rounded-md">
      Why us
    </a> -->
    <a href="/#pricing"  @click="isOpen = false"
      class="text-[18px] hover:bg-white hover:bg-opacity-20 transition-all w-full flex items-start px-4 py-2 rounded-md">
      Pricing
    </a>
    <button type="button" @click="router.push('/faq', isOpen = false)"
      class="text-[18px] hover:bg-white hover:bg-opacity-20 transition-all w-full flex items-start px-4 py-2 rounded-md">
      FAQ's
    </button>

    <div class="flex gap-4" v-if="!logged">
      <!-- <button class="border-btn">Sign Up</button> -->
      <button @click="togglePopup(true)" class="bg-btn">Login</button>
    </div>

    <div class="" v-if="logged">
      <button class="bg-btn">Go to Dashboard</button>
    </div>
  </div>

  <Popup :isOpen="isPopupOpen" @close="togglePopup(false)" class="">
    <div class="p-4 h-full">
      <div class="">
        <img src="/svg/fusionx_logo_white.svg" class="mx-auto xl:ml-0 w-[180px]" />
      </div>
      <div class="mt-6 space-y-6">
        <form @submit.prevent="login" @keydown.enter.prevent="handleEnterKey" class="flex flex-col gap-4 text-white">
          <div class="tracking-wide text-center leading-tight xl:text-left space-y-3">
            <p class="font-bold text-[37px]">Welcome back!</p>
            <p class="nrml-text opacity-60">
              Trade smarter with breakout strategies. Log in to track your
              positions and maximize gains.
            </p>
          </div>

          <div class="space-y-1">
            <label class="sm-text">Email</label>
            <div class="flex items-center rounded-md border border-white border-opacity-25">
              <input type="email" id="email" placeholder="yourname@gmail.com" autocomplete="off"
                v-model="loginFormData.email" class="bg-transparent w-full py-3 px-4 outline-none sm-text" />
            </div>
            <p v-if="errors.email" class="text-red-500 sm-text">
              {{ errors.email }}
            </p>
          </div>

          <div class="space-y-1">
            <label class="sm-text">Password</label>
            <div class="flex items-center rounded-md border border-white border-opacity-25">
              <input placeholder="Password" :type="showPassword ? 'text' : 'password'" autocomplete="off"
                class="bg-transparent w-full py-3 px-4 outline-none sm-text" id="password"
                v-model="loginFormData.password" />
              <button type="button" tabindex="-1" @click="showPassword = !showPassword" class="mx-3 opacity-60">
                <i v-if="showPassword" class="pi pi-eye"></i>
                <i v-else class="pi pi-eye-slash"></i>
              </button>
            </div>
            <p v-if="errors.password" class="text-red-500 sm-text">
              {{ errors.password }}
            </p>
          </div>

          <div v-if="errorMsg" class="text-left text-red-500 text-sm">
            {{ errorMsg }}
          </div>

          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <input type="checkbox" id="terms" v-model="checked" />
              <p class="nrml-text">
                I agree with FusionX
                <a target="_blank" class="text-custom-teal font-bold underline underline-offset-4"
                  href="/terms/t&c">T&C</a>
                |
                <a class="text-custom-teal font-bold underline underline-offset-4" href="/terms/disclosure"
                  target="_blank">Disclosure</a>
              </p>
            </div>
            <p v-if="termsError" class="text-red-500 nrml-text">
              {{ termsError }}
            </p>
          </div>

          <button type="submit" :disabled="!checked || requested" class="bg-custom-teal w-full py-2 rounded-full"
            :class="{
              'cursor-pointer': checked && !requested,
              'bg-custom-teal cursor-not-allowed opacity-50':
                !checked || requested,
            }">
            <div v-if="requested" class="w-7 h-7 mx-auto">
              <div class="animate-spin rounded-full h-full w-full border-b-2 border-white"></div>
            </div>
            <div v-else class>Login</div>
          </button>
        </form>
      </div>

      <div v-if="activeForm === 'forgot'" class="flex flex-col items-start text-white">
        <div class="flex items-center gap-x-2">
          <button @click="showForm('login')" class="pi pi-angle-left text-[30px]"></button>
          <h1 class="font-bold tracking-wide text-center leading-[30px] md:leading-[50px] xl:text-left text-[1.5rem]">
            Forgot Password
          </h1>
        </div>
        <ForgotPassSection @close="showForm('login')" />
      </div>

      <!-- <div class="flex flex-col items-center justify-between text-white mt-4">
        <div class="nrml-text flex items-center justify-between gap-4 w-full">
          <div class="w-full h-[1px] bg-white bg-opacity-20"></div>
          <p class="whitespace-nowrap">Or continue with</p>
          <div class="w-full h-[1px] bg-white bg-opacity-20"></div>
        </div>

        <div class="mt-4 flex items-center gap-8">
          <button @click="signInWithGoogle" class="pi pi-google text-[25px]"></button>
          <button class="pi pi-apple text-[25px]"></button>
          <button class="pi pi-microsoft text-[25px]"></button>
        </div>
      </div> -->

      <p class="nrml-text text-white text-center mt-4">
        Don't have an account?
        <router-link to="/" class="font-semibold text-custom-teal">Sign up</router-link>
      </p>
    </div>
  </Popup>
</template>


<style scoped>
@keyframes shine {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

.shine-text {
  background: linear-gradient(90deg,
      #0C1219 0%,
      #0C1219 35%,
      white 50%,
      #0C1219 65%,
      #0C1219 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 3s linear infinite;
}
</style>