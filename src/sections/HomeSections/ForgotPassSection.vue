<template>
  <div class="w-full">
    <div v-if="errorMsg" class="text-red-500 text-sm pl-4 pb-5">
      {{ errorMsg }}
    </div>
    <div v-else class="pb-5"></div>

    <template v-if="isForgotPassword && !isSendOtp">
      <form @submit.prevent="forgotPass">
        <label for="email" class="nrml-text">Enter your registered email</label>
        <div
          class="flex items-center rounded-md border border-white border-opacity-25 mt-2"
        >
          <i class="pi pi-envelope ml-4"></i>
          <input
            class="bg-transparent w-full py-3 px-4 outline-none nrml-text"
            type="email"
            id="email"
            placeholder="yourname@gmail.com"
            v-model="forgotPasswordFormData.email"
          />
        </div>
        <button
          class="py-2 mt-4 rounded-lg border-none bg-custom-teal w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </template>

    <template v-if="isForgotPassword && isSendOtp">
      <form @submit.prevent="submitForgotPassword">
        <div class="intro-x">
          <div class="items-center flex">
            Please check your registered email for the OTP.
          </div>
          <div
            class="flex items-center w-full space-x-2 mt-3 border border-white border-opacity-20 rounded-md"
          >
            <input
              type="text"
              class="py-3 px-4 w-full bg-transparent nrml-text outline-none"
              v-model="otp"
              maxlength="6"
              @input="filterOtpInput"
              placeholder="Enter OTP"
            />
          </div>
          <div class="mt-4 flex flex-col">
            <div
              class="flex items-center w-full border border-white border-opacity-20 rounded-md"
            >
              <input
                autocomplete="new-password"
                id="password"
                name="password"
                v-model.trim="enterOtpPasswordData.password"
                :type="showPassword ? 'text' : 'password'"
                class="py-3 px-4 w-full bg-transparent nrml-text outline-none"
                placeholder="Enter New Password"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="mx-3 opacity-60"
              >
                <i v-if="showPassword" class="pi pi-eye"></i>
                <i v-else class="pi pi-eye-slash"></i>
              </button>
            </div>
            <div class="nrml-text flex items-center mt-2">
              <div
                :class="{
                  'bg-red-500': enterOtpPasswordData.password.length < 6,
                  'bg-yellow-500':
                    enterOtpPasswordData.password.length >= 6 &&
                    enterOtpPasswordData.password.length <= 10,
                  'bg-green-500': enterOtpPasswordData.password.length > 10,
                }"
                class="h-2 w-12 rounded-full mr-1"
              ></div>
              <span
                :class="{
                  'text-red-500': enterOtpPasswordData.password.length < 6,
                  'text-yellow-500':
                    enterOtpPasswordData.password.length >= 6 &&
                    enterOtpPasswordData.password.length <= 10,
                  'text-green-500': enterOtpPasswordData.password.length > 10,
                }"
              >
                {{ passwordStrengthText }}
              </span>
            </div>
          </div>
          <button
            class="bg-custom-teal py-2 px-4 w-full rounded-md mt-5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from "vue";
import { makeRequest } from "@/requests/request";
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["close"]);

const goBack = () => {
  emit("close");
};

const isForgotPassword = ref(true);
const isSendOtp = ref(false);
const errorMsg = ref("");

const forgotPasswordFormData = reactive({ email: "" });
const enterOtpPasswordData = reactive({ password: "" });

const otp = ref("");
const showPassword = ref(false);

const forgotPass = async () => {
  if (forgotPasswordFormData.email) {
    try {
      const responseOtp = await makeRequest(
        "sendForgotOTP",
        "POST",
        forgotPasswordFormData
      );
      if (responseOtp) {
        toastStore.addToast("Success", responseOtp?.message, "success", 5000);
        isSendOtp.value = true;
        errorMsg.value = "";
      }
    } catch (error) {
      errorMsg.value = "An error occurred while sending the OTP.";
    }
  }
};

const submitForgotPassword = async () => {
  if (otp.value.length === 6 && enterOtpPasswordData.password.length >= 6) {
    try {
      const responseForgot = await makeRequest("forgot", "POST", {
        email: forgotPasswordFormData.email,
        otp: otp.value, // Fixed this
        password: enterOtpPasswordData.password,
      });

      if (responseForgot) {
        isSendOtp.value = false;
        isForgotPassword.value = false;
        goBack();
      }
    } catch (error) {
      errorMsg.value = "An error occurred while resetting your password.";
      otp.value = ""; // Reset OTP properly
    }
  } else {
    errorMsg.value = "Please enter a valid OTP and password.";
  }
};

// Restrict OTP input to numbers and max length 6
const filterOtpInput = (event) => {
  otp.value = event.target.value.replace(/\D/g, "").slice(0, 6);
};

const passwordStrengthText = computed(() => {
  const length = enterOtpPasswordData.password.length;
  if (length < 6) return "Weak Password";
  if (length >= 6 && length <= 10) return "Medium Password";
  return "Strong Password";
});
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
