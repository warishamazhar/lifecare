import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Zap,
  Baby,
  Star,
  ShoppingBag,
  Eye,
  Leaf,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import productsAPI, { Product } from "@/api/products";
import { useCart } from "@/contexts/CartContext";

// Types
interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

const LatestProducts = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});
  const { addItem } = useCart();

  const categories: Category[] = [
    { id: "all", name: "All Products", icon: Sparkles, color: "from-emerald-500 to-teal-500" },
    { id: "health", name: "Health Care", icon: Heart, color: "from-green-500 to-emerald-500" },
    { id: "men", name: "Men's Care", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { id: "women", name: "Women's Care", icon: Heart, color: "from-pink-500 to-rose-500" },
    { id: "kids", name: "Kids Care", icon: Baby, color: "from-lime-500 to-green-500" },
  ];

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  const fetchLatestProducts = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getProducts();
      if (response.success) {
        // Get latest 8 products (or all if less than 8)
        setProducts(response.data.slice(0, 8));
      }
    } catch (error: any) {
      console.error("Error fetching latest products:", error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  // Filter products based on active category
  const filteredLatestProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category.toLowerCase() === activeCategory);

  // Handle category filter click
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    toast.success(`Showing ${categoryId === "all" ? "all" : categories.find(c => c.id === categoryId)?.name} products`);
  };

  // Handle product quick view
  const handleQuickView = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setLoadingStates(prev => ({ ...prev, [product._id]: true }));
    
    // Simulate API call
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [product._id]: false }));
      toast.info(`Quick view: ${product.name}`, {
        description: "Product details would open in a modal",
        action: {
          label: "View Full",
          onClick: () => handleProductClick(product)
        },
      });
    }, 1000);
  };

  // Handle add to cart
  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.inStock) {
      toast.error("Product is out of stock");
      return;
    }
    
    setLoadingStates(prev => ({ ...prev, [product._id]: true }));
    
    addItem({
      productId: product._id,
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      image: product.images && product.images.length > 0 ? product.images[0] : undefined,
      pv: product.pv,
      inStock: product.inStock,
    });
    
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [product._id]: false }));
    }, 500);
  };

  // Handle product click (navigate to product detail)
  const handleProductClick = (product: Product) => {
    navigate(`/products/${product._id}`, {
      state: { product }
    });
  };

  // Handle explore product
  const handleExploreProduct = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    handleProductClick(product);
  };

  // Handle view all products
  const handleViewAllProducts = () => {
    navigate("/products");
    toast.info("Navigating to all products page");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            New Arrivals
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-emerald-700 bg-clip-text text-transparent mb-6">
            Latest <span className="text-emerald-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our newest Ayurvedic wellness solutions crafted with ancient wisdom and modern science
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  "relative group transition-all duration-300 rounded-2xl px-6 py-3 font-medium",
                  activeCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-0`
                    : "bg-white/70 backdrop-blur-sm border-gray-200/50 hover:shadow-lg hover:-translate-y-1 text-gray-700"
                )}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
                {activeCategory === category.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></div>
                )}
              </Button>
            );
          })}
        </div>

        {/* Products Grid */}
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
            {filteredLatestProducts.map((product, index) => (
              <Card
                key={product._id}
                className="group relative bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product._id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleProductClick(product)}
              >
                {/* Popular Badge - Show for first few products */}
                {index < 3 && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star className="h-3 w-3 fill-current" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
                      <Leaf className="h-16 w-16 text-emerald-300" />
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
                      <Button 
                        size="sm" 
                        className="rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white border-0"
                        onClick={(e) => handleQuickView(product, e)}
                        disabled={loadingStates[product._id]}
                      >
                        {loadingStates[product._id] ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-800 border-t-transparent" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button 
                        size="sm" 
                        className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white border-0"
                        onClick={(e) => handleAddToCart(product, e)}
                        disabled={loadingStates[product._id] || !product.inStock}
                      >
                        {loadingStates[product._id] ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          <ShoppingBag className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="pt-6 pb-4">
                  {/* Category */}
                  <div className="mb-3">
                    <span className={cn(
                      "inline-block px-3 py-1 text-xs font-medium rounded-full border",
                      product.category.toLowerCase() === "health" && "bg-emerald-50 text-emerald-700 border-emerald-200",
                      product.category.toLowerCase() === "men" && "bg-blue-50 text-blue-700 border-blue-200",
                      product.category.toLowerCase() === "women" && "bg-pink-50 text-pink-700 border-pink-200",
                      product.category.toLowerCase() === "kids" && "bg-lime-50 text-lime-700 border-lime-200",
                      "bg-gray-50 text-gray-700 border-gray-200"
                    )}>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>

                  {/* Product Name */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-emerald-700">
                        ₹{product.discountPrice || product.price}
                      </span>
                      {product.discountPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.price}
                        </span>
                      )}
                      {product.pv && (
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {product.pv} PV
                        </span>
                      )}
                    </div>
                    {/* Stock Status - Commented out */}
                    {/* <div className={`text-xs px-2 py-1 rounded ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div> */}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    className="w-full rounded-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 group/btn"
                    onClick={(e) => handleExploreProduct(product, e)}
                  >
                    <span>Explore Product</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredLatestProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
              <Leaf className="h-12 w-12 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-6">
              We're constantly adding new products. Check back soon!
            </p>
            <Button 
              variant="outline" 
              onClick={() => handleCategoryClick("all")}
              className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              View All Products
            </Button>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
            onClick={handleViewAllProducts}
          >
            View All Products
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;