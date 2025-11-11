import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, X, Wallet, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AdvancedSidebar } from './AdvancedSidebar';
import { authAPI } from '@/api/auth';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [walletData, setWalletData] = useState({
    purchaseWallet: 0,
    commissionWallet: 0,
    referralWallet: 0
  });
  const [walletLoading, setWalletLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchWalletData = async () => {
    try {
      setWalletLoading(true);
      const response = await authAPI.getProfile();
      if (response.success && response.data && response.data.wallets) {
        setWalletData(response.data.wallets);
      }
    } catch (error: any) {
      console.error('Failed to load wallet data:', error);
    } finally {
      setWalletLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/user/login');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50/30 flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AdvancedSidebar onLogout={handleLogout} />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="relative">
          <AdvancedSidebar onLogout={handleLogout} />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Desktop Header with Wallet Balance */}
        <header className="hidden lg:block bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-primary">Byoliva Panel</h1>
              
              {/* Wallet Balance Cards */}
              <div className="flex items-center space-x-4">
                <Card className="border-green-200 bg-green-50/50">
                  <CardContent className="p-3 flex items-center space-x-2">
                    <Wallet className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="text-xs text-gray-600">Purchase</p>
                      {walletLoading ? (
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                      ) : (
                        <p className="text-sm font-bold text-green-600">
                          {formatCurrency(walletData.purchaseWallet)}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 bg-blue-50/50">
                  <CardContent className="p-3 flex items-center space-x-2">
                    <Wallet className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-600">Commission</p>
                      {walletLoading ? (
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                      ) : (
                        <p className="text-sm font-bold text-blue-600">
                          {formatCurrency(walletData.commissionWallet)}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200 bg-purple-50/50">
                  <CardContent className="p-3 flex items-center space-x-2">
                    <Wallet className="h-4 w-4 text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-600">Referral</p>
                      {walletLoading ? (
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                      ) : (
                        <p className="text-sm font-bold text-purple-600">
                          {formatCurrency(walletData.referralWallet)}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fetchWalletData}
                  disabled={walletLoading}
                >
                  <RefreshCw className={`h-4 w-4 ${walletLoading ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="mr-2 text-gray-600"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold text-primary">Byoliva Panel</h1>
            </div>
          </div>
          
          {/* Mobile Wallet Balance */}
          <div className="px-4 pb-3">
            <div className="grid grid-cols-3 gap-2">
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-2 text-center">
                  <p className="text-xs text-gray-600">Purchase</p>
                  {walletLoading ? (
                    <div className="h-3 w-12 bg-gray-200 rounded animate-pulse mx-auto mt-1"></div>
                  ) : (
                    <p className="text-xs font-bold text-green-600">
                      {formatCurrency(walletData.purchaseWallet)}
                    </p>
                  )}
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50/50">
                <CardContent className="p-2 text-center">
                  <p className="text-xs text-gray-600">Commission</p>
                  {walletLoading ? (
                    <div className="h-3 w-12 bg-gray-200 rounded animate-pulse mx-auto mt-1"></div>
                  ) : (
                    <p className="text-xs font-bold text-blue-600">
                      {formatCurrency(walletData.commissionWallet)}
                    </p>
                  )}
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 bg-purple-50/50">
                <CardContent className="p-2 text-center">
                  <p className="text-xs text-gray-600">Referral</p>
                  {walletLoading ? (
                    <div className="h-3 w-12 bg-gray-200 rounded animate-pulse mx-auto mt-1"></div>
                  ) : (
                    <p className="text-xs font-bold text-purple-600">
                      {formatCurrency(walletData.referralWallet)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
