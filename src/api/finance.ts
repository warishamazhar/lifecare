// const API_BASE_URL = 'http://localhost:5049';
const API_BASE_URL = 'https://api.mybyoliva.com';

export interface Withdrawal {
  _id: string;
  userId: string;
  amount: number;
  walletType: 'earnedWallet' | 'referralWallet';
  withdrawalMethod: 'bank' | 'upi' | 'wallet';
  accountDetails: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWithdrawalDto {
  amount: number;
  walletType: 'earnedWallet' | 'referralWallet';
  withdrawalMethod: 'bank' | 'upi' | 'wallet';
  accountDetails: string;
}

export const financeAPI = {
  // Create withdrawal request
  createWithdrawal: async (data: CreateWithdrawalDto) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/finance/withdrawals`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create withdrawal request');
    }
    
    return response.json();
  },

  // Get user's withdrawals
  getUserWithdrawals: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/finance/withdrawals/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch withdrawals');
    }
    
    return response.json();
  },
};

export default financeAPI;

