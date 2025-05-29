import axios from "axios";

export const API_URL = "http://localhost:3000";

const $api = axios.create({
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
