import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AdvancedSidebar } from './AdvancedSidebar';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/user/login');
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
        {/* Mobile Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-4 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="mr-2 text-gray-600"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Byoliva Panel</h1>
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
