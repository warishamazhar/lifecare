import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Calendar, Download, Filter } from 'lucide-react';

const PurchaseHistory: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Package className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Purchase History</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Purchase Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({length: 5}).map((_, i) => (
              <Card key={i} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Premium Package #{1001 + i}</h3>
                      <p className="text-sm text-gray-600">Date: 2024-{11-i}-{15+i}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹{(2500 + i * 500).toLocaleString()}</p>
                      <Badge className="bg-green-600">Completed</Badge>
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

export default PurchaseHistory;
