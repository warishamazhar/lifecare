// const API_BASE_URL = 'http://localhost:5049';
const API_BASE_URL = 'https://api.mybyoliva.com';

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  mobileNo: string;
  username: string;
  password: string;
  dateOfBirth?: string;
  gender?: string;
  referralCode?: string;
  position?: string;
  country?: string;
  state?: string;
  district?: string;
  city?: string;
  address?: string;
  pincode?: string;
  accountNo?: string;
  bankName?: string;
  branchName?: string;
  ifscCode?: string;
  pancard?: string;
  nomineeName?: string;
  relation?: string;
  age?: number;
  sponsorName?: string;
}

export const authAPI = {
  login: async (data: LoginData) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }
    
    return response.json();
  },

  register: async (data: RegisterData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }
    
    return response.json();
  },

  getDashboard: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/dashboard`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }
    
    return response.json();
  },

  getProfile: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    
    return response.json();
  },

  // Wallet endpoints
  getWalletBalance: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/wallet/balance`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch wallet balance');
    }
    
    return response.json();
  },

  createTopupRequest: async (data: {
    amount: number;
    screenshot: string;
    paymentMethod: 'bank' | 'upi';
    transactionId?: string;
    bankDetails?: any;
    upiDetails?: any;
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/wallet/topup/request`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create top-up request');
    }
    
    return response.json();
  },

  getTopupRequests: async (status?: string) => {
    const token = localStorage.getItem('token');
    const url = status ? `${API_BASE_URL}/wallet/topup/requests?status=${status}` : `${API_BASE_URL}/wallet/topup/requests`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch top-up requests');
    }
    
    return response.json();
  },

  checkSufficientBalance: async (amount: number, walletType = 'purchaseWallet') => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/wallet/check-balance/${amount}?walletType=${walletType}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to check balance');
    }
    
    return response.json();
  },

  // Direct Referrals
  getDirectReferrals: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/direct-referrals`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch direct referrals');
    }
    
    return response.json();
  },

  // Team Structure
  getTeamStructure: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-structure`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team structure');
    }
    
    return response.json();
  },

  // Income History
  getIncomeHistory: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/income-history`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch income history');
    }
    
    return response.json();
  },

  // Transactions
  getTransactions: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/transactions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    
    return response.json();
  },

  // Dashboard Stats (comprehensive)
  getDashboardStats: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/dashboard-stats`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard stats');
    }
    
    return response.json();
  },
};

export const { login, register, getDashboard: getDashboardStats, getProfile } = authAPI;
export default authAPI;
