import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Calendar, Eye, Download } from 'lucide-react';

const MyPurchase: React.FC = () => {
  const purchases = [
    {
      id: 'PUR001',
      date: '2024-11-15',
      package: 'Premium Package',
      amount: 5000,
      status: 'Completed',
      type: 'First Purchase'
    },
    {
      id: 'PUR002', 
      date: '2024-10-20',
      package: 'Monthly Standard',
      amount: 1000,
      status: 'Completed',
      type: 'Monthly Purchase'
    },
    {
      id: 'PUR003',
      date: '2024-09-25',
      package: 'Repurchase Basic',
      amount: 1000,
      status: 'Processing',
      type: 'Re Purchase'
    }
  ];

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Package className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">My Purchases</h1>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">₹7,000</p>
            <p className="text-sm text-green-700">Total Purchases</p>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">3</p>
            <p className="text-sm text-blue-700">Total Orders</p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">2</p>
            <p className="text-sm text-purple-700">Completed</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">1</p>
            <p className="text-sm text-orange-700">Processing</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {purchases.map((purchase) => (
              <Card key={purchase.id} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Package className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{purchase.package}</h3>
                        <p className="text-sm text-muted-foreground">
                          {purchase.type} • Order #{purchase.id}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{purchase.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">₹{purchase.amount.toLocaleString()}</p>
                        <Badge 
                          variant={purchase.status === 'Completed' ? 'default' : 'secondary'}
                          className={purchase.status === 'Completed' ? 'bg-green-600' : 'bg-orange-500'}
                        >
                          {purchase.status}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
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

export default MyPurchase;
