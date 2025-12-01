// const API_BASE_URL = 'http://localhost:5049';
const API_BASE_URL = 'https://api.mybyoliva.com';

export interface Package {
  _id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  benefits: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PackagesResponse {
  success: boolean;
  data: Package[];
  message?: string;
}

export const packagesAPI = {
  // Get all packages
  getPackages: async (): Promise<PackagesResponse> => {
    const response = await fetch(`${API_BASE_URL}/packages`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch packages');
    }
    
    return response.json();
  },

  // Get package by ID
  getPackageById: async (id: string): Promise<{ success: boolean; data: Package }> => {
    const response = await fetch(`${API_BASE_URL}/packages/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch package details');
    }
    
    return response.json();
  },

  // Purchase package
  purchasePackage: async (packageId: string) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/packages/${packageId}/purchase`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to purchase package');
    }
    
    return response.json();
  },
};

export default packagesAPI;

