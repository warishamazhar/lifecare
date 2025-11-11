import { useState, useEffect } from "react";
import { Shield, Heart, Zap, Baby, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import productsAPI, { Product } from "@/api/products";
import { useCart } from "@/contexts/CartContext";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([
    { id: "all", name: "All Products", icon: Heart },
    { id: "health", name: "Health Care", icon: Heart },
    { id: "men", name: "Men's Care", icon: Zap },
    { id: "women", name: "Women's Care", icon: Heart },
    { id: "kids", name: "Kids Care", icon: Baby },
  ]);
  
  const { addItem } = useCart();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getProducts();
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error: any) {
      toast.error("Failed to load products");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await productsAPI.getCategories();
      if (response.success) {
        const dynamicCategories = response.data.map((cat: string) => ({
          id: cat.toLowerCase(),
          name: cat.charAt(0).toUpperCase() + cat.slice(1) + " Care",
          icon: cat === "health" ? Heart : cat === "men" ? Zap : cat === "women" ? Heart : Baby
        }));
        setCategories([
          { id: "all", name: "All Products", icon: Heart },
          ...dynamicCategories
        ]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      productId: product._id,
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      image: product.images && product.images.length > 0 ? product.images[0] : undefined,
      pv: product.pv,
      inStock: product.inStock,
    });
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category.toLowerCase() === activeCategory);

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
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="border-none shadow-soft animate-pulse">
                  <CardContent className="pt-6">
                    <div className="mb-4 h-48 rounded-lg bg-muted"></div>
                    <div className="mb-2 h-6 bg-muted rounded w-20"></div>
                    <div className="mb-2 h-6 bg-muted rounded w-3/4"></div>
                    <div className="mb-4 h-4 bg-muted rounded w-full"></div>
                    <div className="mb-4 flex gap-2">
                      <div className="h-6 bg-muted rounded w-16"></div>
                      <div className="h-6 bg-muted rounded w-12"></div>
                    </div>
                    <div className="h-10 bg-muted rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product._id}
                  className="border-none shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="pt-6">
                    {/* Product Image */}
                    <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover rounded-lg"
                        />
                      ) : (
                        <Heart className="h-16 w-16 text-primary/30" />
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                    </div>

                    {/* Product Info */}
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold text-primary">
                        ₹{product.discountPrice || product.price}
                      </span>
                      {product.discountPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.price}
                        </span>
                      )}
                      {product.pv && (
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {product.pv} PV
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded bg-muted text-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded bg-muted text-foreground">
                            +{product.features.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Stock Status */}
                    <div className="mb-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        disabled={!product.inStock}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="hero" 
                        className="flex-1"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
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
