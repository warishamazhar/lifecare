import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, TrendingUp, Calendar, Target } from 'lucide-react';

const SelfRepurchase: React.FC = () => {
  const repurchaseHistory = [
    {
      date: '2024-11-01',
      amount: 2500,
      volume: 2500,
      status: 'Completed'
    },
    {
      date: '2024-10-01',
      amount: 2000,
      volume: 2000,
      status: 'Completed'
    },
    {
      date: '2024-09-01',
      amount: 1500,
      volume: 1500,
      status: 'Completed'
    }
  ];

  const totalRepurchase = repurchaseHistory.reduce((sum, item) => sum + item.amount, 0);
  const totalVolume = repurchaseHistory.reduce((sum, item) => sum + item.volume, 0);

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <RotateCcw className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Self Total Repurchase</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">₹{totalRepurchase.toLocaleString()}</p>
            <p className="text-sm text-green-700">Total Repurchase</p>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">{totalVolume.toLocaleString()}</p>
            <p className="text-sm text-blue-700">Total Volume</p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">{repurchaseHistory.length}</p>
            <p className="text-sm text-purple-700">Total Months</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-6 text-center">
            <RotateCcw className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">₹2,500</p>
            <p className="text-sm text-orange-700">Last Repurchase</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Repurchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {repurchaseHistory.map((item, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <RotateCcw className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Monthly Repurchase</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{item.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-bold">₹{item.amount.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Amount</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{item.volume.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Volume</p>
                      </div>
                      <Badge variant="default" className="bg-green-600">
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-blue-200 bg-blue-50/50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-800 mb-4">Repurchase Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Volume Benefits:</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Maintain active status</li>
                <li>• Qualify for bonuses</li>
                <li>• Team volume contribution</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Earning Benefits:</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Continue commission earnings</li>
                <li>• Rank maintenance</li>
                <li>• Leadership bonuses</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelfRepurchase;
