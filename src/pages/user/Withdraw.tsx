import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowDownRight, CreditCard, Banknote } from 'lucide-react';

const Withdraw: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <ArrowDownRight className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Withdraw Funds</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Withdrawal Request</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wallet">Select Wallet</Label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="commission">Commission Wallet (₹2,500)</option>
                <option value="referral">Referral Wallet (₹1,500)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Withdrawal Amount</Label>
              <Input id="amount" type="number" placeholder="Enter amount" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="method">Withdrawal Method</Label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="bank">Bank Transfer</option>
                <option value="upi">UPI</option>
                <option value="wallet">Digital Wallet</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="account">Account Details</Label>
              <Input id="account" placeholder="Account number or UPI ID" />
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary-dark">
              <ArrowDownRight className="h-4 w-4 mr-2" />
              Request Withdrawal
            </Button>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700">Available Balance</p>
                  <p className="text-2xl font-bold text-green-600">₹4,000</p>
                </div>
                <Banknote className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Withdrawal History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Array.from({length: 4}).map((_, i) => (
                  <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">₹{(1000 + i * 500).toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Nov {15 + i}, 2024</p>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      i % 3 === 0 ? 'bg-green-100 text-green-800' :
                      i % 3 === 1 ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'Processing' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
