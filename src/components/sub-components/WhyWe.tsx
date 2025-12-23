import React from "react";
import { Users, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";
import snaffel from "../../assets/snaffel1.png";

const WhyByoteas = () => {
  const navigate = useNavigate();

  const features = [
    {
      key: "earning",
      icon: TrendingUp,
      title: "Multiple Earning Sources",
      description:
        "Earn through multiple channels with our attractive compensation plan",
      gradient: "from-blue-500 to-cyan-500",
      path: "/multiple-earning-sources",
    },
    {
      key: "team",
      icon: Users,
      title: "Team Performance Bonuses",
      description:
        "Grow together and earn rewards based on team achievements",
      gradient: "from-green-500 to-emerald-500",
      path: "/team-performance-bonuses",
    },
    {
      key: "products",
      icon: Sparkles,
      title: "Premium Products",
      description:
        "Access to world-class Ayurvedic wellness products",
      gradient: "from-purple-500 to-pink-500",
      path: "/products",
    },
  ];

  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">

        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold mb-6">
              Why Choose <span className="text-amber-600">Future Life Care?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on trust, transparency, and purpose—designed for long-term,
              sustainable success.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card
                key={feature.key}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="pt-12 pb-10 px-8 text-center">
                  <div className="mb-6 relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-30`}
                    />
                    <div
                      className={`relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-8">
                    {feature.description}
                  </p>

                  <button
                    onClick={() => navigate(feature.path)}
                    className="mx-auto flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXACT BRAND DESIGN ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Logo */}
          <div className="flex justify-center mb-8">
  <div className="flex justify-center mb-4 -mt-4">
  <img
    src={snaffel}
    alt="Snaffel Logo"
    className="h-36 md:h-40 lg:h-44 object-contain transition-transform duration-300 ease-out hover:scale-110 hover:drop-shadow-2xl"
  />
</div>

</div>


          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Our Brand: <span className="text-green-600">Snaffel</span>
            </h2>
          </div>

          {/* Green Card */}
          <div className="max-w-6xl mx-auto rounded-[36px] bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 px-10 md:px-16 py-20 shadow-2xl">

            <p className="text-white text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-16">
              Snaffel is more than a brand — it is a movement of purpose,
              symbolizing our unwavering commitment to empowering individuals
              to take charge of their health, wellbeing, and future. Rooted in
              science and inspired by nature, Snaffel represents a harmonious
              blend of herbal wellness, organic agriculture, and bio-magnetic
              innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white rounded-3xl px-8 py-10 shadow-lg text-center">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Every Snaffel product reflects our core philosophy: to create
                  healthier lives, sustainable growth, and a better tomorrow
                  for every individual and every community we touch.
                </p>
              </div>

              <div className="bg-white rounded-3xl px-8 py-10 shadow-lg text-center">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Rooted in science and inspired by nature, our solutions are
                  thoughtfully crafted to nurture the body, enrich the soil,
                  and elevate the spirit.
                </p>
              </div>

              <div className="bg-white rounded-3xl px-8 py-10 shadow-lg text-center">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  With Snaffel, we do not just deliver products — we deliver
                  trust, transformation, and the power to live life to its
                  fullest.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyByoteas;
