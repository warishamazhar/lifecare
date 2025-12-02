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

export const rankRoyaltyAPI = {
  getMyStats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/rank-royalty/my-stats`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch rank & royalty bonus stats');
    }
  },

  getRanks: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/rank-royalty/ranks`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch ranks');
    }
  },

  getCompanySales: async (month?: number, year?: number) => {
    try {
      const params = new URLSearchParams();
      if (month) params.append('month', month.toString());
      if (year) params.append('year', year.toString());

      const response = await axios.get(`${API_BASE_URL}/rank-royalty/company-sales?${params.toString()}`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch company sales');
    }
  },
};

