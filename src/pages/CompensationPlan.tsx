import { Link } from "react-router-dom";
import { DollarSign, TrendingUp, Award, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CompensationPlan = () => {
  const repurchaseLevels = Array.from({ length: 10 }, (_, i) => ({
    level: i + 1,
    commission: "10%",
  }));

  const ranks = [
    { rank: "Star", matchingBV: "50,000", royaltyBV: "5,000", cto: "0.25%" },
    { rank: "Silver", matchingBV: "1,00,000", royaltyBV: "12,000", cto: "0.50%" },
    { rank: "Gold", matchingBV: "2,50,000", royaltyBV: "30,000", cto: "1.00%" },
    { rank: "Ruby", matchingBV: "5,00,000", royaltyBV: "65,000", cto: "2.00%" },
    { rank: "Emerald", matchingBV: "10,00,000", royaltyBV: "1,40,000", cto: "3.00%" },
    { rank: "Diamond", matchingBV: "25,00,000", royaltyBV: "3,75,000", cto: "5.00%" },
    { rank: "Blue Diamond", matchingBV: "50,00,000", royaltyBV: "8,00,000", cto: "7.00%" },
    { rank: "Black Diamond", matchingBV: "1,00,00,000", royaltyBV: "17,00,000", cto: "10.00%" },
    { rank: "Crown Diamond", matchingBV: "2,50,00,000", royaltyBV: "45,00,000", cto: "15.00%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Compensation Plan</h1>
            <p className="text-xl opacity-90">
              Multiple Ways to Earn. Committed to providing an unmatched compensation plan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Welcome Bonus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Welcome Bonus: 25% on BV</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get 25% of BV as immediate credit to your bank account when your direct referral makes their first purchase (min. 1000 BV).
              </p>
              <div className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gold/10 border border-gold rounded-full">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span className="font-semibold text-gold">Payout within 10 minutes</span>
              </div>
            </div>

            {/* Visual Aid - Starter Packs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { pack: "2PV", bv: "1000 BV", bonus: "₹250" },
                { pack: "4PV", bv: "2000 BV", bonus: "₹500" },
                { pack: "10PV", bv: "5000 BV", bonus: "₹1250" },
              ].map((item, index) => (
                <Card key={index} className="border-primary/20 shadow-soft hover:shadow-gold transition-all">
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                        <span className="text-2xl font-bold text-primary-foreground">{item.pack}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">First Purchase Activation</p>
                      <p className="text-xl font-bold text-foreground">{item.bv}</p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm text-muted-foreground">Welcome Bonus</p>
                      <p className="text-2xl font-bold text-gold">{item.bonus}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Monthly Repurchase Bonus */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Monthly Repurchase Bonus</h2>
              </div>
              <div className="bg-gradient-primary text-primary-foreground inline-block px-8 py-4 rounded-lg shadow-soft mb-6">
                <p className="text-2xl font-bold">Self Repurchase Monthly ₹1000/- | Get 500 BV</p>
              </div>
              <p className="text-xl text-muted-foreground">
                100% Distribution of BV up to 10 Levels
              </p>
            </div>

            {/* 10 Levels Table */}
            <Card className="border-none shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-primary hover:bg-gradient-primary">
                      <TableHead className="text-primary-foreground text-center font-bold">Level</TableHead>
                      <TableHead className="text-primary-foreground text-center font-bold">Commission</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {repurchaseLevels.map((level) => (
                      <TableRow key={level.level} className="text-center">
                        <TableCell className="font-semibold">Level {level.level}</TableCell>
                        <TableCell className="font-bold text-gold">{level.commission}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Rank & Royalty Bonus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Rank & Royalty Bonus</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Monthly Payout | Amount Capping Per Level
              </p>
            </div>

            {/* Ranks Table */}
            <Card className="border-none shadow-soft overflow-hidden mb-8">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-primary hover:bg-gradient-primary">
                        <TableHead className="text-primary-foreground font-bold">Rank</TableHead>
                        <TableHead className="text-primary-foreground font-bold">Matching BV</TableHead>
                        <TableHead className="text-primary-foreground font-bold">Royalty Bonus BV</TableHead>
                        <TableHead className="text-primary-foreground font-bold">Company Turnover Share (CTO)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ranks.map((rank, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-bold text-foreground">{rank.rank}</TableCell>
                          <TableCell className="text-muted-foreground">{rank.matchingBV}</TableCell>
                          <TableCell className="font-semibold text-gold">{rank.royaltyBV}</TableCell>
                          <TableCell className="font-semibold text-primary">{rank.cto}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Important Disclaimer */}
            <Card className="border-gold/50 bg-gold/5 shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                      <Award className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Important Note</h3>
                    <p className="text-muted-foreground">
                      Royalty Bonus depends on company monthly sales. If monthly sales are zero then royalty bonus will be zero.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            Join now and unlock all these earning opportunities with our starter packs.
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

export default CompensationPlan;
