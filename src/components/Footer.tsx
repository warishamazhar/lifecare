import { Link } from "react-router-dom";
import biotechLogo from "../assets/biotech.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-14">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* COMPANY INFO */}
          <div>
            <img
              src={biotechLogo}
              alt="Future Life Care & Biotech Pvt. Ltd."
              className="h-14 mb-4"
            />

            <p className="text-sm opacity-80 leading-relaxed">
              <strong>Future Life Care & Biotech Pvt. Ltd.</strong> is committed
              to delivering quality-driven wellness and agriculture solutions,
              supported by ethical business practices and regulatory compliance.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Our Services", to: "/services" },
                { label: "Products", to: "/products" },
                { label: "Join Now", to: "/join" },
                { label: "DS Search", to: "/ds-search" },
                { label: "DE List", to: "/de-list" },
                { label: "Legal Certificates", to: "/legals" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919112168221" className="hover:underline">
                  +91 91121 68221
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:flcbiotech@gmail.com"
                  className="hover:underline"
                >
                  flcbiotech@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL & COMPLIANCE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

            <div className="flex gap-3 mb-6">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg 
                             bg-primary/20 hover:bg-gradient-primary transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <p className="text-xs opacity-70 leading-relaxed">
              All business activities, earnings, and benefits are subject to
              company policies, applicable laws, and regulatory guidelines.
              No income or returns are guaranteed.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              © {currentYear} Future Life Care & Biotech Pvt. Ltd.  
              All Rights Reserved.
            </p>

            <div className="flex gap-4">
              <Link
                to="/privacy"
                className="hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:opacity-100 transition-opacity"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
