import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CORE_PILLARS = [
  {
    title: "Wellness for Every Family",
    description:
      "Delivering organic, safe, and life-enhancing wellness solutions that bring balance and vitality to everyday living.",
  },
  {
    title: "Agriculture with Dignity",
    description:
      "Empowering farmers with knowledge, technology, and fair opportunities — restoring pride and prosperity to agriculture.",
  },
  {
    title: "Individual Empowerment",
    description:
      "Creating skill-building and business platforms for youth and women to achieve self-reliance and leadership.",
  },
  {
    title: "Sustainability First",
    description:
      "Protecting soil, water, and the environment through responsible innovation for future generations.",
  },
  {
    title: "Innovation + Tradition",
    description:
      "Merging modern science with ancient wisdom to maximize impact and authenticity.",
  },
  {
    title: "Beyond Business",
    description:
      "Measuring success not by profits earned, but by lives transformed — in health, in wealth, and in spirit.",
  },
];

const LatestProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            <span className="text-black">Our Core </span>
            <span className="text-emerald-700">Pillars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Future Life Care & Biotech Pvt. Ltd., we are committed to building
            a healthier and empowered tomorrow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar, index) => (
            <Card
              key={index}
              className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 
                         border border-emerald-500 shadow-lg 
                         hover:shadow-2xl hover:-translate-y-1 
                         transition-all duration-300"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-emerald-50 leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground font-medium">
            At Future Life Care & Biotech Pvt. Ltd., we are more than a company —
            we are a mission to inspire transformation across health, humanity,
            and harmony with nature. Together, we’re not just building a business
            — we’re building a better tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
