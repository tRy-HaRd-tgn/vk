import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest.isRetry = true;
    }
    return Promise.reject(error);
  }
);
export default $api;
