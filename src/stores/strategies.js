import { ref } from 'vue';
import { defineStore } from 'pinia';
import { baseApiUrl } from "@/requests/request";
import axios from "axios";


export const useStrategiesStore = defineStore('strategies', () => {
  const authToken = localStorage.getItem('token')
  const endpoint = "plans"
  const cart = ref([]);
  const wait = 0
  const strategies = ref([]);
  const products = ref([]);
  const billingPeriod = ref("yearly");

  const stgEditorData = ref('')
  const url = ref(`${baseApiUrl.value}/user/web/products`)


  async function getStrategies() {
    try {
      
      const res = await axios.get(url.value, { headers: { Authorization: authToken } });
      const response = res.data || {}
      // console.log("print response", response)
      let data = response.data || []
      setProducts(data)

    } catch (error) {
      console.error('Error fetching strategies:', error);
      throw error;
    }
  }


  function addTimelyPrice(products) {
    return products.map(product => {
        const timely_price = {
            monthly: {
                price: product.price_monthly || 0,
                offer_price: product.offer_price_monthly || 0
            },
            quarterly: {
                price: product.price_quarterly || 0,
                offer_price: product.offer_price_quarterly || 0
            },
            half_yearly: {
                price: product.price_half_yearly || 0,
                offer_price: product.offer_price_half_yearly || 0
            },
            yearly: {
                price: product.price_yearly || 0,
                offer_price: product.offer_price_yearly || 0
            },
            lifetime: {
                price: product.price_lifetime || 0,
                offer_price: product.offer_price_lifetime || 0
            }
        };

        return { ...product, timely_price };
    });
}



  const setProducts = (data = []) => {
    let processedData = data.map(({ strategies, ...rest }) => rest);
    let temp = addTimelyPrice(processedData)
    products.value = temp;
  };

  getStrategies()
  return {
    strategies,
    getStrategies,
    products,
    billingPeriod,
    cart,
    stgEditorData,
    endpoint
  };
});