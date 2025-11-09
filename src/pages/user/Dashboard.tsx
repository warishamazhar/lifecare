import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Wallet, TrendingUp, Package, DollarSign } from 'lucide-react';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  downlineCount: number;
  wallets: {
    purchaseWallet: number;
    commissionWallet: number;
    referralWallet: number;
  };
  totalPayment: number;
  todayPayment: number;
  user: {
    name: string;
    username: string;
    email: string;
    referralCode: string;
    isActive: boolean;
    packageAmount: number;
    isPackagePurchased: boolean;
  };
}

const UserDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await authAPI.getDashboard();
      if (response.success) {
        setStats(response.data);
      }
    } catch (error: any) {
      toast.error('Failed to load dashboard data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const cards = [
    {
      title: "My Referrals",
      value: stats?.downlineCount ?? 0,
      icon: Users,
      color: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400",
    },
    {
      title: "Purchase Wallet",
      value: `₹${stats?.wallets?.purchaseWallet ?? 0}`,
      icon: Wallet,
      color: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      title: "Commission Wallet",
      value: `₹${stats?.wallets?.commissionWallet ?? 0}`,
      icon: DollarSign,
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      title: "Referral Wallet", 
      value: `₹${stats?.wallets?.referralWallet ?? 0}`,
      icon: TrendingUp,
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome, {stats?.user?.name || 'User'}!
        </h1>
        <p className="text-gray-600">
          Username: <span className="font-semibold">{stats?.user?.username}</span> | 
          Referral Code: <span className="font-semibold text-green-600">{stats?.user?.referralCode}</span>
        </p>
        <div className="mt-2">
          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
            stats?.user?.isActive 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {stats?.user?.isActive ? 'Active' : 'Inactive'}
          </span>
          {stats?.user?.isPackagePurchased && (
            <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
              Package Purchased: ₹{stats.user.packageAmount}
            </span>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
              <div className={`absolute inset-0 ${card.color} opacity-10`}></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {card.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${card.color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold text-gray-900">
                  {card.value}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5 text-blue-600" />
              System Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Users:</span>
              <span className="font-semibold">{stats?.totalUsers ?? 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Active Users:</span>
              <span className="font-semibold text-green-600">{stats?.activeUsers ?? 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Payment:</span>
              <span className="font-semibold">₹{stats?.totalPayment ?? 0}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                View Profile
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Wallet History
              </button>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Referral Link
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
