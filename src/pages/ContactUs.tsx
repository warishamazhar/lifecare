import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4 py-20">

      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 border border-green-100">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="h-12 w-12 rounded-full bg-green-700 flex items-center justify-center">
              <Mail className="text-white h-6 w-6" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-green-800 mb-1">
            Contact Us
          </h1>
          <p className="text-sm text-muted-foreground">
            We’re here to help — get in touch with us anytime.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-700" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-700" />
            <input
              type="email"
              placeholder="Your Email ID"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-700" />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-green-700" />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 border-t pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600">

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-green-700" />
            <span>Maharashtra, India</span>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-green-700" />
            <a href="tel:+919112168221" className="hover:underline">
              +91 91121 68221
            </a>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-green-700" />
            <a href="mailto:flcbiotech@gmail.com" className="hover:underline">
              flcbiotech@gmail.com
            </a>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="text-xs text-center text-gray-500 mt-8 leading-relaxed">
          All communications are subject to company policies and applicable laws.
          No income, business growth, or returns are guaranteed.
        </p>

      </div>
    </div>
  );
};

export default ContactUs;
