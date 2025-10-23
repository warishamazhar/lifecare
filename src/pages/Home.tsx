import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  TrendingUp,
  Heart,
  Sparkles,
  Zap,
  Baby,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-wellness.jpg";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Home = () => {
  const highlights = [
    { icon: Shield, text: "30 Days Money Back Guarantee" },
    { icon: Award, text: "World-Class Wellness Products" },
    { icon: Heart, text: "Health, Wealth & Wellness" },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Multiple Earning Sources",
      description:
        "Earn through multiple channels with our attractive compensation plan",
    },
    {
      icon: Users,
      title: "Team Performance Bonuses",
      description: "Grow together and earn rewards based on team achievements",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "Access to world-class Ayurvedic wellness products",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Heart },
    { id: "health", name: "Health Care", icon: Heart },
    { id: "men", name: "Men's Care", icon: Zap },
    { id: "women", name: "Women's Care", icon: Heart },
    { id: "kids", name: "Kids Care", icon: Baby },
  ];

  // Latest Products array
  const Latestproducts = [
    {
      id: 1,
      name: "Immunity Booster",
      category: "health",
      description:
        "Natural immunity enhancement with pure Ayurvedic ingredients",
      features: ["100% Natural", "No Side Effects", "Certified"],
    },
    {
      id: 2,
      name: "Digestive Wellness",
      category: "health",
      description: "Promotes healthy digestion and gut health naturally",
      features: ["Herbal Formula", "Fast Acting", "Daily Use"],
    },
    {
      id: 3,
      name: "Vitality Plus",
      category: "men",
      description: "Complete wellness solution for men's health and vitality",
      features: ["Energy Boost", "Stamina Enhancement", "Natural"],
    },
    {
      id: 4,
      name: "Women's Wellness",
      category: "women",
      description:
        "Specially formulated for women's health and hormonal balance",
      features: ["Hormonal Support", "Natural Care", "Safe"],
    },
    {
      id: 5,
      name: "Hair & Skin Care",
      category: "women",
      description: "Natural beauty from within with Ayurvedic herbs",
      features: ["Glowing Skin", "Healthy Hair", "Ayurvedic"],
    },
    {
      id: 6,
      name: "Kids Growth Formula",
      category: "kids",
      description: "Support healthy growth and development naturally",
      features: ["Growth Support", "Immunity", "Tasty"],
    }
  ];

  const filteredLatestProducts =
    activeCategory === "all"
      ? Latestproducts
      : Latestproducts.filter((p) => p.category === activeCategory);

  // Featured Products array
  const Featuredproducts = [
    {
      id: 1,
      name: "Immunity Booster",
      category: "health",
      description:
        "Natural immunity enhancement with pure Ayurvedic ingredients",
      features: ["100% Natural", "No Side Effects", "Certified"],
    },
    {
      id: 2,
      name: "Digestive Wellness",
      category: "health",
      description: "Promotes healthy digestion and gut health naturally",
      features: ["Herbal Formula", "Fast Acting", "Daily Use"],
    },
    {
      id: 3,
      name: "Vitality Plus",
      category: "men",
      description: "Complete wellness solution for men's health and vitality",
      features: ["Energy Boost", "Stamina Enhancement", "Natural"],
    },
    {
      id: 4,
      name: "Women's Wellness",
      category: "women",
      description:
        "Specially formulated for women's health and hormonal balance",
      features: ["Hormonal Support", "Natural Care", "Safe"],
    },
  ];

  const filteredFeaturedProducts =
    activeCategory === "all"
      ? Featuredproducts
      : Featuredproducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Ayurvedic wellness products and natural ingredients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
              DREAMS COME TRUE
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-secondary font-semibold">
              Build Your Own Life Around Your Dreams.
            </p>
            <p className="text-lg md:text-xl mb-8 text-background/90 max-w-2xl">
              Jharkhand's 1st Direct Selling Company. Committed to providing an
              unmatched compensation plan and delivering world-class wellness
              products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild className="group">
                <Link to="/join">
                  Discover the Opportunity
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground backdrop-blur-sm"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-primary-foreground animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-6 w-6" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Byooteas Life?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join Jharkhand's premier direct selling company and unlock your
              potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every great success starts with a simple decision to try. Believe in
            yourself and take the first step today.
          </p>
          <Button variant="gold" size="lg" asChild className="shadow-gold">
            <Link to="/join">
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Letest Products Category Filter */}
      <section className="pt-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Latest Products</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "transition-all",
                    activeCategory === category.id && "shadow-soft"
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Products Grid */}
      <section className="pb-20 pt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredLatestProducts.map((product, index) => (
              <Card
                key={product.id}
                className="border-none shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="pt-6">
                  {/* Product Image Placeholder */}
                  <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary/30" />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {categories.find((c) => c.id === product.category)?.name}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-muted text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="hero" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLatestProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

            {/* Featured Products Category Filter */}
      <section className="pt-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Products</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "transition-all",
                    activeCategory === category.id && "shadow-soft"
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="pb-20 pt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFeaturedProducts.map((product, index) => (
              <Card
                key={product.id}
                className="border-none shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="pt-6">
                  {/* Product Image Placeholder */}
                  <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary/30" />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {categories.find((c) => c.id === product.category)?.name}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-muted text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="hero" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFeaturedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
