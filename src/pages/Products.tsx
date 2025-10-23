import { useState } from "react";
import { Shield, Heart, Zap, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Heart },
    { id: "health", name: "Health Care", icon: Heart },
    { id: "men", name: "Men's Care", icon: Zap },
    { id: "women", name: "Women's Care", icon: Heart },
    { id: "kids", name: "Kids Care", icon: Baby },
  ];

  const products = [
    {
      id: 1,
      name: "Immunity Booster",
      category: "health",
      description: "Natural immunity enhancement with pure Ayurvedic ingredients",
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
      description: "Specially formulated for women's health and hormonal balance",
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
    },
    {
      id: 7,
      name: "Joint Care",
      category: "health",
      description: "Natural relief and support for healthy joints",
      features: ["Pain Relief", "Mobility", "Herbal"],
    },
    {
      id: 8,
      name: "Energy Boost",
      category: "men",
      description: "Natural energy and performance enhancement",
      features: ["Stamina", "Focus", "Natural"],
    },
    {
      id: 9,
      name: "Prenatal Care",
      category: "women",
      description: "Essential nutrition for expecting mothers",
      features: ["Complete Nutrition", "Safe", "Doctor Recommended"],
    },
    {
      id: 10,
      name: "Kids Immunity",
      category: "kids",
      description: "Strengthen your child's natural defenses",
      features: ["Strong Immunity", "Natural", "Delicious"],
    },
    {
      id: 11,
      name: "Stress Relief",
      category: "health",
      description: "Natural stress management and mental wellness",
      features: ["Calming", "Mind Balance", "Herbal"],
    },
    {
      id: 12,
      name: "Weight Management",
      category: "health",
      description: "Natural support for healthy weight management",
      features: ["Metabolism Boost", "Natural", "Effective"],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Ayurvedic Products</h1>
            <p className="text-xl opacity-90">
              World-Class Wellness Products Backed by Ancient Wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Badge */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-foreground">
            <Shield className="h-8 w-8 text-primary" />
            <p className="text-lg font-semibold">
              30 Days Money Back & Replacement Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background sticky top-16 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
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

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Our Products?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Natural</h3>
                <p className="text-muted-foreground">
                  Pure Ayurvedic ingredients with no harmful chemicals
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
                <p className="text-muted-foreground">
                  All products are tested and certified for safety
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary mx-auto">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  Backed by traditional wisdom and modern research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community and get access to premium Ayurvedic products with exclusive partner benefits.
          </p>
          <Button variant="gold" size="lg" className="shadow-gold">
            Become a Partner
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
