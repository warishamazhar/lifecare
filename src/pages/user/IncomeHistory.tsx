import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Award, Download, RefreshCw } from 'lucide-react';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';

interface IncomeRecord {
  id: string;
  type: string;
  amount: number;
  description: string;
  date: string;
  status: string;
}

const IncomeHistory: React.FC = () => {
  const [incomeData, setIncomeData] = useState({
    stats: {
      totalIncome: 0,
      thisMonth: 0,
      thisWeek: 0,
      today: 0
    },
    history: [] as IncomeRecord[]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncomeData();
  }, []);

  const fetchIncomeData = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getIncomeHistory();
      
      if (response.success && response.data) {
        setIncomeData(response.data);
      } else {
        setIncomeData({
          stats: {
            totalIncome: 0,
            thisMonth: 0,
            thisWeek: 0,
            today: 0
          },
          history: []
        });
      }
    } catch (error: any) {
      console.error('Failed to load income history:', error);
      toast.error('Failed to load income history');
      setIncomeData({
        stats: {
          totalIncome: 0,
          thisMonth: 0,
          thisWeek: 0,
          today: 0
        },
        history: []
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const getIncomeTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'referral': return 'text-blue-600 bg-blue-100';
      case 'level': return 'text-green-600 bg-green-100';
      case 'matching': return 'text-purple-600 bg-purple-100';
      case 'roi': return 'text-orange-600 bg-orange-100';
      case 'commission': return 'text-indigo-600 bg-indigo-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Income History</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={fetchIncomeData} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            {loading ? (
              <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto w-24"></div>
            ) : (
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(incomeData.stats.totalIncome)}
              </p>
            )}
            <p className="text-sm text-green-700">Total Earnings</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6 text-center">
            <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            {loading ? (
              <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto w-24"></div>
            ) : (
              <p className="text-2xl font-bold text-blue-600">
                {formatCurrency(incomeData.stats.thisMonth)}
              </p>
            )}
            <p className="text-sm text-blue-700">This Month</p>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            {loading ? (
              <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto w-24"></div>
            ) : (
              <p className="text-2xl font-bold text-purple-600">
                {formatCurrency(incomeData.stats.thisWeek)}
              </p>
            )}
            <p className="text-sm text-purple-700">This Week</p>
          </CardContent>
        </Card>
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            {loading ? (
              <div className="h-8 bg-gray-200 rounded animate-pulse mx-auto w-24"></div>
            ) : (
              <p className="text-2xl font-bold text-orange-600">
                {formatCurrency(incomeData.stats.today)}
              </p>
            )}
            <p className="text-sm text-orange-700">Today</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Income Records</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="border-gray-200 animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-48"></div>
                        <div className="h-3 bg-gray-200 rounded w-32"></div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-24"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : incomeData.history.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <TrendingUp className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-medium">No income records found</p>
              <p className="text-sm">Your income history will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {incomeData.history.map((record) => (
                <Card key={record.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className={getIncomeTypeColor(record.type)}>
                            {record.type.charAt(0).toUpperCase() + record.type.slice(1)}
                          </Badge>
                          <Badge 
                            variant={record.status === 'completed' ? 'default' : 'secondary'}
                            className={record.status === 'completed' ? 'bg-green-600' : 'bg-orange-500'}
                          >
                            {record.status}
                          </Badge>
                        </div>
                        <p className="font-medium">{record.description}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {new Date(record.date).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">
                          +{formatCurrency(record.amount)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeHistory;