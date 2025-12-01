const API_BASE_URL = 'https://api.mybyoliva.com';
// const API_BASE_URL = 'http://localhost:5049';

export interface KycDocument {
  _id: string;
  userId: {
    _id: string;
    name: string;
    email: string;
    mobileNo: string;
    username?: string;
  };
  aadharFront: string | null;
  aadharBack: string | null;
  aadharNumber: string | null;
  panCard: string | null;
  panNumber: string | null;
  profileImage: string | null;
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: {
    _id: string;
    name: string;
    email: string;
  };
  reviewedAt?: string;
  rejectionReason?: string;
  adminNotes?: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface KycSubmissionData {
  aadharNumber?: string;
  panNumber?: string;
}

export interface UpdateKycStatusData {
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  adminNotes?: string;
}

export interface KycStats {
  pending: number;
  approved: number;
  rejected: number;
  total: number;
}

export const kycAPI = {
  // User: Upload KYC documents
  uploadDocuments: async (formData: FormData): Promise<{ success: boolean; message: string; data: KycDocument }> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/kyc/upload-documents`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        // Don't set Content-Type, let browser set it with boundary for FormData
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to upload KYC documents');
    }

    return response.json();
  },

  // User: Get KYC status
  getKycStatus: async (): Promise<{ success: boolean; data: KycDocument | null }> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/kyc/status`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch KYC status');
    }

    return response.json();
  },

  // Admin: Get all KYC requests
  getAllKyc: async (
    status?: string,
    page: number = 1,
    limit: number = 20
  ): Promise<{
    success: boolean;
    data: {
      kycList: KycDocument[];
      pagination: {
        total: number;
        page: number;
        limit: number;
        pages: number;
      };
    };
  }> => {
    const token = localStorage.getItem('token');
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    const response = await fetch(`${API_BASE_URL}/kyc/admin/all?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch KYC requests');
    }

    return response.json();
  },

  // Admin: Get KYC by ID
  getKycById: async (kycId: string): Promise<{ success: boolean; data: KycDocument }> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/kyc/admin/${kycId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch KYC details');
    }

    return response.json();
  },

  // Admin: Update KYC status
  updateKycStatus: async (
    kycId: string,
    data: UpdateKycStatusData
  ): Promise<{ success: boolean; message: string; data: KycDocument }> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/kyc/admin/${kycId}/status`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update KYC status');
    }

    return response.json();
  },

  // Admin: Get KYC statistics
  getKycStats: async (): Promise<{ success: boolean; data: KycStats }> => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/kyc/admin/stats`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch KYC statistics');
    }

    return response.json();
  },
};

export default kycAPI;

