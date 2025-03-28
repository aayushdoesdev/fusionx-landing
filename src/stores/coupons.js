import { ref } from 'vue';
import { defineStore } from 'pinia';
import { makeRequest } from "@/requests/request";

export const useCouponStore = defineStore('coupon', () => {
    const endpoint = 'coupons';
    const couponError = ref([]);
    
    // Store discounts as an array of objects [{ product_id: 46, discount: 100 }]
    const couponDiscounts = ref([]);
    const couponCode = ref([])

    async function getCoupons(formdata) {
        try {
            if (formdata) {
                const response = await makeRequest(endpoint, "POST", formdata, {}, {}, 0, null);
                
                if (response.data && response.data.offer) {
                    // Convert product_id to number for consistent data
                    const productId = Number(formdata.plan_id);
                    const discountAmount = response.data.offer?.discount_amount || 0;

                    // Check if product already exists in the array, update if found
                    const existingIndex = couponDiscounts.value.findIndex(coupon => coupon.product_id === productId);
                    if (existingIndex !== -1) {
                        couponDiscounts.value[existingIndex].discount = discountAmount;
                    } else {
                        // Otherwise, add a new entry
                        couponDiscounts.value.push({ product_id: productId, discount: discountAmount });
                    }
                } else {
                    // If no offer is found, store discount as 0
                    couponDiscounts.value.push({ product_id: Number(formdata.plan_id), discount: 0 });
                }
            }
        } catch (error) {
            console.error('Error fetching coupon:', error);
            couponError.value = "Failed to fetch coupon details.";
        }
    }

    return {
        getCoupons,
        couponDiscounts, // Expose the stored discounts as an array
        couponError,
        couponCode
    };
});
