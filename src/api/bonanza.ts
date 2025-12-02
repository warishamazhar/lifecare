// const API_BASE_URL = 'http://localhost:5049';
const API_BASE_URL = 'https://api.mybyoliva.com';

export interface MonthlyBonanza {
  _id: string;
  month: number;
  year: number;
  title: string;
  description?: string;
  isActive: boolean;
  startDate?: Date;
  endDate?: Date;
  minimumRepurchaseAmount: number;
  requiredBV: number;
  gift: {
    type: 'product' | 'cash' | 'discount';
    productId?: string;
    productName?: string;
    cashAmount?: number;
    discountPercentage?: number;
    description?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface BonanzaResponse {
  success: boolean;
  data: MonthlyBonanza | MonthlyBonanza[] | null;
  message?: string;
}

export const bonanzaAPI = {
  // Get current month's bonanza
  getCurrentBonanza: async (): Promise<BonanzaResponse> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/bonanza/current`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch current bonanza');
    }
    
    return response.json();
  },
};

export default bonanzaAPI;

