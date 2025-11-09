import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, CreditCard } from 'lucide-react';

const FirstPurchase: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <ShoppingCart className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">First Purchase</h1>
      </div>
      
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Make Your First Purchase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Welcome to Byoliva! Complete your first purchase to activate your account and start earning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-700 mb-2">Starter Package</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">₹2,500</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Purchase Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Premium Package</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">₹5,000</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Purchase Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Elite Package</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">₹10,000</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Purchase Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
            <p className="text-yellow-700 text-sm">
              Your first purchase activates your account and qualifies you for the compensation plan. 
              Choose the package that best fits your goals and budget.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FirstPurchase;
