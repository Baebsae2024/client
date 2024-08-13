import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  });

  return instance;
};

export const baseAPI = axiosInstance();
