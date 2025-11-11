import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Package, AlertCircle, RefreshCw, Eye } from 'lucide-react';
import productsAPI from '@/api/products';
import { toast } from 'sonner';

interface Order {
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

const PendingOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  const fetchPendingOrders = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getUserOrders();
      
      if (response.success && response.data) {
        // Filter only pending/processing orders
        const pendingOrders = (response.data || []).filter((order: Order) => 
          ['pending', 'confirmed', 'processing', 'shipped'].includes(order.status.toLowerCase())
        );
        setOrders(pendingOrders);
      } else {
        setOrders([]);
      }
    } catch (error: any) {
      console.error('Failed to load pending orders:', error);
      toast.error('Failed to load pending orders');
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-orange-500';
      case 'confirmed':
        return 'bg-purple-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'shipped':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Clock className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Pending Orders</h1>
        </div>
        <Button variant="outline" onClick={fetchPendingOrders} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Orders Awaiting Processing ({orders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="border-gray-200 animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-48"></div>
                        <div className="h-3 bg-gray-200 rounded w-32"></div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-24"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-medium">No pending orders</p>
              <p className="text-sm mt-2">All your orders are being processed or completed</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order._id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">Order #{order.orderNumber}</h3>
                          <Badge className={`text-white ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {order.items.map(item => `${item.productName} (${item.quantity})`).join(', ')}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Ordered on: {new Date(order.createdAt).toLocaleDateString('en-IN')}
                        </p>
                        {order.paymentStatus !== 'paid' && (
                          <div className="flex items-center space-x-1 mt-2">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                            <span className="text-xs text-orange-600">
                              Payment Status: {order.paymentStatus}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right space-y-2">
                        <p className="font-bold text-lg">₹{order.totalAmount.toLocaleString()}</p>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
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

export default PendingOrders;