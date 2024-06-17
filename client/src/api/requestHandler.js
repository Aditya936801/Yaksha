import axios from 'axios';
import { get } from 'lodash-es';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = false;

const Api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your API base URL
  timeout: 10000, // Timeout after 10 seconds
});

Api.interceptors.response.use((response) => {
  const responseData = get(response, 'data.data', {});
  console.log("responseData is",responseData);
  return responseData;
});

export default Api;
