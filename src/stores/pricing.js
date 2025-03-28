import axios from "axios";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { baseApiUrl } from "@/requests/request";

export const usePricingStore = defineStore('pricing', () => {
    const authToken = localStorage.getItem('token');
    const url = ref(`${baseApiUrl.value}/user/web/products`);
    const billingPeriod = ref('yearly');

    // Store raw response data
    const rawPlans = ref([]);

    // Helper function for parsing features
    const parseFeatures = (description) => {
        try {
            return JSON.parse(description) || [];
        } catch {
            return [];
        }
    };

    // Reactive refs for filtered data by category
    const webhook = ref([]);
    const signals = ref([]);
    const screener = ref([]);
    const indicators = ref([]);
    const matrixOne = ref({});
    const matrixAlgo = ref([]); // ✅ Ensure matrixAlgo is an array
    const matrixEdge = ref([]);

    // Main pricing structure refs
    const activePlan = ref(null);
    const packages = ref('monthly');

    // Function to update pricing data based on billingPeriod
    const updatePricingData = () => {
        webhook.value = rawPlans.value.filter(plan =>
            plan.category_name === 'webhook' &&
            plan.price_type === billingPeriod.value
        );

        signals.value = rawPlans.value.filter(plan =>
            plan.category_name === 'signals' &&
            plan.price_type === billingPeriod.value
        );

        screener.value = rawPlans.value.filter(plan =>
            plan.category_name === 'screener' &&
            plan.price_type === billingPeriod.value
        );

        indicators.value = rawPlans.value.filter(plan =>
            plan.category_name === 'indicator' &&
            plan.price_type === billingPeriod.value
        );

        matrixAlgo.value = rawPlans.value.filter(plan =>
            plan.base_category_name === 'Matrix ALGO' &&
            plan.price_type === billingPeriod.value
        );
    };

    // Watch for changes in billingPeriod
    watch(billingPeriod, () => {
        updatePricingData();
    });

    // Fetch and initialize data
    const getPricing = async () => {
        if (!authToken) return;

        try {
            const res = await axios.get(url.value, { headers: { Authorization: authToken } });
            rawPlans.value = res.data.data;
            
            // Store all Matrix ALGO data in the array
            
            matrixAlgo.value = rawPlans.value.filter(plan =>
                plan.base_category_name === 'Matrix ALGO'
            );
            // console.log(matrixAlgo.value);

            // Update all pricing data based on billingPeriod
            //updatePricingData();
        } catch (error) {
            console.error('Error fetching pricing data:', error);
        }
    };

    getPricing();

    return {
        rawPlans,
        activePlan,
        packages,
        matrixOne,
        matrixAlgo, // ✅ Now contains an array of Matrix ALGO data
        matrixEdge,
        webhook,
        signals,
        screener,
        indicators,
        billingPeriod
    };
});


