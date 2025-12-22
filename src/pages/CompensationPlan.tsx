import { Link } from "react-router-dom";
import { DollarSign, TrendingUp, Award, ArrowRight, CheckCircle } from "lucide-react";
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

      {/* HERO */}
      <section className="bg-gradient-primary text-primary-foreground py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Compensation Plan</h1>
        <p className="text-xl opacity-90">
          Multiple Ways to Earn. Transparent. Ethical. Powerful.
        </p>
      </section>

      {/* WELCOME BONUS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-2">
            <DollarSign className="h-8 w-8 text-primary" />
            Welcome Bonus – 25% BV
          </h2>
          <p className="text-muted-foreground mb-6">
            Earn 25% BV instantly when your direct referral activates.
          </p>
          <div className="inline-flex gap-2 items-center px-6 py-3 bg-gold/10 border border-gold rounded-full">
            <CheckCircle className="h-5 w-5 text-gold" />
            <span className="font-semibold text-gold">Payout in 10 minutes</span>
          </div>
        </div>
      </section>

      {/* REPURCHASE BONUS */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-6 flex justify-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Monthly Repurchase Bonus
          </h2>

          <Card className="shadow-soft">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-primary">
                    <TableHead className="text-white text-center">Level</TableHead>
                    <TableHead className="text-white text-center">Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {repurchaseLevels.map((lvl) => (
                    <TableRow key={lvl.level}>
                      <TableCell className="text-center font-semibold">
                        Level {lvl.level}
                      </TableCell>
                      <TableCell className="text-center font-bold text-gold">
                        {lvl.commission}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RANK BONUS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6 flex justify-center gap-2">
            <Award className="h-8 w-8 text-primary" />
            Rank & Royalty Bonus
          </h2>

          <Card className="shadow-soft">
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-primary">
                    <TableHead className="text-white">Rank</TableHead>
                    <TableHead className="text-white">Matching BV</TableHead>
                    <TableHead className="text-white">Royalty BV</TableHead>
                    <TableHead className="text-white">CTO</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ranks.map((r, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-bold">{r.rank}</TableCell>
                      <TableCell>{r.matchingBV}</TableCell>
                      <TableCell className="text-gold font-semibold">{r.royaltyBV}</TableCell>
                      <TableCell className="font-semibold">{r.cto}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* LEGAL & POLICY */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">

          {[
            {
              title: "Data Protection & Security",
              text: "We use industry-standard security to protect your personal data. While no system is 100% secure, users are advised to safeguard their login credentials."
            },
            {
              title: "Cookies Policy",
              text: "Cookies help analyze traffic, save preferences, and improve user experience. You may disable cookies via browser settings."
            },
            {
              title: "User Rights",
              text: "Users may access, update, or request deletion of personal data subject to legal feasibility."
            },
            {
              title: "Terms & Conditions",
              text: "Participation does not guarantee income. Success depends on individual effort, ethics, and leadership."
            },
            {
              title: "Refund & Cancellation Policy",
              text: "Refunds apply only for verified defects or cancellations before dispatch. Processing takes 7–10 business days."
            },
            {
              title: "Website Disclaimer",
              text: "Products are not intended to diagnose, treat, cure, or prevent disease. Results vary individually."
            },
          ].map((item, i) => (
            <Card key={i} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {item.text}
              </CardContent>
            </Card>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
        <Button variant="gold" size="lg" asChild>
          <Link to="/join">
            Join Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

    </div>
  );
};

export default CompensationPlan;
