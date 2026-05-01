import axios from 'axios';

const isDev = import.meta.env.DEV;

const weatherClient = axios.create({
  baseURL: isDev ? '/api' : import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

export default weatherClient;
