<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="max-w-6xl 2xl:max-w-7xl mx-auto text-white px-4 py-10 xl:px-0 flex flex-col md:flex-row items-start justify-between">
        <div class="w-full xl:w-[50%] space-y-3">
            <a href="#"><img src="/svg/Logo.svg" alt=""></a>
            <p class="text-[14px]">Get tips, technical guides, and best practices.<br/> Twice a month. Right in your inbox.</p>
        </div>
        <div class="w-full xl:w-[50%] grid grid-cols-2 md:grid-cols-3 gap-8 mt-10 md:mt-0">
            <div class="space-y-6">
                <p class="font-bold text-[19px]">Products</p>
                <div class="text-[14px] space-y-2">
                    <p>Home</p>
                    <p>Products</p>
                    <p>Pricing</p>
                </div>
            </div>
            <div class="space-y-6">
                <p class="font-bold text-[19px]">Legals</p>
                <div class="text-[14px] space-y-2">
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Disclaimer</p>
                </div>
            </div>
            <div class="space-y-6">
                <p class="font-bold text-[19px]">Support</p>
                <div class="text-[14px] space-y-2">
                    <p>Contact Us:</p>
                    <p class="underline underline-offset-2">hello@aitoolbook.ai</p>
                </div>
                <div class="">
                    <p class="font-bold">Follow Us:</p>
                    <div class="flex gap-4 mt-4">
                        <a href="https://www.youtube.com/@fusionx_tech" target="_blank" class="">
                            <i class="pi pi-youtube text-[30px]"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61574610607402" target="_blank" class="">
                            <i class="pi pi-facebook text-[30px]"></i>
                        </a>
                        <a href="https://www.instagram.com/fusionxtech/" target="_blank" class="">
                            <i class="pi pi-instagram text-[30px]"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>