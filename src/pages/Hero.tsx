import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Leaf,
  Shield,
  Clock,
  DollarSign,
} from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [isVideoPlaying] = useState(false);

  const stats = [
    { value: "₹2.5Cr+", label: "Total Earnings" },
    { value: "100%", label: "Natural Products" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://www.pexels.com/download/video/5480231/"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
              <Award className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-300 font-semibold text-sm">
                Maharastra's 1st Direct Selling Company
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-200 bg-clip-text text-transparent">
                  Future Life Care
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-light">
                  Where Dreams Come True
                </span>
              </h1>

              <p className="text-xl text-emerald-100 max-w-xl leading-relaxed">
                Start your entrepreneurial journey with zero investment. Join
                thousands building successful businesses with 100% natural
                products.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl font-bold text-emerald-300">
                    {stat.value}
                  </div>
                  <div className="text-emerald-200 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-6 text-emerald-200 text-sm pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                Government Registered
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Instant Support
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                Daily Payouts
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="relative bg-gradient-to-br from-emerald-500/10 to-green-600/10 rounded-3xl p-8 backdrop-blur-sm border border-emerald-500/30">

              {/* Floating Icons (desktop only) */}
              <div className="hidden lg:flex absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full items-center justify-center">
                <TrendingUp className="w-8 h-8 text-emerald-300" />
              </div>

              <div className="hidden lg:flex absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full items-center justify-center">
                <Users className="w-6 h-6 text-green-300" />
              </div>

              {/* Card Content */}
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                  <Leaf className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  Your Business Journey
                </h3>

                <p className="text-emerald-200 text-lg">
                  Join India's fastest growing community of entrepreneurs. Start
                  with zero investment and build your empire.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-full flex items-center justify-center gap-3 hover:scale-105 transition">
                    Start Your Business Today
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => navigate("/business-plan")}
                    className="px-8 py-4 border-2 border-emerald-400 text-emerald-300 rounded-full hover:bg-emerald-400/10 transition"
                  >
                    View Business Plan
                  </button>
                </div>

                <div className="pt-6 border-t border-emerald-500/20">
                  <div className="inline-flex px-6 py-3 rounded-full bg-black/30 border border-emerald-500/30 text-white">
                    🌐 flcbiotech.com
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
