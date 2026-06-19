import axios from "axios";
export const baseURL = "https://ranadeepreddyshyamakura.info/api";
const api = axios.create({
  baseURL: baseURL, // Replace with your backend API
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
