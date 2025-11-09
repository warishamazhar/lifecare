import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Star, Crown } from 'lucide-react';

const Upgrade: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <TrendingUp className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Upgrade Package</h1>
      </div>
      
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Upgrade Your Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div>
              <p className="font-semibold text-blue-800">Current Package</p>
              <p className="text-blue-600">Starter Package - ₹2,500</p>
            </div>
            <Badge variant="outline" className="bg-blue-100 text-blue-700">Active</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-orange-200 bg-orange-50/50">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-orange-700 mb-2">Premium Upgrade</h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">₹2,500</p>
                <p className="text-sm text-orange-600 mb-4">Upgrade from Starter to Premium</p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6 text-center">
                <Crown className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Elite Upgrade</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">₹7,500</p>
                <p className="text-sm text-purple-600 mb-4">Upgrade from Starter to Elite</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Upgrade Benefits:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Higher commission rates</li>
              <li>• Access to premium products</li>
              <li>• Enhanced earning potential</li>
              <li>• Priority customer support</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Upgrade;
