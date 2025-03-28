import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest, baseApiUrl, authToken } from "@/requests/request";
import axios from "axios";

const useProfileStore = defineStore('profile', () => {


    const logged = ref(false);
    const url = ref(`${baseApiUrl.value}/user/profile`)
    const profileData = ref({});
    const isPopupOpen = ref(false)
    axios.defaults.withCredentials = true;
    
    const getProfile = async () => {
        if (authToken.value == '' || authToken.value == null) return;
        try {
            const res = await axios.get(url.value, { headers: { Authorization: authToken.value } });
            
            if (res.data) {
                profileData.value = res.data.data || {};
                
                logged.value = true
            }
            
        } catch (error) {
            console.log('error occured in profileStore', error);
            logged.value = false
        } 
        
    }

    getProfile();
    return { getProfile, profileData ,logged, isPopupOpen}

})

export default useProfileStore;