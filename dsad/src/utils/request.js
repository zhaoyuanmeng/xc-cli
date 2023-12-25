import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 7000, // request timeout
});

service.interceptors.request.use((config) => {
  return config;
});

service.interceptors.response.use((response) => {
  return response.data;
});

export default service;
