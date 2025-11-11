import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserPlus, TrendingUp } from 'lucide-react';
import { authAPI } from '@/api/auth';

interface Referral {
  id: string;
  name: string;
  username: string;
  email: string;
  mobileNo: string;
  referralCode: string;
  isActive: boolean;
  rank: string;
  createdAt: string;
  wallets: {
    purchaseWallet: number;
    commissionWallet: number;
    referralWallet: number;
  };
}

const DirectReferrals: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [stats, setStats] = useState({
    totalReferrals: 0,
    activeThisMonth: 0,
    totalCommissions: 0
  });

  useEffect(() => {
    fetchReferralsData();
  }, []);

  const fetchReferralsData = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getDirectReferrals();
      
      if (response.success) {
        const referralsData = response.data || [];
        setReferrals(referralsData);
        setStats({
          totalReferrals: response.stats?.total || referralsData.length || 0,
          activeThisMonth: response.stats?.active || referralsData.filter((r: Referral) => r.isActive).length || 0,
          totalCommissions: referralsData.reduce((sum: number, r: Referral) => sum + (r.wallets?.commissionWallet || 0), 0)
        });
      }
    } catch (error: any) {
      console.error('Failed to load referrals data:', error);
      setReferrals([]);
      setStats({
        totalReferrals: 0,
        activeThisMonth: 0,
        totalCommissions: 0
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <UserPlus className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Direct Referrals</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">{stats.totalReferrals}</p>
            <p className="text-sm text-green-700">Total Direct Referrals</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">{stats.activeThisMonth}</p>
            <p className="text-sm text-blue-700">Active This Month</p>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-6 text-center">
            <UserPlus className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">₹{stats.totalCommissions.toLocaleString()}</p>
            <p className="text-sm text-purple-700">Total Commissions</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Direct Team</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : referrals.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p>No direct referrals yet</p>
              <p className="text-sm">Start referring members to build your team!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {referrals.map((referral) => (
                <Card key={referral.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{referral.name}</h3>
                          <p className="text-sm text-gray-600">
                            {referral.username} • {referral.email}
                          </p>
                          <p className="text-xs text-gray-500">
                            Joined: {new Date(referral.createdAt).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className={referral.isActive ? "bg-green-600" : "bg-orange-500"}>
                          {referral.isActive ? "Active" : "Inactive"}
                        </Badge>
                        <div>
                          <Badge variant="outline" className="text-xs">
                            {referral.rank}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500">Code: {referral.referralCode}</p>
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

export default DirectReferrals;
