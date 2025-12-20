import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Award,
  Shield,
  Clock,
  Truck,
  Leaf,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Product } from "@/api/products";

/* ------------------------------------------------------------------ */
/* ALL 10 STATIC PRODUCTS (MASTER LIST) */
/* ------------------------------------------------------------------ */
const ALL_STATIC_PRODUCTS: Product[] = [
  {
    _id: "1",
    name: "Cardio Delight",
    description: "Supports heart health and blood circulation naturally.",
    category: "health",
    price: 1299,
    discountPrice: 0,
    pv: 50,
    inStock: true,
    images: ["/src/assets/cardiodelight.png"],
    features: ["Heart Care", "Ayurvedic", "Daily Use"],
  },
  {
    _id: "2",
    name: "Green Gold",
    description: "Daily wellness supplement for immunity and energy.",
    category: "health",
    price: 999,
    discountPrice: 0,
    pv: 40,
    inStock: true,
    images: ["/src/assets/greengold.png"],
    features: ["Immunity Boost", "Natural Nutrition"],
  },
  {
    _id: "3",
    name: "Green Vitality",
    description: "Boosts stamina, metabolism and overall vitality.",
    category: "men",
    price: 1199,
    discountPrice: 0,
    pv: 45,
    inStock: true,
    images: ["/src/assets/GreenVitality.png"],
    features: ["Energy", "Metabolism"],
  },
  {
    _id: "4",
    name: "Pain Free",
    description: "Relieves joint and muscle discomfort naturally.",
    category: "women",
    price: 1099,
    discountPrice: 0,
    pv: 35,
    inStock: true,
    images: ["/src/assets/painfree.png"],
    features: ["Joint Care", "Muscle Relief"],
  },
  {
    _id: "5",
    name: "Sugar Shield",
    description: "Helps maintain healthy blood sugar levels.",
    category: "health",
    price: 1399,
    discountPrice: 0,
    pv: 55,
    inStock: true,
    images: ["/src/assets/sugarshield.png"],
    features: ["Sugar Control"],
  },
  {
    _id: "6",
    name: "Bio Activator",
    description: "Enhances nutrient absorption and cellular energy.",
    category: "health",
    price: 1399,
    discountPrice: 0,
    pv: 55,
    inStock: true,
    images: ["/src/assets/BioActivator.jpeg"],
    features: ["Cell Energy"],
  },
  {
    _id: "7",
    name: "Fruiting Formulation",
    description: "Improves flowering and fruiting for plants.",
    category: "agro",
    price: 899,
    discountPrice: 0,
    pv: 30,
    inStock: true,
    images: ["/src/assets/FruitingFormulation.jpeg"],
    features: ["Plant Growth"],
  },
  {
    _id: "8",
    name: "Green Bio Shield",
    description: "Natural protection for plants and soil health.",
    category: "agro",
    price: 999,
    discountPrice: 0,
    pv: 35,
    inStock: true,
    images: ["/src/assets/GreenBioShield.jpeg"],
    features: ["Bio Protection"],
  },
  {
    _id: "9",
    name: "Soil Solution",
    description: "Improves soil fertility and crop productivity.",
    category: "agro",
    price: 799,
    discountPrice: 0,
    pv: 25,
    inStock: true,
    images: ["/src/assets/SoilSolution.png"],
    features: ["Soil Health"],
  },
  {
    _id: "10",
    name: "Staminex",
    description: "Boosts stamina, strength and endurance.",
    category: "men",
    price: 1299,
    discountPrice: 0,
    pv: 50,
    inStock: true,
    images: ["/src/assets/Staminex.png"],
    features: ["Stamina Boost"],
  },
];

/* ------------------------------------------------------------------ */
/* FEATURED PRODUCTS (FIRST 7) */
/* ------------------------------------------------------------------ */
const FEATURED_PRODUCTS = ALL_STATIC_PRODUCTS.slice(0, 7);

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(FEATURED_PRODUCTS);
  }, []);

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    addItem({
      productId: product._id,
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      image: product.images?.[0],
      pv: product.pv,
      inStock: product.inStock,
    });
    toast.success(`${product.name} added to cart`);
  };

  const benefits = [
    { icon: Shield, text: "100% Ayurvedic" },
    { icon: Award, text: "Quality Certified" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: Clock, text: "Trusted Products" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm mb-4">
            <Award className="h-4 w-4" />
            Customer Favorites
          </div>
          <h2 className="text-5xl font-bold">
            Featured <span className="text-emerald-600">Products</span>
          </h2>
        </div>

        {/* BENEFITS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{b.text}</span>
              </div>
            );
          })}
        </div>

        {/* PRODUCTS */}
        <Carousel>
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product._id}
                className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <motion.div whileHover={{ y: -6 }}>
                  <Card
                    className="cursor-pointer h-full"
                    onClick={() =>
                      navigate(`/products/${product._id}`, {
                        state: { product },
                      })
                    }
                  >
                    <div className="h-48 bg-emerald-50 flex items-center justify-center">
                      <img
                        src={product.images?.[0]}
                        alt={product.name}
                        className="h-full object-contain p-4"
                      />
                    </div>

                    <CardContent className="p-5 flex flex-col">
                      <h3 className="font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-lg font-bold text-emerald-700">
                          ₹{product.price}
                        </span>
                        <Button
                          size="sm"
                          className="rounded-full"
                          onClick={(e) => handleAddToCart(product, e)}
                        >
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            size="lg"
            className="rounded-full px-8 bg-gradient-to-r from-emerald-500 to-amber-500 text-white"
            onClick={() =>
              navigate("/products", {
                state: { products: ALL_STATIC_PRODUCTS },
              })
            }
          >
            <Leaf className="h-5 w-5 mr-2" />
            Explore All Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
