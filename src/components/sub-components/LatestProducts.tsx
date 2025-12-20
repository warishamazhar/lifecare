import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/* LOCAL PRODUCT TYPE (FOR STATIC DATA) */
/* ------------------------------------------------------------------ */
interface StaticProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discountPrice: number;
  pv: number;
  inStock: boolean;
  images: string[];
}

/* ------------------------------------------------------------------ */
/* STATIC PRODUCTS (YOUR 10 PRODUCTS) */
/* ------------------------------------------------------------------ */
const STATIC_PRODUCTS: StaticProduct[] = [
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
  },
  {
    _id: "6",
    name: "Bio Activator",
    description: "Enhances nutrient absorption and cellular energy.",
    category: "health",
    price: 1499,
    discountPrice: 0,
    pv: 60,
    inStock: true,
    images: ["/src/assets/BioActivator.png"],
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
    images: ["/src/assets/FruitingFormulation.png"],
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
    images: ["/src/assets/GreenBioShield.png"],
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
  },
];

const LatestProducts = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [products, setProducts] = useState<StaticProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(STATIC_PRODUCTS);
      setLoading(false);
    }, 400);
  }, []);

  const handleAddToCart = (product: StaticProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      productId: product._id,
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      image: product.images[0],
      pv: product.pv,
      inStock: product.inStock,
    });
    toast.success(`${product.name} added to cart`);
  };

  const handleExploreProduct = (product: StaticProduct) => {
    navigate(`/products/${product._id}`, { state: { product } });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border text-emerald-700 mb-4">
            <Sparkles className="h-4 w-4" />
            New Arrivals
          </div>
          <h2 className="text-4xl font-bold">
            Latest <span className="text-emerald-600">Products</span>
          </h2>
        </div>

        {/* PRODUCTS */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Carousel>
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="cursor-pointer h-full">
                      <div className="h-48 bg-emerald-50 flex items-center justify-center">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full object-contain p-4"
                        />
                      </div>

                      <CardContent className="p-4 flex flex-col">
                        <h3 className="font-bold mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="flex justify-between items-center mt-auto">
                          <span className="font-bold text-emerald-700">
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

                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 rounded-full"
                          onClick={() => handleExploreProduct(product)}
                        >
                          Explore Product
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default LatestProducts;
