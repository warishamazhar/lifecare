// const API_BASE_URL = 'http://localhost:5049';
const API_BASE_URL = 'https://api.mybyoliva.com';

export interface PaymentSettings {
  _id?: string;
  bankName?: string;
  accountNumber?: string;
  ifscCode?: string;
  accountHolderName?: string;
  upiId?: string;
  upiQrCode?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface PaymentSettingsResponse {
  success: boolean;
  data: PaymentSettings;
  message?: string;
}

export const paymentSettingsAPI = {
  // Get payment settings (public endpoint)
  getPaymentSettings: async (): Promise<PaymentSettingsResponse> => {
    const response = await fetch(`${API_BASE_URL}/payment-settings`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch payment settings');
    }
    
    return response.json();
  },
};

export default paymentSettingsAPI;
