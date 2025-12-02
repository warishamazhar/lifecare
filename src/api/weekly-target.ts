import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5049';
const API_BASE_URL = 'https://api.mybyoliva.com';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const weeklyTargetAPI = {
  getMyStatus: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/weekly-target/my-status`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch weekly target status');
    }
  },

  getCurrent: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/weekly-target/current`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch current weekly target');
    }
  },
};

