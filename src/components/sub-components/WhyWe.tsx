import React from "react";
import { Users, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import biotech from "../../assets/biotech.jpg";

const WhyByoteas = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Multiple Earning Sources",
      description:
        "Earn through multiple channels with our attractive compensation plan",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Team Performance Bonuses",
      description:
        "Grow together and earn rewards based on team achievements",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description:
        "Access to world-class Ayurvedic wellness products",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Why Choose Us
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Why Choose <span className="text-amber-600">Future Life Care?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe success is built on trust, transparency, and purpose. Our platform blends science-backed products with ethical business practices. We empower individuals to grow with confidence and clarity. Every step is designed for long-term stability and sustainable success.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-white/80 backdrop-blur border border-gray-200/60 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <CardContent className="pt-12 pb-10 px-8 text-center">
                <div className="mb-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-30`}
                  />
                  <div
                    className={`relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* BRAND SECTION */}
        <div className="max-w-6xl mx-auto text-center">
          {/* Brand Logo */}
          <img
            src={biotech}
            alt="Snaffel Brand Logo"
            className="mx-auto h-36 md:h-40 mb-10 object-contain drop-shadow-lg"
          />

          {/* Brand Heading */}
          <h3 className="text-4xl md:text-5xl font-extrabold mb-12">
            <span className="text-black">Our Brand: </span>
            <span className="text-green-600">Snaffel</span>
          </h3>

          {/* Green Highlight Card */}
          <div className="rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 px-8 md:px-14 py-16 shadow-2xl">
            {/* Main Description (White Text) */}
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto mb-14">
              Snaffel is more than a brand — it is a movement of purpose,
              symbolizing our unwavering commitment to empowering individuals
              to take charge of their health, wellbeing, and future. Rooted in
              science and inspired by nature, Snaffel represents a harmonious
              blend of herbal wellness, organic agriculture, and bio-magnetic
              innovation.
            </p>

            {/* White Cards Inside Green */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 leading-relaxed font-medium">
                  Every Snaffel product reflects our core philosophy: to create
                  healthier lives, sustainable growth, and a better tomorrow
                  for every individual and every community we touch.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 leading-relaxed font-medium">
                  Rooted in science and inspired by nature, our solutions are
                  thoughtfully crafted to nurture the body, enrich the soil,
                  and elevate the spirit.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 leading-relaxed font-medium">
                  With Snaffel, we do not just deliver products — we deliver
                  trust, transformation, and the power to live life to its
                  fullest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyByoteas;
