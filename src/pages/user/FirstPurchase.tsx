import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Package, CreditCard, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import productsAPI, { Product } from '@/api/products';
import { authAPI } from '@/api/auth';

const FirstPurchase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);
  const [walletData, setWalletData] = useState({
    purchaseWallet: 0,
    commissionWallet: 0,
    referralWallet: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchWalletData();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getProducts();
      if (response.success && response.data) {
        setProducts(response.data || []);
      } else {
        setProducts([]);
      }
    } catch (error: any) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchWalletData = async () => {
    try {
      const response = await authAPI.getProfile();
      if (response.success && response.data && response.data.wallets) {
        setWalletData(response.data.wallets);
      }
    } catch (error: any) {
      console.error('Failed to load wallet data:', error);
    }
  };

  const handlePurchase = async (product: Product) => {
    try {
      setPurchasing(product._id);
      
      const finalPrice = product.discountPrice || product.price;
      
      // Check if user has sufficient wallet balance
      if (walletData.purchaseWallet < finalPrice) {
        toast.error(`Insufficient wallet balance. You need ₹${(finalPrice - walletData.purchaseWallet).toFixed(2)} more.`);
        navigate('/user/wallet');
        return;
      }

      // Create order with wallet payment
      const orderData = {
        products: [{ productId: product._id, quantity: 1 }],
        totalAmount: finalPrice,
        shippingAddress: {
          fullName: '', // Will be filled in checkout
          address: '',
          city: '',
          state: '',
          pincode: '',
          phone: ''
        }
      };

      // Navigate to checkout with product pre-selected
      navigate('/checkout', { 
        state: { 
          products: [{ ...product, quantity: 1 }],
          isFirstPurchase: true
        } 
      });
      
    } catch (error: any) {
      console.error('Purchase error:', error);
      toast.error(error.message || 'Failed to process purchase');
    } finally {
      setPurchasing(null);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      {/* Wallet Balance Banner */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Available Purchase Wallet Balance</p>
              <p className="text-3xl font-bold text-primary">
                {formatCurrency(walletData.purchaseWallet)}
              </p>
            </div>
            {walletData.purchaseWallet === 0 && (
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => navigate('/user/wallet')}
                >
                  Add Funds
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center space-x-3">
        <ShoppingCart className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">First Purchase</h1>
      </div>
      
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Make Your First Purchase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Welcome to Byoliva! Complete your first purchase to activate your account and start earning.
          </p>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="border-gray-200 animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-gray-200 rounded-lg mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-medium">No products available</p>
              <p className="text-sm">Products will appear here once they are added</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const finalPrice = product.discountPrice || product.price;
                const hasEnoughBalance = walletData.purchaseWallet >= finalPrice;
                const isPurchasing = purchasing === product._id;
                
                // Determine card color based on category or use default
                const getCardColor = () => {
                  const cat = product.category?.toLowerCase();
                  if (cat?.includes('starter') || cat?.includes('basic')) return 'green';
                  if (cat?.includes('premium') || cat?.includes('pro')) return 'blue';
                  if (cat?.includes('elite') || cat?.includes('gold')) return 'purple';
                  return 'green'; // default
                };
                
                const cardColor = getCardColor();
                const colorClasses = {
                  green: 'border-green-200 bg-green-50/50 text-green-600',
                  blue: 'border-blue-200 bg-blue-50/50 text-blue-600',
                  purple: 'border-purple-200 bg-purple-50/50 text-purple-600'
                };
                
                const buttonClasses = {
                  green: 'bg-green-600 hover:bg-green-700',
                  blue: 'bg-blue-600 hover:bg-blue-700',
                  purple: 'bg-purple-600 hover:bg-purple-700'
                };

                return (
                  <Card 
                    key={product._id} 
                    className={colorClasses[cardColor]}
                  >
                    <CardContent className="p-6 text-center">
                      {product.images && product.images.length > 0 ? (
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="h-24 w-24 object-cover rounded-lg mx-auto mb-4"
                        />
                      ) : (
                        <div className="flex justify-center mb-4">
                          <Package className={`h-12 w-12 ${cardColor === 'green' ? 'text-green-600' : cardColor === 'blue' ? 'text-blue-600' : 'text-purple-600'} mx-auto`} />
                        </div>
                      )}
                      
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      
                      {product.description && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      
                      <div className="mb-4">
                        {product.discountPrice ? (
                          <div className="space-y-1">
                            <p className="text-2xl font-bold text-primary">
                              {formatCurrency(product.discountPrice)}
                            </p>
                            <p className="text-sm text-gray-500 line-through">
                              {formatCurrency(product.price)}
                            </p>
                          </div>
                        ) : (
                          <p className="text-2xl font-bold text-primary">
                            {formatCurrency(product.price)}
                          </p>
                        )}
                      </div>

                      {product.pv && (
                        <Badge variant="outline" className="mb-3">
                          PV: {product.pv}
                        </Badge>
                      )}

                      {!hasEnoughBalance && (
                        <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                          Insufficient balance
                        </div>
                      )}

                      <Button 
                        className={`w-full ${buttonClasses[cardColor]}`}
                        onClick={() => handlePurchase(product)}
                        disabled={isPurchasing || !hasEnoughBalance}
                      >
                        {isPurchasing ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard className="h-4 w-4 mr-2" />
                            Purchase Now
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
          
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
            <p className="text-yellow-700 text-sm">
              Your first purchase activates your account and qualifies you for the compensation plan. 
              Choose the package that best fits your goals and budget. You can pay using your purchase wallet balance.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FirstPurchase;