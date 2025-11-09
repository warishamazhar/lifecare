import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';
import { Wallet, CreditCard, ArrowUpRight, ArrowDownLeft, History, TrendingUp } from 'lucide-react';

interface WalletData {
  purchaseWallet: number;
  commissionWallet: number;
  referralWallet: number;
}

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  wallet: 'purchase' | 'commission' | 'referral';
}

const UserWallet = () => {
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState(true);
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'credit',
      amount: 500,
      description: 'Referral Commission',
      date: '2024-01-15',
      wallet: 'commission'
    },
    {
      id: '2', 
      type: 'credit',
      amount: 250,
      description: 'Level Income',
      date: '2024-01-14',
      wallet: 'referral'
    },
    // Add more sample transactions as needed
  ]);

  useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchWalletData = async () => {
    try {
      const response = await authAPI.getProfile();
      setWalletData(response.data.wallets);
    } catch (error: any) {
      toast.error('Failed to load wallet data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const totalBalance = walletData 
    ? walletData.purchaseWallet + walletData.commissionWallet + walletData.referralWallet
    : 0;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Wallet</h1>
        <div className="flex gap-2">
          <Button className="flex items-center gap-2">
            <ArrowDownLeft className="h-4 w-4" />
            Withdraw
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowUpRight className="h-4 w-4" />
            Add Money
          </Button>
        </div>
      </div>

      {/* Total Balance */}
      <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-6 w-6" />
            Total Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">₹{totalBalance.toLocaleString()}</div>
          <p className="text-green-100 mt-2">Available for withdrawal and purchases</p>
        </CardContent>
      </Card>

      {/* Individual Wallets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <CreditCard className="h-5 w-5" />
              Purchase Wallet
            </CardTitle>
            <CardDescription>Available for product purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">
              ₹{walletData?.purchaseWallet.toLocaleString() || 0}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <TrendingUp className="h-5 w-5" />
              Commission Wallet
            </CardTitle>
            <CardDescription>Earnings from commissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              ₹{walletData?.commissionWallet.toLocaleString() || 0}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-600">
              <ArrowUpRight className="h-5 w-5" />
              Referral Wallet
            </CardTitle>
            <CardDescription>Earnings from referrals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">
              ₹{walletData?.referralWallet.toLocaleString() || 0}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Recent Transactions
          </CardTitle>
          <CardDescription>Your latest wallet activity</CardDescription>
        </CardHeader>
        <CardContent>
          {transactions.length > 0 ? (
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'credit' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? (
                        <ArrowDownLeft className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500 capitalize">{transaction.wallet} Wallet</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Wallet className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No transactions yet</p>
              <p className="text-sm">Your wallet activity will appear here</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserWallet;
