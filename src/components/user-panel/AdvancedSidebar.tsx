import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  TrendingUp, 
  RotateCcw,
  Calendar,
  Zap,
  UserPlus,
  Package,
  Globe,
  DollarSign,
  Users,
  Wallet,
  Award,
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: 'Dashboard',
    href: '/user/dashboard',
    icon: LayoutDashboard,
    current: true
  },
  {
    name: 'First Purchase',
    href: '/user/first-purchase', 
    icon: ShoppingCart,
    current: false
  },
  {
    name: 'Upgrade',
    href: '/user/upgrade',
    icon: TrendingUp, 
    current: false
  },
  {
    name: 'Re Purchase',
    href: '/user/repurchase',
    icon: RotateCcw,
    current: false
  },
  {
    name: 'Monthly Purchase',
    href: '/user/monthly-purchase',
    icon: Calendar,
    current: false
  },
  {
    name: 'Fast Track',
    href: '/user/fast-track',
    icon: Zap,
    current: false
  },
  {
    name: 'New Member',
    href: '/user/new-member',
    icon: UserPlus,
    current: false,
    highlight: true
  },
  {
    name: 'My Purchase',
    href: '/user/my-purchase',
    icon: Package,
    current: false,
    submenu: true,
    children: [
      { name: 'Purchase History', href: '/user/purchase-history' },
      { name: 'Pending Orders', href: '/user/pending-orders' },
    ]
  },
  {
    name: 'My Online Order(s)',
    href: '/user/online-orders',
    icon: Globe,
    current: false
  },
  {
    name: 'Self Total Repurchase',
    href: '/user/self-repurchase',
    icon: RotateCcw,
    current: false
  },
  {
    name: 'Team Members',
    href: '/user/referrals',
    icon: Users,
    current: false,
    submenu: true,
    children: [
      { name: 'Direct Referrals', href: '/user/direct-referrals' },
      { name: 'Team Structure', href: '/user/team-structure' },
    ]
  },
  {
    name: 'E-Wallet',
    href: '/user/wallet',
    icon: Wallet,
    current: false,
    submenu: true,
    children: [
      { name: 'Wallet Balance', href: '/user/wallet-balance' },
      { name: 'Transactions', href: '/user/transactions' },
      { name: 'Withdraw', href: '/user/withdraw' },
    ]
  },
  {
    name: 'My Products',
    href: '/user/products',
    icon: Package,
    current: false
  },
  {
    name: 'My Payouts',
    href: '/user/income',
    icon: DollarSign,
    current: false,
    submenu: true,
    children: [
      { name: 'Income History', href: '/user/income-history' },
      { name: 'Bonus Details', href: '/user/bonus-details' },
    ]
  },
  {
    name: 'Manage Profile',
    href: '/user/profile',
    icon: Settings,
    current: false,
    submenu: true,
    children: [
      { name: 'Edit Profile', href: '/user/edit-profile' },
      { name: 'Change Password', href: '/user/change-password' },
    ]
  },
  {
    name: 'Generate Tickets',
    href: '/user/tickets',
    icon: Award,
    current: false
  }
];

interface AdvancedSidebarProps {
  onLogout: () => void;
}

export const AdvancedSidebar: React.FC<AdvancedSidebarProps> = ({ onLogout }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-primary">NAVIGATIONS</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const hasSubmenu = item.submenu && item.children;
          const isSubmenuOpen = openSubmenu === item.name;

          return (
            <div key={item.name}>
              {hasSubmenu ? (
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                    'hover:bg-primary/10 hover:text-primary',
                    isActive 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-700'
                  )}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isSubmenuOpen ? "transform rotate-180" : ""
                    )}
                  />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                    'hover:bg-primary/10 hover:text-primary',
                    isActive 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-700',
                    item.highlight && 'border-l-4 border-accent bg-accent/5'
                  )}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                  {item.highlight && (
                    <span className="ml-auto text-xs bg-accent text-primary-dark px-2 py-1 rounded-full">
                      +
                    </span>
                  )}
                </Link>
              )}
              
              {/* Submenu */}
              {hasSubmenu && isSubmenuOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children?.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className={cn(
                        'block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                        'hover:bg-primary/5 hover:text-primary text-gray-600',
                        location.pathname === child.href 
                          ? 'bg-primary/20 text-primary font-medium' 
                          : ''
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 border border-red-200"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
};
