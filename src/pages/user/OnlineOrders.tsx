import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Truck, Package, Clock } from 'lucide-react';

const OnlineOrders: React.FC = () => {
  const orders = [
    {
      id: 'ORD001',
      date: '2024-11-20',
      items: ['Herbal Tea Pack', 'Wellness Capsules'],
      amount: 2500,
      status: 'Shipped',
      tracking: 'TRK123456789'
    },
    {
      id: 'ORD002',
      date: '2024-11-18', 
      items: ['Daily Vitamins', 'Protein Powder'],
      amount: 3200,
      status: 'Processing',
      tracking: null
    },
    {
      id: 'ORD003',
      date: '2024-11-15',
      items: ['Immunity Booster'],
      amount: 1800,
      status: 'Delivered',
      tracking: 'TRK987654321'
    }
  ];

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Globe className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">My Online Orders</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">₹7,500</p>
            <p className="text-sm text-green-700">Total Orders</p>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">3</p>
            <p className="text-sm text-blue-700">Active Orders</p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">1</p>
            <p className="text-sm text-purple-700">Delivered</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">1</p>
            <p className="text-sm text-orange-700">In Transit</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Package className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">Order #{order.id}</h3>
                          <Badge 
                            variant={
                              order.status === 'Delivered' ? 'default' : 
                              order.status === 'Shipped' ? 'secondary' : 'outline'
                            }
                            className={
                              order.status === 'Delivered' ? 'bg-green-600' :
                              order.status === 'Shipped' ? 'bg-blue-600' : 'bg-orange-500'
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            Items: {order.items.join(', ')}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{order.date}</span>
                            </div>
                            {order.tracking && (
                              <div className="flex items-center space-x-1">
                                <Truck className="h-4 w-4" />
                                <span>Tracking: {order.tracking}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">₹{order.amount.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        {order.tracking && (
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
        </CardContent>
      </Card>
    </div>
  );
};

export default OnlineOrders;
