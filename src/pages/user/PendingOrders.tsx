import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Package, AlertCircle } from 'lucide-react';

const PendingOrders: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Clock className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Pending Orders</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Orders Awaiting Processing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({length: 3}).map((_, i) => (
              <Card key={i} className="border-orange-200 bg-orange-50/50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-6 w-6 text-orange-600" />
                      <div>
                        <h3 className="font-semibold">Order #{2001 + i}</h3>
                        <p className="text-sm text-gray-600">Submitted: 2024-11-{20 + i}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹{(1500 + i * 300).toLocaleString()}</p>
                      <Badge className="bg-orange-500">Pending</Badge>
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

export default PendingOrders;
