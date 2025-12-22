import { Card, CardContent } from "@/components/ui/card";

const Earning = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-6">
            Multiple Earning Sources
          </h2>
          <p className="text-xl text-muted-foreground">
            Our business model offers multiple earning opportunities through product-based activities and performance-driven programs, designed for long-term growth and sustainability.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="border-primary/20 shadow-soft">
            <CardContent className="pt-6">
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li>• Direct referral-based incentives</li>
                <li>• Team performance–linked benefits</li>
                <li>• Matching and productivity-based rewards</li>
                <li>• Product repurchase–driven advantages</li>
                <li>• Leadership recognition and rank-based rewards</li>
                <li>• Periodic promotional and performance-based programs</li>
              </ul>

              <p className="text-sm text-muted-foreground mt-8">
                All earnings are performance-based and subject to company policies. No income or returns are guaranteed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Earning;
