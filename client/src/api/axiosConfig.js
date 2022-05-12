import axios from 'axios';
import { toast } from 'react-toastify';

function getToken() {
  if (localStorage.getItem('token')) {
    const accessToken = localStorage.getItem('token') || '';
    return accessToken;
  }
  return '';
}

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache',
  },
});

instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;

    return config;
  },
  (error) => {
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      toast.success(response.data.message);
    }

    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.reload();
    }

    if (error.response?.data?.length > 0) {
      error.response?.data.forEach((message) => toast.error(message));
    } else if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else if (error.message) {
      toast.error(error.message);
    } else if (error.response?.data?.error) {
      toast.error(error.response.data.error);
    }

    throw error;
  }
);

export default instance;
