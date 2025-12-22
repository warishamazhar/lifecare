import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

const demoProducts = [
  { id: 1, name: "Herbal Vital Plus", category: "Wellness", price: 1299 },
  { id: 2, name: "Green Energy Boost", category: "Wellness", price: 999 },
  { id: 3, name: "Immunity Guard", category: "Health Care", price: 1399 },
  { id: 4, name: "Organic Soil Booster", category: "Agriculture", price: 1899 },
  { id: 5, name: "Crop Growth Activator", category: "Agriculture", price: 1799 },
  { id: 6, name: "Daily Detox Formula", category: "Wellness", price: 1199 },
  { id: 7, name: "Plant Protection Shield", category: "Agriculture", price: 1699 },
  { id: 8, name: "Natural Strength Tonic", category: "Men’s Care", price: 1599 },
  { id: 9, name: "Eco Yield Enhancer", category: "Agriculture", price: 1999 },
  { id: 10, name: "Advanced Wellness Mix", category: "Health Care", price: 1499 },
];

const NewArrivals = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest additions—crafted with innovation, quality, and future-ready performance in mind.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {demoProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full shadow-soft hover:shadow-lg transition">
                <CardContent className="p-4 flex flex-col h-full">
                  {/* Placeholder Image */}
                  <div className="h-40 bg-muted flex items-center justify-center rounded mb-4">
                    <span className="text-sm text-muted-foreground">
                      Image Coming Soon
                    </span>
                  </div>

                  <Badge className="w-fit mb-2">
                    {product.category}
                  </Badge>

                  <h3 className="font-semibold mb-1">
                    {product.name}
                  </h3>

                  <p className="text-lg font-bold text-emerald-700 mb-4">
                    ₹{product.price}
                  </p>

                  <Button
                    className="mt-auto w-full bg-gradient-to-r from-emerald-600 to-amber-500 text-white"
                    disabled
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
