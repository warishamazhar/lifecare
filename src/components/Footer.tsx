import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-lime-700 text-white">
      <div className="container mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-lime-200">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-lime-200">About Us</Link></li>
              <li><Link to="/about/vision-mission" className="hover:text-lime-200">Mission & Vision</Link></li>
              <li><Link to="/about/transforming-journey" className="hover:text-lime-200">Transformation Journey</Link></li>
              <li><Link to="/disclaimer">Careers</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-lime-200">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/products" className="hover:text-lime-200">Wellness</Link></li>
              <li><Link to="/products" className="hover:text-lime-200">Agriculture</Link></li>
              <li><Link to="/products" className="hover:text-lime-200">Empowerment</Link></li>
              <li><Link to="/products" className="hover:text-lime-200">Other Categories</Link></li>
            </ul>
          </div>

          {/* BUSINESS */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-lime-200">
              Business
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/business-opportunity" className="hover:text-lime-200">Why Join Us</Link></li>
              <li><Link to="/disclaimer">Success Stories</Link></li>
              <li><Link to="/disclaimer">Training & Events</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-lime-200">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/contact-us" className="hover:text-lime-200">Contact Us</Link></li>
              <li><Link to="/support" className="hover:text-lime-200">FAQs</Link></li>
              <li><Link to="/support" className="hover:text-lime-200">Helpdesk</Link></li>
              <li><Link to="/downloads" className="hover:text-lime-200">Downloads</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-lime-200">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/privacy-policy" className="hover:text-lime-200">
  Privacy Policy
</Link>
</li>
              <li><Link to="/terms" className="hover:text-lime-200">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-lime-200">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-lime-200">Disclaimer</Link></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-lime-200">
              Connect With Us
            </h4>

            <div className="flex gap-4 mb-6">
              <a href="#" aria-label="Facebook" className="hover:text-lime-300">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-lime-300">
                <Instagram />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-lime-300">
                <Youtube />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-lime-300">
                <MessageCircle />
              </a>
            </div>

            <input
              type="email"
              placeholder="Email for Newsletter"
              className="w-full px-4 py-2 rounded-md text-black mb-3"
            />
            <button className="w-full bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-semibold py-2 rounded-md hover:opacity-90">
              Subscribe
            </button>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-14 pt-8 text-center text-sm text-white/80">
          © {currentYear} <strong>Future Life Care</strong>. All Rights Reserved.
          <p className="mt-2 text-xs text-white/60 max-w-3xl mx-auto">
            All business activities, earnings, and benefits are subject to company policies,
            applicable laws, and regulatory guidelines. No income or returns are guaranteed.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
