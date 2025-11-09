import { Link } from "react-router-dom";
import { Check, ArrowRight, Star, TrendingUp } from "lucide-react";
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Start Your Journey</h1>
            <p className="text-2xl mb-4 opacity-90">Believe in Yourself!</p>
            <p className="text-xl opacity-80">
              Every great success starts with a simple decision to try.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Choose Your Starter Pack</h2>
            <p className="text-xl text-muted-foreground">
              Select the package that best fits your goals and budget. All packs come with our 30-day
              money-back guarantee and comprehensive training.
            </p>
          </div>

          {/* Starter Packs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {starterPacks.map((pack, index) => (
              <Card
                key={index}
                className={cn(
                  "relative border-2 transition-all duration-300 hover:-translate-y-2",
                  pack.popular
                    ? "border-secondary shadow-gold scale-105"
                    : "border-border shadow-soft hover:shadow-gold"
                )}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-gold text-accent-foreground font-semibold text-sm shadow-gold">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{pack.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{pack.investment}</div>
                  <p className="text-sm text-muted-foreground">Investment</p>
                </CardHeader>

                <CardContent>
                  {/* Value Props */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Product Value:</span>
                      <span className="font-semibold">{pack.productValue}</span>
                    </div>
                    {pack.cashBack !== "-" && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Cash Back:</span>
                        <span className="font-semibold text-secondary">{pack.cashBack}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Wallet:</span>
                      <span className="font-semibold">{pack.repurchaseWallet}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Monthly Cap:</span>
                      <span className="font-semibold">{pack.monthlyCapping}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant={pack.popular ? "gold" : "default"}
                    className="w-full"
                    size="lg"
                  >
                    <Link to="/user/login">
                      Select Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How to Get Started</h2>

            <div className="space-y-6">
              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Choose Your Pack</h3>
                      <p className="text-muted-foreground">
                        Select the starter pack that aligns with your goals and budget. Higher packs offer
                        greater benefits and earning potential.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Activate Your ID</h3>
                      <p className="text-muted-foreground">
                        Complete the registration process and activate your unique distributor ID. You'll get
                        immediate access to our training portal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Receive Your Products</h3>
                      <p className="text-muted-foreground">
                        Your starter kit will be delivered to your doorstep. Experience our products firsthand
                        and learn about their benefits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Start Building</h3>
                      <p className="text-muted-foreground">
                        Begin your journey! Share products, build your team, and start earning through our
                        comprehensive compensation plan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">What You Get</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-soft hover:shadow-gold transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                    <TrendingUp className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Multiple Income Streams</h3>
                  <p className="text-muted-foreground">
                    Earn from direct sales, team performance, referrals, and bonuses
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft hover:shadow-gold transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                    <Star className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Premium Products</h3>
                  <p className="text-muted-foreground">
                    Access to world-class Ayurvedic wellness products at special rates
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft hover:shadow-gold transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                    <Check className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Complete Support</h3>
                  <p className="text-muted-foreground">
                    Training, marketing materials, and ongoing guidance from our team
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards financial freedom and wellness. Your journey starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="shadow-gold">
              Activate Your ID Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
              asChild
            >
              <Link to="/services">Learn About the Plan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
