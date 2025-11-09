import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Package, Clock } from 'lucide-react';

const MonthlyPurchase: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Calendar className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Monthly Purchase</h1>
      </div>
      
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Monthly Subscription Plans</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div>
              <p className="font-semibold text-blue-800">Next Monthly Purchase</p>
              <p className="text-blue-600">Due: December 15, 2024</p>
            </div>
            <Badge variant="outline" className="bg-orange-100 text-orange-700">Pending</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-700 mb-2">Basic Monthly</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">₹500</p>
                <p className="text-sm text-green-600 mb-4">per month</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Clock className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Standard Monthly</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">₹1,000</p>
                <p className="text-sm text-blue-600 mb-4">per month</p>
                <Button className="w-full bg-blue-600 hover:blue-green-700">
                  <Clock className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Premium Monthly</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">₹2,000</p>
                <p className="text-sm text-purple-600 mb-4">per month</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Clock className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 space-y-4">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-800 mb-2">Monthly Purchase Benefits:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Automatic monthly qualification</li>
                  <li>• Consistent product supply</li>
                  <li>• Volume-based bonuses</li>
                  <li>• Convenient auto-delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyPurchase;
