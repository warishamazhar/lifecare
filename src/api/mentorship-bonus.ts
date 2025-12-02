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

export const mentorshipBonusAPI = {
  getMyStats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/mentorship-bonus/my-stats`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch mentorship bonus stats');
    }
  },
};

