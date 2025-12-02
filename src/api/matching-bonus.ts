import axios from 'axios';

// const API_BASE_URL =  'http://localhost:5049';
const API_BASE_URL =  'https://api.mybyoliva.com';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const matchingBonusAPI = {
  getMyStats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/matching-bonus/my-stats`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch matching bonus stats');
    }
  },

  processMyBonus: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/matching-bonus/process`, {}, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to process matching bonus');
    }
  },
};

