import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowDownRight, CreditCard, Banknote, RefreshCw } from 'lucide-react';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';

const Withdraw: React.FC = () => {
  const [walletData, setWalletData] = useState({
    purchaseWallet: 0,
    commissionWallet: 0,
    referralWallet: 0
  });
  const [loading, setLoading] = useState(true);
  const [selectedWallet, setSelectedWallet] = useState<'commissionWallet' | 'referralWallet'>('commissionWallet');
  const [amount, setAmount] = useState('');
  const [withdrawMethod, setWithdrawMethod] = useState('bank');
  const [accountDetails, setAccountDetails] = useState('');

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

  const getAvailableBalance = () => {
    return selectedWallet === 'commissionWallet' 
      ? walletData.commissionWallet 
      : walletData.referralWallet;
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);
    const available = getAvailableBalance();
    
    if (!amount || withdrawAmount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    
    if (withdrawAmount > available) {
      toast.error('Insufficient balance');
      return;
    }
    
    if (!accountDetails) {
      toast.error('Please enter account details');
      return;
    }
    
    // TODO: Implement withdrawal API call
    toast.success('Withdrawal request submitted successfully!');
    setAmount('');
    setAccountDetails('');
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ArrowDownRight className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Withdraw Funds</h1>
        </div>
        <Button variant="outline" onClick={fetchWalletData} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Withdrawal Request</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wallet">Select Wallet</Label>
              <Select value={selectedWallet} onValueChange={(value: 'commissionWallet' | 'referralWallet') => setSelectedWallet(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="commissionWallet">
                    Commission Wallet (₹{walletData.commissionWallet.toLocaleString()})
                  </SelectItem>
                  <SelectItem value="referralWallet">
                    Referral Wallet (₹{walletData.referralWallet.toLocaleString()})
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                Available: ₹{getAvailableBalance().toLocaleString()}
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Withdrawal Amount</Label>
              <Input 
                id="amount" 
                type="number" 
                placeholder="Enter amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                max={getAvailableBalance()}
              />
              <p className="text-xs text-gray-500">
                Maximum: ₹{getAvailableBalance().toLocaleString()}
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="method">Withdrawal Method</Label>
              <Select value={withdrawMethod} onValueChange={setWithdrawMethod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="wallet">Digital Wallet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="account">Account Details</Label>
              <Input 
                id="account" 
                placeholder="Account number or UPI ID" 
                value={accountDetails}
                onChange={(e) => setAccountDetails(e.target.value)}
              />
            </div>
            
            <Button 
              className="w-full bg-primary hover:bg-primary-dark"
              onClick={handleWithdraw}
              disabled={loading || !amount || !accountDetails}
            >
              <ArrowDownRight className="h-4 w-4 mr-2" />
              Request Withdrawal
            </Button>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700">Available Balance</p>
                  {loading ? (
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mt-2"></div>
                  ) : (
                    <p className="text-2xl font-bold text-green-600">
                      ₹{getAvailableBalance().toLocaleString()}
                    </p>
                  )}
                </div>
                <Banknote className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Withdrawal History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <CreditCard className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-sm">No withdrawal history yet</p>
                <p className="text-xs mt-1">Your withdrawal requests will appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
