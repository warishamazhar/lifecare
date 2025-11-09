import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Award, Download } from 'lucide-react';

const IncomeHistory: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Income History</h1>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">₹25,000</p>
            <p className="text-sm text-green-700">Total Earnings</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6 text-center">
            <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">₹3,500</p>
            <p className="text-sm text-blue-700">This Month</p>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">₹8,500</p>
            <p className="text-sm text-purple-700">Commissions</p>
          </CardContent>
        </Card>
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">₹5,500</p>
            <p className="text-sm text-orange-700">Bonuses</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Detailed Income Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({length: 8}).map((_, i) => (
              <Card key={i} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <DollarSign className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {i % 4 === 0 ? 'Direct Referral Commission' : 
                           i % 4 === 1 ? 'Binary Matching Bonus' : 
                           i % 4 === 2 ? 'Leadership Bonus' : 'Retail Profit'}
                        </h3>
                        <p className="text-sm text-gray-600">Nov {20 + i}, 2024 • From: Member {1000 + i}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-green-600">+₹{(500 + i * 150).toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Commission</p>
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

export default IncomeHistory;
