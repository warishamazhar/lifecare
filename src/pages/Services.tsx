import { Link } from "react-router-dom";
import { DollarSign, Users, Gift, Wallet, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Multiple Earning Sources",
      description: "Maximize your income through various revenue streams including direct sales, team commissions, and performance bonuses.",
    },
    {
      icon: Users,
      title: "Team Performance Bonuses",
      description: "Earn rewards based on your team's collective success. When your team grows, you grow together.",
    },
    {
      icon: Gift,
      title: "Attractive Discounts & Referral Commissions",
      description: "Enjoy exclusive product discounts and earn generous commissions on every successful referral.",
    },
    {
      icon: Wallet,
      title: "Repurchase Wallet Benefits",
      description: "Get 30% redeem benefits on repurchases, making it easier to maintain your business and product supply.",
    },
    {
      icon: TrendingUp,
      title: "No Capping on Higher Plans",
      description: "Unlimited earning potential with our premium plans. The sky's the limit for your success.",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Achieve milestones and receive recognition along with exclusive rewards and incentives.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Business Plan</h1>
            <p className="text-xl opacity-90">
              Your Path to Financial Freedom
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">An Attractive & Enriching Business Plan</h2>
            <p className="text-xl text-muted-foreground">
              Designed to increase income at every level, our compensation plan ensures that your dedication and hard work are rewarded fairly and consistently.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Income Breakdown */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How You Earn</h2>
            
            <div className="space-y-6">
              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Direct Selling Commission</h3>
                      <p className="text-muted-foreground">
                        Earn immediate commissions on every product you sell. The more you sell, the more you earn—it's that simple.
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
                      <h3 className="text-xl font-bold mb-2">Team Building Bonuses</h3>
                      <p className="text-muted-foreground">
                        Build and mentor your team. As they succeed, you earn bonuses based on their sales and growth.
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
                      <h3 className="text-xl font-bold mb-2">Referral Income</h3>
                      <p className="text-muted-foreground">
                        Invite others to join and earn ongoing referral commissions whenever they make purchases or sales.
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
                      <h3 className="text-xl font-bold mb-2">Performance Incentives</h3>
                      <p className="text-muted-foreground">
                        Achieve monthly and quarterly targets to unlock additional bonuses, rewards, and recognition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Repurchase Benefits</h3>
                      <p className="text-muted-foreground">
                        Enjoy 30% wallet redemption on repurchases, reducing your costs and maximizing profitability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Growth Levels</h2>
            <p className="text-xl text-muted-foreground">
              Progress through our structured levels and unlock greater rewards as you grow
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {['Starter', 'Builder', 'Leader', 'Champion', 'Elite'].map((level, index) => (
                <div
                  key={level}
                  className="flex items-center gap-4 p-6 rounded-lg bg-gradient-to-r from-muted to-background border border-border hover:border-primary transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{level}</h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our starter packs and activate your ID to begin your journey towards financial independence.
          </p>
          <Button variant="gold" size="lg" asChild className="shadow-gold">
            <Link to="/join">
              View Starter Packs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
