import { ref, reactive } from 'vue';
import axios from 'axios';

const state = reactive({});
const authToken = ref('');

authToken.value = localStorage.getItem('token')

const baseUrl = ref("http://localhost:3008");
// const baseApiUrl = ref("https://app.matrixtradingtech.com");
const baseApiUrl = ref("https://vlqf88cf-8082.inc1.devtunnels.ms");

const endpoints = ref({
  blogs: '/api/blogs',
  indicator: '/api/indicators',
  indicatorCategory: '/api/indicator-category'
});

const setToken = (token) => {
  authToken.value = token;
};

const getApiUrl = (endpoint, id) => `${baseUrl.value}${endpoints.value[endpoint] || ''}${id ? `/${id}` : ''}`;

const createStateForEndpoint = (endpoint) => {
  if (!state[endpoint]) {
    state[endpoint] = { loading: true, data: null, error: null };
  } else {
    state[endpoint].loading = true;
  }
};

const handleApiResponse = (response, endpoint) => {
  if (response.status === 200) {
    state[endpoint].data = response.data;
    state[endpoint].error = null;
    return response.data;
  }
};

const handleApiError = (error, endpoint) => {
  state[endpoint].error = error.response || { statusText: error.message };
  state[endpoint].loading = false;
  return null;
};

const makeRequest = async (endpoint, params = {}, id = null) => {
  createStateForEndpoint(endpoint);
  try {
    const url = getApiUrl(endpoint, id);
   
    const response = await axios.get(url, { params });
    return handleApiResponse(response, endpoint);
  } catch (error) {
    return handleApiError(error, endpoint);
  } finally {
    state[endpoint].loading = false;
  }
};

export { makeRequest, state, baseApiUrl, setToken, authToken };