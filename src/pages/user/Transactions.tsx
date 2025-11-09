import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, ArrowUpRight, ArrowDownRight, Filter, Download } from 'lucide-react';

const Transactions: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CreditCard className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Transactions</h1>
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
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({length: 10}).map((_, i) => (
              <Card key={i} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${i % 2 === 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                        {i % 2 === 0 ? 
                          <ArrowUpRight className="h-6 w-6 text-green-600" /> : 
                          <ArrowDownRight className="h-6 w-6 text-red-600" />
                        }
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {i % 3 === 0 ? 'Commission Credit' : i % 3 === 1 ? 'Purchase Debit' : 'Withdrawal'}
                        </h3>
                        <p className="text-sm text-gray-600">TXN#{1000 + i} • Nov {20 + i % 10}, 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-lg ${i % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {i % 2 === 0 ? '+' : '-'}₹{(1000 + i * 250).toLocaleString()}
                      </p>
                      <Badge className={i % 4 === 0 ? "bg-green-600" : i % 4 === 1 ? "bg-blue-600" : i % 4 === 2 ? "bg-orange-500" : "bg-purple-600"}>
                        {i % 4 === 0 ? "Completed" : i % 4 === 1 ? "Processing" : i % 4 === 2 ? "Pending" : "Failed"}
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

export default Transactions;
