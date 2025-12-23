import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Cart from "./Cart";
import biotechLogo from "../assets/biotech.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Journey", path: "/our-journey" },
    { name: "Business Opportunity", path: "/business-opportunity" },
    { name: "Gallery", path: "/gallery" },
    { name: "Downloads", path: "/downloads" },
    { name: "Support", path: "/support" },
    // { name: "Join Now", path: "/join" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const aboutSubMenu = [
    { name: "Company Overview", path: "/about/company-overview" },
    { name: "Vision & Mission", path: "/about/vision-mission" },
    { name: "Our Philosophy", path: "/about/philosophy" },
    { name: "Legal & Compliance", path: "/about/legal-compliance" },
    { name: "CEO's Message", path: "/about/ceo-message" },
    { name: "Transforming Journey", path: "/about/transforming-journey" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="hover:scale-105 transition">
            <img
              src={biotechLogo}
              alt="Biotech Logo"
              className="h-[9vh] max-sm:h-[7vh]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Home */}
            <Link
              to="/"
              className={cn(
                "text-sm font-medium hover:text-primary relative",
                isActive("/") && "text-primary"
              )}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer text-sm font-medium hover:text-primary">
                About
              </span>
              <div className="absolute left-0 top-full w-64 rounded-lg bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">

                {aboutSubMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-5 py-3 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ✅ PRODUCTS DROPDOWN (UPDATED) */}
            <div className="relative group">
              <span className="cursor-pointer text-sm font-medium hover:text-primary">
                Products
              </span>
             <div className="absolute left-0 top-full w-56 rounded-xl bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">


                <Link to="/our-products" className="block px-6 py-3 text-sm hover:bg-gray-100">
                  Wellness Products
                </Link>

                <Link to="/our-products" className="block px-6 py-3 text-sm hover:bg-gray-100">
                  Organic Agriculture
                </Link>

                <Link to="/our-products" className="block px-6 py-3 text-sm hover:bg-gray-100">
                  Biomagnetics
                </Link>

                <Link to="/coming-soon" className="block px-6 py-3 text-sm hover:bg-gray-100">
                  Herbal Cosmetics
                </Link>

                <Link to="/coming-soon" className="block px-6 py-3 text-sm hover:bg-gray-100">
                  Electronics
                </Link>

                <Link to="/coming-soon" className="block px-6 py-3 text-sm hover:bg-gray-100">
                  Upcoming Products
                </Link>

              </div>
            </div>

            {/* Other Menu Items */}
            {navItems
              .filter((item) => item.name !== "Home")
              .map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium hover:text-primary",
                    isActive(item.path) && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Cart />
            <Button variant="outline" size="sm" asChild>
              <Link to="/user/login">Login</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/join">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm hover:bg-muted rounded"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
