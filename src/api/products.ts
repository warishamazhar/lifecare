const API_BASE_URL = 'http://localhost:5049';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  features: string[];
  images: string[];
  inStock: boolean;
  pv?: number; // Product Value for MLM
  dp?: number; // Direct Price
  sp?: number; // Sale Price
  mrp?: number; // Maximum Retail Price
  createdBy?: string; // User ID who created the product
  createdByType?: 'admin' | 'user'; // Track if created by admin or user
  stock?: number; // Product stock
}

export interface ProductsResponse {
  success: boolean;
  data: Product[];
  message?: string;
}

export const productsAPI = {
  // Get all products
  getProducts: async (): Promise<ProductsResponse> => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return response.json();
  },

  // Get products by category
  getProductsByCategory: async (category: string): Promise<ProductsResponse> => {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products by category');
    }
    
    return response.json();
  },

  // Get single product by ID
  getProductById: async (id: string): Promise<{ success: boolean; data: Product }> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    
    return response.json();
  },

  // Create order (for authenticated users)
  createOrder: async (orderData: {
    products: { productId: string; quantity: number }[];
    totalAmount: number;
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create order');
    }
    
    return response.json();
  },

  // Create wallet order (pay with wallet)
  createWalletOrder: async (orderData: {
    items: { productId: string; quantity: number }[];
    shippingAddress: {
      fullName: string;
      address: string;
      city: string;
      state: string;
      pincode: string;
      phone: string;
    };
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/orders/wallet`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create wallet order');
    }
    
    return response.json();
  },

  // Get user orders
  getUserOrders: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/orders/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    
    return response.json();
  },

  // User product management endpoints
  createUserProduct: async (productData: {
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    category: string;
    features: string[];
    images: string[];
    stock: number;
    pv?: number;
    dp?: number;
    sp?: number;
    mrp?: number;
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/products/user`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create product');
    }
    
    return response.json();
  },

  getUserProducts: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/products/user/my-products`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch user products');
    }
    
    return response.json();
  },

  updateUserProduct: async (productId: string, productData: Partial<Product>) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/products/user/${productId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update product');
    }
    
    return response.json();
  },

  deleteUserProduct: async (productId: string) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/products/user/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete product');
    }
    
    return response.json();
  },

  // Get categories endpoint
  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return response.json();
  },
};

export default productsAPI;
