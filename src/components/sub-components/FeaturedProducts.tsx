import React from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  Award,
  Shield,
  Clock,
  Truck,
  Leaf,
  ArrowRight,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Ayurvedic Immunity Pro",
      category: "Best Seller",
      description: "Advanced immunity booster with 15+ Ayurvedic herbs for complete protection",
      price: "₹1,499",
      originalPrice: "₹1,999",
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d5ad?w=400&h=300&fit=crop",
      features: ["100% Natural", "Doctor Recommended", "Fast Acting"],
      badge: "BEST SELLER",
      badgeColor: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      name: "Premium Digestive Care",
      category: "Editor's Choice",
      description: "Complete digestive wellness with natural enzymes and herbs",
      price: "₹1,299",
      originalPrice: "₹1,599",
      rating: 4.8,
      reviews: 278,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      features: ["Gut Health", "Natural Enzymes", "Daily Use"],
      badge: "EDITOR'S CHOICE",
      badgeColor: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      name: "Radiant Skin Elixir",
      category: "Trending",
      description: "Transform your skin with ancient Ayurvedic beauty secrets",
      price: "₹1,799",
      originalPrice: "₹2,199",
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      features: ["Glowing Skin", "Anti-Aging", "Natural Glow"],
      badge: "TRENDING",
      badgeColor: "from-teal-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Joint Care Formula",
      category: "Most Trusted",
      description: "Advanced joint support with proven Ayurvedic ingredients",
      price: "₹1,899",
      originalPrice: "₹2,299",
      rating: 4.6,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?w=400&h=300&fit=crop",
      features: ["Pain Relief", "Mobility", "Natural Formula"],
      badge: "MOST TRUSTED",
      badgeColor: "from-lime-500 to-green-500",
    },
  ];

  const benefits = [
    { icon: Shield, text: "100% Ayurvedic & Natural" },
    { icon: Award, text: "Quality Certified" },
    { icon: Truck, text: "Free Shipping Over ₹999" },
    { icon: Clock, text: "Fast Delivery" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Customer Favorites
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-emerald-700 bg-clip-text text-transparent mb-6">
            Featured <span className="text-emerald-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most loved Ayurvedic solutions, trusted by thousands for their proven results
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-emerald-200/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group relative bg-white/90 backdrop-blur-sm border border-emerald-200/50 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`bg-gradient-to-r ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {product.badge}
                </div>
              </div>

              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  25% OFF
                </div>
              </div>

              <CardContent className="pt-6 pb-4">
                {/* Category */}
                <div className="text-xs font-semibold text-emerald-600 mb-2">
                  {product.category}
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-amber-500 text-amber-500"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium flex items-center gap-1"
                    >
                      <CheckCircle className="h-3 w-3" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group/btn border-0"
                  >
                    <ShoppingBag className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                    Add
                  </Button>
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="rounded-full px-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 text-white border-0"
          >
            <Leaf className="h-5 w-5 mr-2" />
            Explore All Featured Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;