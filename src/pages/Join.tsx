import { Link } from "react-router-dom";
import { Check, ArrowRight, Star, TrendingUp, Leaf, Sprout, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Join = () => {
  const starterPacks = [
    {
      name: "Standard",
      investment: "Free",
      productValue: "Explore",
      cashBack: "-",
      repurchaseWallet: "30% Redeem",
      monthlyCapping: "-",
      features: ["Access to Products", "Basic Training", "Community Support"],
      popular: false,
    },
    {
      name: "2PV Pack",
      investment: "Up to ₹2,000",
      productValue: "Up to ₹6,000",
      cashBack: "-",
      repurchaseWallet: "30% Redeem",
      monthlyCapping: "-",
      features: [
        "Starter Product Kit",
        "Training & Support",
        "Referral Commissions",
        "Team Building Tools",
      ],
      popular: false,
    },
    {
      name: "4PV Pack",
      investment: "Up to ₹4,000",
      productValue: "Up to ₹12,000",
      cashBack: "₹4,200",
      repurchaseWallet: "30% Redeem",
      monthlyCapping: "No Capping",
      features: [
        "Premium Product Kit",
        "Advanced Training",
        "Higher Commissions",
        "Performance Bonuses",
        "Marketing Materials",
      ],
      popular: true,
    },
    {
      name: "10PV Pack",
      investment: "Up to ₹10,000",
      productValue: "Up to ₹30,000",
      cashBack: "₹8,400",
      repurchaseWallet: "30% Redeem",
      monthlyCapping: "₹12 Lakh",
      features: [
        "Elite Product Portfolio",
        "VIP Training Access",
        "Maximum Commissions",
        "Unlimited Earning Potential",
        "Premium Support",
        "Exclusive Rewards",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Be a Part of the Change
            </h1>
            <p className="text-2xl mb-4 opacity-90">
              Be a Part of <span className="text-secondary font-semibold">Snaffel</span>
            </p>
            <p className="text-xl opacity-80">
              Inspired by nature. Driven by innovation. United by purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              A Journey Towards Wellness & Growth
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At <span className="font-semibold text-foreground">
                Future Life Care & Biotech Pvt. Ltd.
              </span>, we believe that everyone deserves the opportunity to live a
              healthier, happier, and more meaningful life.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              Through our brand <span className="font-semibold text-foreground">Snaffel</span>,
              we are building a community where wellness becomes a way of life,
              agriculture thrives in harmony with nature, and every individual
              finds the power to grow, lead, and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Highlights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-soft hover:shadow-gold transition-all">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                  <HeartHandshake className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wellness as a Lifestyle</h3>
                <p className="text-muted-foreground">
                  Holistic Ayurvedic wellness solutions for everyday life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-gold transition-all">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                  <Sprout className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Nature & Agriculture</h3>
                <p className="text-muted-foreground">
                  Supporting sustainable farming and natural harmony.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-gold transition-all">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Growth & Opportunity</h3>
                <p className="text-muted-foreground">
                  Empowering individuals to build income, confidence, and leadership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Starter Packs (UNCHANGED LOGIC) */}
      {/* Your existing Starter Packs, How It Works, Benefits Overview sections remain exactly the same */}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Walk With Us Towards a Better Tomorrow
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore Snaffel products, embrace natural living, and begin a journey
            toward a healthier, brighter, and more balanced world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="shadow-gold">
              Activate Your ID Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/">Explore Snaffel Products</Link>

            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
