import { Microscope, Award, Leaf, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

      {/* Brand Promise Section */}
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

          {/* Brand Pillars Grid */}
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
                  <h3 className="text-xl font-bold mb-3 text-foreground">
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

      {/* Quality Assurance Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-hero shadow-gold overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-primary-foreground p-8">
                      <Leaf className="h-24 w-24 mx-auto mb-4 opacity-90" />
                      <p className="text-2xl font-bold">
                        Pure Innovation
                      </p>
                      <p className="text-lg opacity-90 mt-2">
                        Inspired by Nature
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Certified & Trusted
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Quality Assured",
                "Science Backed",
                "Sustainably Crafted",
                "Trusted by Communities",
              ].map((badge, index) => (
                <Card key={index} className="border-primary/20 shadow-soft">
                  <CardContent className="pt-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto mb-3">
                      <Award className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-foreground">
                      {badge}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
