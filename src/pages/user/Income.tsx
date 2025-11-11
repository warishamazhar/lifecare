import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';
import { TrendingUp, Calendar, DollarSign, Users, Award, Download, Filter } from 'lucide-react';

interface IncomeRecord {
  id: string;
  type: 'referral' | 'level' | 'matching' | 'roi';
  amount: number;
  description: string;
  date: string;
  from?: string;
  status: 'paid' | 'pending';
}

interface IncomeStats {
  totalIncome: number;
  thisMonth: number;
  thisWeek: number;
  today: number;
}

const IncomeHistory = () => {
  const [loading, setLoading] = useState(true);
  const [incomeStats, setIncomeStats] = useState<IncomeStats>({
    totalIncome: 0,
    thisMonth: 0,
    thisWeek: 0,
    today: 0
  });
  
  const [incomeHistory, setIncomeHistory] = useState<IncomeRecord[]>([]);

  useEffect(() => {
    fetchIncomeData();
  }, []);

  const fetchIncomeData = async () => {
    try {
      setLoading(true);
      const { authAPI } = await import('@/api/auth');
      const response = await authAPI.getIncomeHistory();
      
      if (response.success && response.data) {
        setIncomeStats(response.data.stats || {
          totalIncome: 0,
          thisMonth: 0,
          thisWeek: 0,
          today: 0
        });
        setIncomeHistory(response.data.history || []);
      } else {
        setIncomeStats({
          totalIncome: 0,
          thisMonth: 0,
          thisWeek: 0,
          today: 0
        });
        setIncomeHistory([]);
      }
    } catch (error: any) {
      console.error('Failed to load income data:', error);
      toast.error('Failed to load income data');
      setIncomeStats({
        totalIncome: 0,
        thisMonth: 0,
        thisWeek: 0,
        today: 0
      });
      setIncomeHistory([]);
    } finally {
      setLoading(false);
    }
  };

  const getIncomeTypeColor = (type: string) => {
    switch (type) {
      case 'referral': return 'text-blue-600 bg-blue-100';
      case 'level': return 'text-green-600 bg-green-100';
      case 'matching': return 'text-purple-600 bg-purple-100';
      case 'roi': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getIncomeTypeLabel = (type: string) => {
    switch (type) {
      case 'referral': return 'Referral';
      case 'level': return 'Level Income';
      case 'matching': return 'Matching Bonus';
      case 'roi': return 'ROI';
      default: return type;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Income History</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Income Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-600">
              <TrendingUp className="h-5 w-5" />
              Total Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ₹{incomeStats.totalIncome.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">All time earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <Calendar className="h-5 w-5" />
              This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ₹{incomeStats.thisMonth.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">January 2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-600">
              <Award className="h-5 w-5" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              ₹{incomeStats.thisWeek.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Week 3</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <DollarSign className="h-5 w-5" />
              Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              ₹{incomeStats.today.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Jan 15, 2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Income History Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Recent Income
          </CardTitle>
          <CardDescription>Your latest earnings and commissions</CardDescription>
        </CardHeader>
        <CardContent>
          {incomeHistory.length > 0 ? (
            <div className="space-y-4">
              {incomeHistory.map((record) => (
                <div key={record.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${getIncomeTypeColor(record.type)}`}>
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">{record.description}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getIncomeTypeColor(record.type)}`}>
                          {getIncomeTypeLabel(record.type)}
                        </span>
                        {record.from && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            From: {record.from}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">
                      +₹{record.amount.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">{record.date}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        record.status === 'paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {record.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No income records yet</p>
              <p className="text-sm">Your earnings will appear here</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Income Breakdown Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Income Breakdown</CardTitle>
          <CardDescription>Distribution of your income sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">45%</div>
              <p className="text-sm text-gray-600">Referral Income</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">30%</div>
              <p className="text-sm text-gray-600">Level Income</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">20%</div>
              <p className="text-sm text-gray-600">Matching Bonus</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">5%</div>
              <p className="text-sm text-gray-600">ROI</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeHistory;
