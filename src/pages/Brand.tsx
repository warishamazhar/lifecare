import {
  Microscope,
  Award,
  Leaf,
  Shield,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import biotechLogo from "../assets/biotech.jpg";

const Brand = () => {
  const brandPillars = [
    {
      icon: Microscope,
      title: "Self Research & Development",
      description:
        "Our innovations are driven by continuous research, blending modern science with nature-inspired solutions.",
    },
    {
      icon: Award,
      title: "Lab Tested Products",
      description:
        "Every Snaffel product is carefully tested to ensure safety, quality, and consistent performance.",
    },
    {
      icon: Leaf,
      title: "Nature-Driven Wellness",
      description:
        "A harmonious blend of herbal wellness, organic agriculture, and bio-magnetic innovation.",
    },
    {
      icon: Shield,
      title: "Commitment to Care",
      description:
        "Built on responsibility, transparency, and a deep commitment to your wellbeing.",
    },
    {
      icon: TrendingUp,
      title: "Result-Oriented Solutions",
      description:
        "Thoughtfully crafted products designed to create meaningful and measurable impact.",
    },
    {
      icon: CheckCircle,
      title: "Quality You Can Trust",
      description:
        "From sourcing to delivery, uncompromised quality remains our foundation.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
                Snaffel
              </h1>
              <div className="flex items-center justify-center gap-3 text-2xl opacity-90">
                <span>The Power of Nature</span>
                <span className="text-gold">|</span>
                <span>The Promise of Care</span>
              </div>
            </div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              More than a brand — Snaffel is a purpose-driven movement empowering
              individuals to take charge of their health, wellbeing, and future.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Brand Promise
            </h2>
            <p className="text-xl text-muted-foreground">
              Rooted in science and inspired by nature, Snaffel stands for trust,
              transformation, and sustainable wellbeing for individuals and
              communities.
            </p>
          </div>

          {/* Brand Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {brandPillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="pt-8 text-center">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary group-hover:scale-110 transition-transform">
                      <pillar.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Commitment to Quality
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Quality at Snaffel is a responsibility. Every product reflects
                our belief in natural balance, scientific integrity, and
                sustainable innovation.
              </p>
              <div className="space-y-4">
                {[
                  "Nature-inspired, science-backed innovation",
                  "Sustainable and responsible sourcing",
                  "Rigorous quality testing and validation",
                  "Customer trust at the core of everything we do",
                  "Focused on long-term wellbeing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square rounded-2xl bg-gradient-hero shadow-gold flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <Leaf className="h-24 w-24 mx-auto mb-4 opacity-90" />
                <p className="text-2xl font-bold">Pure Innovation</p>
                <p className="text-lg opacity-90 mt-2">
                  Inspired by Nature
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ BRAND SECTION (REPLACEMENT) */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <img
            src={biotechLogo}
            alt="Snaffel Logo"
            className="mx-auto h-24 object-contain mb-8"
          />

          <h2 className="text-4xl font-bold mb-4">Our Brand: Snaffel</h2>
          <p className="text-xl font-semibold mb-6 opacity-90">
            The Power of Nature. The Promise of Care.
          </p>

          <p className="text-lg leading-relaxed opacity-90 mb-6">
            Snaffel is more than a brand — it is a movement of purpose,
            symbolizing our unwavering commitment to empowering individuals to
            take charge of their health, wellbeing, and future. Rooted in science
            and inspired by nature, Snaffel represents a harmonious blend of
            herbal wellness, organic agriculture, and bio-magnetic innovation —
            thoughtfully crafted to nurture the body, enrich the soil, and
            elevate the spirit.
          </p>

          <p className="text-lg leading-relaxed opacity-90 mb-6">
            Every Snaffel product reflects our core philosophy: to create
            healthier lives, sustainable growth, and a better tomorrow for every
            individual and every community we touch.
          </p>

          <p className="text-lg leading-relaxed opacity-90">
            With Snaffel, we do not just deliver products — we deliver trust,
            transformation, and the power to live life to its fullest.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Brand;
