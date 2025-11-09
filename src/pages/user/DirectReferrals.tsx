import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserPlus, TrendingUp } from 'lucide-react';

const DirectReferrals: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <UserPlus className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Direct Referrals</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-sm text-green-700">Total Direct Referrals</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">8</p>
            <p className="text-sm text-blue-700">Active This Month</p>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-6 text-center">
            <UserPlus className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">₹18,000</p>
            <p className="text-sm text-purple-700">Total Commissions</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Direct Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({length: 8}).map((_, i) => (
              <Card key={i} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Member {1000 + i}</h3>
                        <p className="text-sm text-gray-600">Joined: 2024-{10 + (i%2)}-{15 + i}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={i % 3 === 0 ? "bg-green-600" : i % 3 === 1 ? "bg-blue-600" : "bg-orange-500"}>
                        {i % 3 === 0 ? "Active" : i % 3 === 1 ? "Premium" : "Inactive"}
                      </Badge>
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

export default DirectReferrals;
