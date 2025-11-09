import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ChevronDown, ChevronRight } from 'lucide-react';

const TeamStructure: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Users className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Team Structure</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Binary Tree Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Root User */}
            <div className="text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary">YOU</h3>
                <p className="text-sm text-gray-600">Main Account</p>
              </div>
            </div>
            
            {/* Level 1 */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800">LEFT TEAM</h4>
                  <p className="text-2xl font-bold text-green-600">25</p>
                  <p className="text-sm text-green-700">Members</p>
                </div>
              </div>
              <div className="text-center">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800">RIGHT TEAM</h4>
                  <p className="text-2xl font-bold text-blue-600">18</p>
                  <p className="text-sm text-blue-700">Members</p>
                </div>
              </div>
            </div>
            
            {/* Expandable Tree View */}
            <div className="grid grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ChevronDown className="h-4 w-4" />
                        <span className="font-medium">Member A001</span>
                      </div>
                      <span className="text-sm text-green-600">12 sub-members</span>
                    </div>
                    <div className="ml-6 space-y-2">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-sm">Member A001-L</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-sm">Member A001-R</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ChevronDown className="h-4 w-4" />
                        <span className="font-medium">Member B001</span>
                      </div>
                      <span className="text-sm text-blue-600">8 sub-members</span>
                    </div>
                    <div className="ml-6 space-y-2">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-sm">Member B001-L</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-sm">Member B001-R</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamStructure;
