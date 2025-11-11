import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Calendar, Download, Filter, RefreshCw } from 'lucide-react';
import productsAPI from '@/api/products';
import { toast } from 'sonner';

interface Purchase {
  _id: string;
  orderNumber: string;
  items: {
    productName: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
}

const PurchaseHistory: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'completed' | 'processing' | 'cancelled'>('all');

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getUserOrders();
      
      if (response.success && response.data) {
        setPurchases(response.data || []);
      } else {
        setPurchases([]);
      }
    } catch (error: any) {
      console.error('Failed to load purchase history:', error);
      toast.error('Failed to load purchase history');
      setPurchases([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredPurchases = React.useMemo(() => {
    if (filter === 'all') return purchases;
    if (filter === 'completed') {
      return purchases.filter(p => p.status === 'delivered' || p.status === 'completed');
    }
    if (filter === 'processing') {
      return purchases.filter(p => 
        ['pending', 'confirmed', 'processing', 'shipped'].includes(p.status)
      );
    }
    if (filter === 'cancelled') {
      return purchases.filter(p => p.status === 'cancelled');
    }
    return purchases;
  }, [purchases, filter]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
      case 'completed':
        return 'bg-green-600';
      case 'shipped':
        return 'bg-blue-600';
      case 'processing':
      case 'confirmed':
        return 'bg-yellow-500';
      case 'pending':
        return 'bg-orange-500';
      case 'cancelled':
        return 'bg-red-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Package className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Purchase History</h1>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-primary text-white' : ''}
          >
            All
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'bg-green-600 text-white' : ''}
          >
            Completed
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setFilter('processing')}
            className={filter === 'processing' ? 'bg-orange-500 text-white' : ''}
          >
            Processing
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setFilter('cancelled')}
            className={filter === 'cancelled' ? 'bg-red-600 text-white' : ''}
          >
            Cancelled
          </Button>
          <Button variant="outline" onClick={fetchPurchases} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Purchase Records ({filteredPurchases.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="border-gray-200 animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-48"></div>
                        <div className="h-3 bg-gray-200 rounded w-32"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 bg-gray-200 rounded w-24"></div>
                        <div className="h-5 bg-gray-200 rounded w-20"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPurchases.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-medium">No purchase records found</p>
              <p className="text-sm">Your purchase history will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPurchases.map((purchase) => (
                <Card key={purchase._id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="font-semibold">Order #{purchase.orderNumber}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {purchase.items.map(item => `${item.productName} (Qty: ${item.quantity})`).join(', ')}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(purchase.createdAt).toLocaleDateString('en-IN')}</span>
                          </div>
                          <Badge 
                            variant={purchase.paymentStatus === 'paid' ? 'default' : 'secondary'}
                            className={purchase.paymentStatus === 'paid' ? 'bg-green-600' : 'bg-orange-500'}
                          >
                            Payment: {purchase.paymentStatus}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="font-bold text-lg">₹{purchase.totalAmount.toLocaleString()}</p>
                        <Badge className={`text-white ${getStatusColor(purchase.status)}`}>
                          {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseHistory;