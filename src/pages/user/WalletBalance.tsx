import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const WalletBalance: React.FC = () => {
  const [walletData, setWalletData] = useState({
    purchaseWallet: 0,
    commissionWallet: 0,
    referralWallet: 0
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchWalletData = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getProfile();
      
      if (response.success && response.data && response.data.wallets) {
        setWalletData(response.data.wallets);
      }
    } catch (error: any) {
      console.error('Failed to load wallet data:', error);
      toast.error('Failed to load wallet balance');
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

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Wallet className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Wallet Balance</h1>
        </div>
        <Button variant="outline" onClick={fetchWalletData} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-green-800">Purchase Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-32 mb-4"></div>
              </div>
            ) : (
              <>
                <p className="text-3xl font-bold text-green-600">
                  {formatCurrency(walletData.purchaseWallet)}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => navigate('/user/wallet')}
                  >
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    Add Money
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-800">Commission Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-32 mb-4"></div>
              </div>
            ) : (
              <>
                <p className="text-3xl font-bold text-blue-600">
                  {formatCurrency(walletData.commissionWallet)}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => navigate('/user/withdraw')}
                  >
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    Withdraw
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-purple-800">Referral Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-32 mb-4"></div>
              </div>
            ) : (
              <>
                <p className="text-3xl font-bold text-purple-600">
                  {formatCurrency(walletData.referralWallet)}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => navigate('/user/wallet')}
                  >
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Transfer
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Balance</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-48"></div>
            </div>
          ) : (
            <p className="text-4xl font-bold text-primary">
              {formatCurrency(
                walletData.purchaseWallet + 
                walletData.commissionWallet + 
                walletData.referralWallet
              )}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletBalance;