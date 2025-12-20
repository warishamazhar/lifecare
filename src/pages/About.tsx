import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Shield, DollarSign, TrendingUp, Package, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Future Life Care</h1>
            <p className="text-xl opacity-90">
              Maharastra's First Direct Selling Company
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                Welcome to <span className="font-semibold text-primary">Future Life Care Pvt. Ltd.</span>, where dreams transform into reality through dedication, innovation, and the power of community.
              </p>

              <p className="text-lg leading-relaxed">
                As Maharastra's pioneering direct selling company, we stand at the intersection of wellness and opportunity. Our mission is simple yet profound: to empower individuals with premium Ayurvedic products while creating sustainable income streams through an equitable business model.
              </p>

              <Card className="my-8 border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Why We Exist</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>To provide world-class Ayurvedic wellness products that enhance health naturally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>To offer an unmatched compensation plan that rewards effort and dedication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>To build a community where success is shared and celebrated together</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>To champion the timeless wisdom of Ayurveda in modern wellness</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                We believe that everyone deserves access to products that truly nurture well-being, and everyone deserves the opportunity to build financial independence. These twin pillars—Health and Wealth—form the foundation of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Mission</h3>
                  <p className="text-muted-foreground">Empower lives through wellness and opportunity</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                    <Eye className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Vision</h3>
                  <p className="text-muted-foreground">Leading wellness revolution across India</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality</h3>
                  <p className="text-muted-foreground">Premium Ayurvedic products with guaranteed results</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p className="text-muted-foreground">Success is together for you and your teams</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Dedicated Support Team</h2>
            <p className="text-xl text-muted-foreground">
              A team of experts committed to your success and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Doctor Support", description: "Professional medical guidance and consultation." },
              { icon: Shield, title: "Grievance & Redressal", description: "Dedicated issue resolution team." },
              { icon: DollarSign, title: "Account Department", description: "Transparent payout and finance handling." },
              { icon: TrendingUp, title: "Marketing Department", description: "Business growth and promotion support." },
              { icon: Award, title: "Admin Department", description: "Complete operational assistance." },
              { icon: Package, title: "Logistic Department", description: "Safe and timely product delivery." },
            ].map((dept, index) => (
              <Card key={index} className="border-none shadow-soft">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <dept.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Mission?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Be part of a movement that's transforming lives through wellness and opportunity.
        </p>
        <Button variant="gold" size="lg" asChild>
          <Link to="/join">
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default About;
