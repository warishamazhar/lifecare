import { Outlet } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    window.open("https://wa.me/911234567890", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-600 flex items-center justify-center z-50 animate-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-18" />
      </button>
    </div>
  );
};

export default Layout;
