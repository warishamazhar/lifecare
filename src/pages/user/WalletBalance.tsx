import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const WalletBalance: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Wallet className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Wallet Balance</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-green-800">Purchase Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">₹5,000</p>
            <div className="flex items-center space-x-2 mt-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                Add Money
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-800">Commission Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">₹2,500</p>
            <div className="flex items-center space-x-2 mt-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-purple-800">Referral Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">₹1,500</p>
            <div className="flex items-center space-x-2 mt-2">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <TrendingUp className="h-4 w-4 mr-1" />
                Transfer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Balance Changes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({length: 5}).map((_, i) => (
              <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{i % 2 === 0 ? 'Commission Credit' : 'Purchase Debit'}</p>
                  <p className="text-sm text-gray-600">Nov {20 + i}, 2024</p>
                </div>
                <p className={`font-bold ${i % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {i % 2 === 0 ? '+' : '-'}₹{(500 + i * 100).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletBalance;
