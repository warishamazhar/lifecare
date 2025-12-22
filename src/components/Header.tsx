import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Cart from "./Cart";
import biotechLogo from "../assets/biotech.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Journey", path: "/our-journey" },
    { name: "Our Products", path: "/our-products" },
    { name: "Business Opportunity", path: "/business-opportunity" },
    { name: "Gallery", path: "/gallery" },
    { name: "Downloads", path: "/downloads" },
    { name: "Support", path: "/support" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Join Now", path: "/join" },
  ];

  const aboutSubMenu = [
    { name: "Company Overview", path: "/about/company-overview" },
    { name: "Vision & Mission", path: "/about/vision-mission" },
    { name: "Our Philosophy", path: "/about/philosophy" },
    { name: "Legal & Compliance", path: "/about/legal-compliance" },
    { name: "CEO's Message", path: "/about/ceo-message" },
    { name: "Transforming Journey", path: "/about/transforming-journey" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="transition-transform hover:scale-105">
            <img
              className="h-[9vh] w-auto max-sm:h-[7vh]"
              src={biotechLogo}
              alt="Biotech Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Home */}
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                isActive("/") ? "text-primary" : "text-foreground"
              )}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-primary" />
              )}
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer text-sm font-medium hover:text-primary">
                About
              </span>

              <div className="absolute left-0 top-full mt-3 w-64 rounded-lg bg-background shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {aboutSubMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-sm hover:bg-muted transition"
                  >
                    {item.name}
                  </Link>
                ))}
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
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-primary" />
                  )}
                </Link>
              ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Cart />
            <Button variant="outline" size="sm" asChild>
              <Link to="/user/login">Login / Member Login</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/join">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">

              {/* Home */}
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium px-4 py-2 rounded hover:bg-muted"
              >
                Home
              </Link>

              {/* About Mobile */}
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="text-left px-4 py-2 text-sm font-medium"
              >
                About
              </button>

              {isAboutOpen && (
                <div className="ml-4">
                  {aboutSubMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutOpen(false);
                      }}
                      className="block px-4 py-2 text-sm rounded hover:bg-muted"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {navItems
                .filter((item) => item.name !== "Home")
                .map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium py-2 px-4 rounded hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                ))}

              <div className="flex justify-center my-2">
                <Cart />
              </div>

              <Button variant="outline" size="sm" asChild className="w-full">
                <Link to="/user/login" onClick={() => setIsMenuOpen(false)}>
                  Login / Member Login
                </Link>
              </Button>

              <Button variant="hero" size="sm" asChild className="w-full">
                <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
