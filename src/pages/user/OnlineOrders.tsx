import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Truck, Package, Clock, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import productsAPI from '@/api/products';

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
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

interface OrderStats {
  totalAmount: number;
  totalOrders: number;
  deliveredOrders: number;
  processingOrders: number;
}

const OnlineOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<OrderStats>({
    totalAmount: 0,
    totalOrders: 0,
    deliveredOrders: 0,
    processingOrders: 0
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getUserOrders();
      
      if (response.success) {
        const ordersData = response.data;
        setOrders(ordersData);
        
        // Calculate stats
        const totalAmount = ordersData.reduce((sum: number, order: Order) => sum + order.totalAmount, 0);
        const totalOrders = ordersData.length;
        const deliveredOrders = ordersData.filter((order: Order) => order.status === 'delivered').length;
        const processingOrders = ordersData.filter((order: Order) => 
          ['pending', 'confirmed', 'processing', 'shipped'].includes(order.status)
        ).length;
        
        setStats({
          totalAmount,
          totalOrders,
          deliveredOrders,
          processingOrders
        });
      }
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-500';
      case 'shipped': return 'bg-blue-500';
      case 'processing': return 'bg-yellow-500';
      case 'confirmed': return 'bg-purple-500';
      case 'pending': return 'bg-orange-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return <Package className="h-4 w-4" />;
      case 'shipped': return <Truck className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Globe className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">My Online Orders</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">₹{stats.totalAmount.toLocaleString()}</p>
            <p className="text-sm text-green-700">Total Orders Value</p>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{stats.totalOrders}</p>
            <p className="text-sm text-blue-700">Total Orders</p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{stats.deliveredOrders}</p>
            <p className="text-sm text-purple-700">Delivered</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{stats.processingOrders}</p>
            <p className="text-sm text-orange-700">Processing</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Order History</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="border-gray-200 animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                      </div>
                      <div className="h-8 bg-gray-200 rounded w-20"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No orders found</p>
              <p className="text-sm text-muted-foreground mt-2">Your orders will appear here once you make a purchase</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order._id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {getStatusIcon(order.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold">Order #{order.orderNumber}</h3>
                            <Badge 
                              className={`text-white ${getStatusColor(order.status)}`}
                            >
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">
                              Items: {order.items.map(item => `${item.productName} (${item.quantity})`).join(', ')}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                              </div>
                              {order.trackingNumber && (
                                <div className="flex items-center space-x-1">
                                  <Truck className="h-4 w-4" />
                                  <span>Tracking: {order.trackingNumber}</span>
                                </div>
                              )}
                              <Badge 
                                variant={order.paymentStatus === 'paid' ? 'default' : 'secondary'}
                                className={order.paymentStatus === 'paid' ? 'bg-green-600' : 'bg-orange-500'}
                              >
                                Payment: {order.paymentStatus}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-bold text-lg">₹{order.totalAmount.toLocaleString()}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          {order.trackingNumber && (
                            <Button size="sm" variant="outline">
                              <Truck className="h-4 w-4 mr-1" />
                              Track
                            </Button>
                          )}
                        </div>
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

export default OnlineOrders;
