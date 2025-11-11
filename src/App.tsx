import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Join from "./pages/Join";
import CompensationPlan from "./pages/CompensationPlan";
import Brand from "./pages/Brand";
import DSSearch from "./pages/DSSearch";
import DEList from "./pages/DEList";
import Legals from "./pages/Legals";
import NotFound from "./pages/NotFound";

// User Panel Pages
import UserLogin from "./pages/user/Login";
import UserRegister from "./pages/user/Register";
import UserDashboard from "./pages/user/Dashboard";
import AdvancedDashboard from "./pages/user/AdvancedDashboard";
import UserProfile from "./pages/user/Profile";
import UserWallet from "./pages/user/Wallet";
import MyReferrals from "./pages/user/Referrals";
import IncomeHistory from "./pages/user/Income";
import UserSettings from "./pages/user/Settings";
import UserPanel from "./pages/user/UserPanel";
import UserLayout from "./components/user-panel/UserLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import { CartProvider } from "./contexts/CartContext";

// Main Navigation Pages
import FirstPurchase from "./pages/user/FirstPurchase";
import Upgrade from "./pages/user/Upgrade";
import RePurchase from "./pages/user/RePurchase";
import MonthlyPurchase from "./pages/user/MonthlyPurchase";
import FastTrack from "./pages/user/FastTrack";
import NewMember from "./pages/user/NewMember";
import MyPurchase from "./pages/user/MyPurchase";
import OnlineOrders from "./pages/user/OnlineOrders";
import SelfRepurchase from "./pages/user/SelfRepurchase";
import GenerateTickets from "./pages/user/GenerateTickets";

// Submenu Pages
import PurchaseHistory from "./pages/user/PurchaseHistory";
import PendingOrders from "./pages/user/PendingOrders";
import DirectReferrals from "./pages/user/DirectReferrals";
import TeamStructure from "./pages/user/TeamStructure";
import WalletBalance from "./pages/user/WalletBalance";
import Transactions from "./pages/user/Transactions";
import Withdraw from "./pages/user/Withdraw";
import IncomeHistoryDetails from "./pages/user/IncomeHistory";
import BonusDetails from "./pages/user/BonusDetails";
import EditProfile from "./pages/user/EditProfile";
import ChangePassword from "./pages/user/ChangePassword";
import UserProducts from "./pages/user/UserProducts";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            {/* Public Routes with Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/compensation-plan" element={<CompensationPlan />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/join" element={<Join />} />
              <Route path="/ds-search" element={<DSSearch />} />
              <Route path="/de-list" element={<DEList />} />
              <Route path="/legals" element={<Legals />} />
            </Route>

            {/* User Panel Routes */}
            <Route path="/user" element={<UserPanel />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />
            
            {/* Checkout Route */}
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Protected User Panel Routes with Layout */}
            <Route path="/user" element={<UserLayout />}>
              <Route path="dashboard" element={
                <ErrorBoundary>
                  <AdvancedDashboard />
                </ErrorBoundary>
              } />
              <Route path="dashboard-simple" element={<UserDashboard />} />
              
              {/* Main Navigation Pages */}
              <Route path="first-purchase" element={<FirstPurchase />} />
              <Route path="upgrade" element={<Upgrade />} />
              <Route path="repurchase" element={<RePurchase />} />
              <Route path="monthly-purchase" element={<MonthlyPurchase />} />
              <Route path="fast-track" element={<FastTrack />} />
              <Route path="new-member" element={<NewMember />} />
              <Route path="my-purchase" element={<MyPurchase />} />
              <Route path="online-orders" element={<OnlineOrders />} />
              <Route path="self-repurchase" element={<SelfRepurchase />} />
              <Route path="tickets" element={<GenerateTickets />} />
              
              {/* Existing Routes */}
              <Route path="profile" element={<UserProfile />} />
              <Route path="wallet" element={<UserWallet />} />
              <Route path="products" element={<UserProducts />} />
              <Route path="referrals" element={<MyReferrals />} />
              <Route path="income" element={<IncomeHistory />} />
              <Route path="settings" element={<UserSettings />} />
              
              {/* Submenu Pages */}
              <Route path="purchase-history" element={<PurchaseHistory />} />
              <Route path="pending-orders" element={<PendingOrders />} />
              <Route path="direct-referrals" element={<DirectReferrals />} />
              <Route path="team-structure" element={<TeamStructure />} />
              <Route path="wallet-balance" element={<WalletBalance />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="income-history" element={<IncomeHistoryDetails />} />
              <Route path="bonus-details" element={<BonusDetails />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
