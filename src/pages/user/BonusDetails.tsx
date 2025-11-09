import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Gift, Star, Trophy } from 'lucide-react';

const BonusDetails: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Award className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Bonus Details</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">₹12,500</p>
            <p className="text-sm text-purple-700">Matching Bonus</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6 text-center">
            <Gift className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">₹8,750</p>
            <p className="text-sm text-green-700">Welcome Bonus</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">₹5,000</p>
            <p className="text-sm text-blue-700">Leadership Bonus</p>
          </CardContent>
        </Card>
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">₹15,000</p>
            <p className="text-sm text-orange-700">Achievement Bonus</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Bonus Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: 'Binary Matching Bonus', amount: 2500, date: 'Nov 20, 2024', description: 'Weekly binary matching for left-right balance' },
              { type: 'Direct Referral Bonus', amount: 1500, date: 'Nov 18, 2024', description: 'Bonus for direct team member activation' },
              { type: 'Leadership Bonus', amount: 3000, date: 'Nov 15, 2024', description: 'Monthly leadership performance bonus' },
              { type: 'Rank Achievement Bonus', amount: 5000, date: 'Nov 10, 2024', description: 'Silver rank achievement milestone' },
              { type: 'Team Volume Bonus', amount: 1800, date: 'Nov 8, 2024', description: 'Team volume milestone achievement' },
            ].map((bonus, i) => (
              <Card key={i} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{bonus.type}</h3>
                        <p className="text-sm text-gray-600">{bonus.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{bonus.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-purple-600">+₹{bonus.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Bonus</p>
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

export default BonusDetails;
