import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest, baseApiUrl, authToken } from "@/requests/request";
import axios from "axios";

const useProductsStore = defineStore('products', () => {

    const logged = ref(false);
    const url = ref(`${baseApiUrl.value}/user/subscriptions`)
    const products = ref([]);

    const getProducts = async () => {

        try {
            if (authToken.value == '' || authToken.value == null) return;
            const res = await axios.get(url.value, { headers: { Authorization: authToken.value } });
            
            if (res.data) {
                products.value = res.data.data || [];
                
                logged.value = true
            } else {
                products.value = [];
            }
            
        } catch (error) {
            products.value = [];
            console.log('error occured in productStore', error);
        } 
    }

    const isPurchased = (id) => {
       return products.value.some(prod => prod.product_id == id)
    }
    getProducts();
    return { getProducts, products ,logged , isPurchased}

})

export default useProductsStore;