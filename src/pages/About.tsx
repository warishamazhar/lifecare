import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Award,
  Users,
  Shield,
  TrendingUp,
  Leaf,
  Heart,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Future Life Care & Biotech Pvt. Ltd.
            </h1>
            <p className="text-xl opacity-90">
              Transforming Agriculture, Wellness & Human Empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Every great journey begins with a vision — a vision to create meaningful
            change and redefine the way we live, grow, and care.
          </p>

          <p className="text-xl leading-relaxed mt-6 text-muted-foreground">
            Future Life Care & Biotech Pvt. Ltd. was born from a powerful dream —
            to transform lives through Agriculture, Wellness, and Human Empowerment.
          </p>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Agriculture for a Sustainable Tomorrow
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Agriculture is more than an industry — it is the heartbeat of our nation.
            At Future Life Care & Biotech Pvt. Ltd., we are reimagining this vital sector
            through organic innovation and sustainable excellence.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Our advanced range of bio-fertilizers, plant growth enhancers, and
            eco-friendly agri-solutions enrich soil health, enhance crop productivity,
            and protect our planet.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            By empowering farmers with knowledge, trust, and natural cultivation
            practices, we are sowing the seeds of a profitable, resilient, and
            sustainable future.
          </p>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Wellness for a Better Tomorrow
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            True success begins with good health — and good health begins with balance.
            We redefine wellness through nature-powered, science-backed solutions that
            nurture the body, mind, and spirit.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Our range of natural supplements and wellness innovations strengthen
            immunity, enhance vitality, and support healthier living from within.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Because wellness is not just about adding years to life — it’s about adding
            life, joy, and purpose to every year.
          </p>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Creating Leaders. Inspiring Change.
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            We are more than an organization — we are a movement for transformation.
            Through innovative business models and leadership development, we empower
            individuals to achieve financial independence and personal mastery.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            By building a strong community of changemakers, we help people uplift
            themselves, their families, and society at large.
          </p>
        </div>
      </section>

      {/* Transforming Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Transforming Journey
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            From hope to health. From vision to transformation.
            This is not just a business — it is a journey that turns ordinary lives
            into extraordinary stories of growth, success, and happiness.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Together, we are not just living. We are transforming.
          </p>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            A Message from Our Founder
          </h2>

          <Card className="shadow-soft">
            <CardContent className="pt-8 space-y-6 text-muted-foreground">
              <p>
                “The future is not somewhere ahead of us — the future begins here,
                with you, with us, today.”
              </p>

              <p>
                Future Life Care & Biotech Pvt. Ltd. is a promise — that no dream is
                too small, no life is ordinary, and no goal is beyond reach when
                we walk together.
              </p>

              <p className="font-semibold text-foreground">
                With heartfelt regards,
                <br />
                Mr. Rahul D. Dhekale
                <br />
                Founder & CEO
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Together, We Grow. Together, We Rise.
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Because the future isn’t something we wait for — the future is something we create.
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
