import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

import cardiodelight from "@/assets/cardiodelight.png";
import greengold from "@/assets/greengold.png";
import greenVitality from "@/assets/GreenVitality.png";
import painfree from "@/assets/painfree.png";
import sugarshield from "@/assets/sugarshield.png";
import bioActivator from "@/assets/BioActivator.png";
import fruitingFormulation from "@/assets/FruitingFormulation.png";
import greenBioShield from "@/assets/GreenBioShield.png";
import soilSolution from "@/assets/SoilSolution.png";
import staminex from "@/assets/Staminex.png";

const Products = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const products = [
    {
      id: "1",
      name: "Cardio Delight",
      description: "Supports heart health and improves circulation naturally.",
      price: 1299,
      pv: 10,
      category: "Health Care",
      image: cardiodelight,
      inStock: true,
    },
    {
      id: "2",
      name: "Green Gold",
      description: "Powerful antioxidant blend for daily detox and immunity.",
      price: 999,
      pv: 8,
      category: "Health Care",
      image: greengold,
      inStock: true,
    },
    {
      id: "3",
      name: "Green Vitality",
      description: "Boosts energy, stamina, and overall wellness.",
      price: 1499,
      pv: 12,
      category: "Health Care",
      image: greenVitality,
      inStock: true,
    },
    {
      id: "4",
      name: "Pain Free",
      description: "Ayurvedic solution for joint and muscle pain relief.",
      price: 1199,
      pv: 9,
      category: "Health Care",
      image: painfree,
      inStock: true,
    },
    {
      id: "5",
      name: "Sugar Shield",
      description: "Helps maintain healthy blood sugar levels.",
      price: 1399,
      pv: 11,
      category: "Health Care",
      image: sugarshield,
      inStock: true,
    },
    {
      id: "6",
      name: "Staminex",
      description: "Enhances strength, stamina, and vitality.",
      price: 1599,
      pv: 13,
      category: "Men's Care",
      image: staminex,
      inStock: true,
    },
    {
      id: "7",
      name: "Bio Activator",
      description: "Improves soil fertility and crop productivity.",
      price: 1899,
      pv: 15,
      category: "Agriculture",
      image: bioActivator,
      inStock: true,
    },
    {
      id: "8",
      name: "Fruiting Formulation",
      description: "Enhances fruit quality and yield naturally.",
      price: 1799,
      pv: 14,
      category: "Agriculture",
      image: fruitingFormulation,
      inStock: true,
    },
    {
      id: "9",
      name: "Green Bio Shield",
      description: "Protects crops from pests using organic methods.",
      price: 1699,
      pv: 13,
      category: "Agriculture",
      image: greenBioShield,
      inStock: true,
    },
    {
      id: "10",
      name: "Soil Solution",
      description: "Restores soil health and boosts sustainable farming.",
      price: 1499,
      pv: 12,
      category: "Agriculture",
      image: soilSolution,
      inStock: true,
    },
  ];

  const handleAddToCart = (product) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      pv: product.pv,
      inStock: product.inStock,
    });
    toast.success(`${product.name} added to cart`);
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">

      {/* ✅ HERO – ALL CONTENT INSIDE GREEN SECTION */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Premium Products</h1>

          <p className="text-xl opacity-90 mb-8">
            Innovation-driven solutions across wellness, agriculture, and future-ready categories—built on quality, compliance, and long-term value.
          </p>

          <ul className="space-y-3 text-left text-emerald-50 max-w-3xl mx-auto text-base">
            <li>• A diversified range of wellness and agriculture products developed with quality and compliance as core priorities</li>
            <li>• Research-driven formulations focused on consistency, safety, and responsible usage</li>
            <li>• Products designed to support evolving lifestyle, farming, and sustainability needs</li>
            <li>• Continuous innovation with future-focused products under development</li>
          </ul>

          <p className="text-sm opacity-80 mt-8">
            All offerings are aligned with applicable regulations and company policies.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                className="h-full flex flex-col shadow-lg hover:shadow-xl transition cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="h-56 bg-white flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain p-4"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <Badge className="w-fit mb-2 bg-emerald-100 text-emerald-800">
                      {product.category}
                    </Badge>

                    <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-bold text-emerald-700">
                          {formatCurrency(product.price)}
                        </span>
                        <Badge className="bg-amber-500 text-white">
                          <Sparkles className="h-3 w-3 mr-1" />
                          {product.pv} PV
                        </Badge>
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-emerald-600 to-amber-500 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Be a Part of the Change. Be a Part of Snaffel.
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Embrace natural wellness and sustainable living with Snaffel.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white"
        >
          Explore More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  );
};

export default Products;
