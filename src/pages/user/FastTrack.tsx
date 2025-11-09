import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Rocket, Target, Star } from 'lucide-react';

const FastTrack: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Zap className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Fast Track</h1>
      </div>
      
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Accelerate Your Success</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Fast track your way to higher rankings and increased earnings with our accelerated programs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-orange-200 bg-orange-50/50">
              <CardContent className="p-6">
                <Rocket className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold text-orange-700 mb-2">Quick Start Program</h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">₹15,000</p>
                <ul className="text-sm text-orange-700 space-y-2 mb-4">
                  <li>• Instant Bronze ranking</li>
                  <li>• 30-day mentorship</li>
                  <li>• Marketing materials</li>
                  <li>• Training sessions</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Rocket className="h-4 w-4 mr-2" />
                  Join Quick Start
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Elite Fast Track</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">₹50,000</p>
                <ul className="text-sm text-purple-700 space-y-2 mb-4">
                  <li>• Instant Silver ranking</li>
                  <li>• 90-day personal coach</li>
                  <li>• Premium product kit</li>
                  <li>• VIP support access</li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Star className="h-4 w-4 mr-2" />
                  Join Elite Track
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Fast Ranking</h4>
                <p className="text-green-700 text-sm">Achieve higher ranks in weeks, not months</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-blue-800 mb-2">Expert Mentorship</h4>
                <p className="text-blue-700 text-sm">Learn from top performers in the industry</p>
              </CardContent>
            </Card>
            
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-yellow-800 mb-2">Premium Resources</h4>
                <p className="text-yellow-700 text-sm">Access exclusive tools and materials</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FastTrack;
