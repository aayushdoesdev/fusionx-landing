<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="max-w-6xl 2xl:max-w-7xl mx-auto text-white px-4 py-10 pt-24 xl:px-0 flex flex-col items-start justify-between">
        <!-- Main Footer Content -->
        <div class="w-full flex flex-col md:flex-row items-start justify-between">
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
                            <a href="https://www.instagram.com/fusionxtech/" target="_blank" class="">
                                <i class="pi pi-instagram text-[16px]"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61574610607402" target="_blank" class="">
                                <i class="pi pi-facebook text-[16px]"></i>
                            </a>
                            <a href="https://www.youtube.com/@fusionx_tech" target="_blank" class="">
                                <i class="pi pi-youtube text-[16px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Separator -->
        <hr class="w-full border-[#ffffff11] my-8">
        
        <!-- Disclaimer Section -->
        <div class="w-full opacity-25">
            <p class="font-bold text-[12px] mb-4 ">Disclaimer</p>
            <div class="text-[10px] space-y-4">
                <p>Fusion X Technology is an algorithmic trading platform designed to provide research-based insights and automated trading solutions. By using our platform, users acknowledge and agree to the following:</p>
                
                <div class="space-y-3">
                    <div>
                        <p class="font-bold">1. No Guarantee of Returns</p>
                        <ul class="list-disc pl-6 mt-1">
                            <li>The stock market is subject to fluctuations, and all investments carry inherent risks. Past performance is not indicative of future results.</li>
                            <li>While our algorithms and research are based on data-driven analysis, we do not guarantee any specific financial returns.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <p class="font-bold">2. Regulatory Compliance and Certification</p>
                        <ul class="list-disc pl-6 mt-1">
                            <li>Fusion X Technology operates in compliance with applicable regulatory guidelines and holds the necessary registrations and certifications, including NISM certification.</li>
                            <li>However, holding a registration or certification does not imply guaranteed profits or protection against market losses.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <p class="font-bold">3. Market Risks</p>
                        <ul class="list-disc pl-6 mt-1">
                            <li>Trading and investing in financial markets involve inherent risks, including but not limited to liquidity risk, volatility, regulatory changes, and economic factors.</li>
                            <li>Sudden market movements or unforeseen global events may impact investment outcomes, leading to potential losses.</li>
                            <li>Users should be aware that algorithmic trading does not eliminate risks but rather provides data-driven execution strategies.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <p class="font-bold">4. Risk Associated with Open Positions</p>
                        <ul class="list-disc pl-6 mt-1">
                            <li>Open positions in financial markets are subject to price fluctuations, and users must monitor them closely to mitigate potential losses.</li>
                            <li>Market conditions such as slippage, gaps, and sudden volatility can result in positions being liquidated at unfavorable prices.</li>
                            <li>It is the user's responsibility to manage risk by using stop-loss, hedging strategies, and proper position sizing.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <p class="font-bold">5. User Responsibility</p>
                        <ul class="list-disc pl-6 mt-1">
                            <li>The use of algorithmic trading involves potential risks, including technical failures and market volatility. Users should exercise their discretion before making any financial decisions.</li>
                            <li>It is recommended that users consult with financial advisors and assess their risk appetite before engaging in trading activities.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <p class="font-bold">6. Limitation of Liability</p>
                        <ul class="list-disc pl-6 mt-1">
                            <li>Fusion X Technology shall not be held responsible for any financial losses incurred as a result of using our platform or relying on our research.</li>
                            <li>Users acknowledge that all trading and investment decisions are made at their own risk.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <p class="font-bold">7. Amendments</p>
                        <ul class="list-disc pl-6 mt-1">
                            <li>This disclaimer is subject to change without prior notice. Users are encouraged to review it periodically.</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
</template>