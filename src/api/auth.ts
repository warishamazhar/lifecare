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

  // My Team
  getMyTeam: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/my-team`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch my team');
    }
    
    return response.json();
  },

  // Direct Team
  getDirectTeam: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/direct-team`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch direct team');
    }
    
    return response.json();
  },

  // Team Report
  getTeamReport: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-report`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team report');
    }
    
    return response.json();
  },

  // Team Performance
  getTeamPerformance: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-performance`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team performance');
    }
    
    return response.json();
  },

  // Team Sales
  getTeamSales: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-sales`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team sales');
    }
    
    return response.json();
  },

  // Team Income
  getTeamIncome: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-income`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team income');
    }
    
    return response.json();
  },

  // Team Bonus
  getTeamBonus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-bonus`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team bonus');
    }
    
    return response.json();
  },

  // Team Rank
  getTeamRank: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-rank`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team rank');
    }
    
    return response.json();
  },

  // Team Status
  getTeamStatus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/team-status`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch team status');
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

  // Update Profile
  updateProfile: async (data: {
    name?: string;
    email?: string;
    mobileNo?: string;
    dateOfBirth?: string;
    gender?: string;
    address?: any;
    bankDetails?: any;
    nomineeDetails?: any;
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update profile');
    }
    
    return response.json();
  },

  // Change Password
  changePassword: async (data: {
    currentPassword: string;
    newPassword: string;
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to change password');
    }
    
    return response.json();
  },

  // Get User Settings
  getUserSettings: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/settings`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch user settings');
    }
    
    return response.json();
  },

  // Update User Settings
  updateUserSettings: async (settings: {
    emailNotifications?: boolean;
    smsNotifications?: boolean;
    marketingEmails?: boolean;
    twoFactorAuth?: boolean;
    profileVisibility?: 'public' | 'private';
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/settings`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update settings');
    }
    
    return response.json();
  },

  // Bonus APIs
  getMatchingBonus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/matching-bonus`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch matching bonus');
    }
    return response.json();
  },

  getWelcomeBonus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/welcome-bonus`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch welcome bonus');
    }
    return response.json();
  },

  getAdditionalBonus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/additional-bonus`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch additional bonus');
    }
    return response.json();
  },

  getRoyaltyBonus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/royalty-bonus`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch royalty bonus');
    }
    return response.json();
  },

  getMentorshipBonus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/mentorship-bonus`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch mentorship bonus');
    }
    return response.json();
  },

  getCashback: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/cashback`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch cashback');
    }
    return response.json();
  },

  getRewards: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/rewards`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch rewards');
    }
    return response.json();
  },

  getMonthlyPurchaseBonus: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/income/monthly-purchase-bonus`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch monthly purchase bonus');
    }
    return response.json();
  },

  getRankSummary: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/users/rank-summary`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch rank summary');
    }
    return response.json();
  },
};

export const { login, register, getDashboard: getDashboardStats, getProfile } = authAPI;
export default authAPI;
