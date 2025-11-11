import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, ArrowUpRight, ArrowDownRight, Filter, Download, RefreshCw } from 'lucide-react';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  wallet: 'purchase' | 'commission' | 'referral';
  status: 'completed' | 'processing' | 'pending' | 'failed';
  transactionId?: string;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'credit' | 'debit'>('all');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getTransactions();
      
      if (response.success && response.data) {
        setTransactions(response.data || []);
      } else {
        setTransactions([]);
      }
    } catch (error: any) {
      console.error('Failed to load transactions:', error);
      toast.error('Failed to load transactions');
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'processing': return 'bg-blue-600';
      case 'pending': return 'bg-orange-500';
      case 'failed': return 'bg-red-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CreditCard className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Transactions</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setFilter('all')} className={filter === 'all' ? 'bg-primary text-white' : ''}>
            All
          </Button>
          <Button variant="outline" onClick={() => setFilter('credit')} className={filter === 'credit' ? 'bg-green-600 text-white' : ''}>
            Credits
          </Button>
          <Button variant="outline" onClick={() => setFilter('debit')} className={filter === 'debit' ? 'bg-red-600 text-white' : ''}>
            Debits
          </Button>
          <Button variant="outline" onClick={fetchTransactions} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Transactions ({filteredTransactions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="border-gray-200 animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-32"></div>
                          <div className="h-3 bg-gray-200 rounded w-48"></div>
                        </div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-24"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredTransactions.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <CreditCard className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-medium">No transactions found</p>
              <p className="text-sm">Your transaction history will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTransactions.map((transaction) => (
                <Card key={transaction.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${transaction.type === 'credit' ? 'bg-green-50' : 'bg-red-50'}`}>
                          {transaction.type === 'credit' ? 
                            <ArrowUpRight className="h-6 w-6 text-green-600" /> : 
                            <ArrowDownRight className="h-6 w-6 text-red-600" />
                          }
                        </div>
                        <div>
                          <h3 className="font-semibold">{transaction.description}</h3>
                          <p className="text-sm text-gray-600">
                            {transaction.transactionId ? `TXN#${transaction.transactionId} • ` : ''}
                            {new Date(transaction.date).toLocaleDateString('en-IN')} • {transaction.wallet} wallet
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className={`font-bold text-lg ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                        </p>
                        <Badge className={`text-white ${getStatusColor(transaction.status)}`}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </Badge>
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

export default Transactions;