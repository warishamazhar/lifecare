import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Package, Edit, Trash2, Image as ImageIcon, DollarSign, ShoppingCart, Eye } from 'lucide-react';
import { toast } from 'sonner';
import productsAPI, { Product } from '@/api/products';

const UserProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    discountPrice: '',
    category: '',
    features: '',
    images: '',
    stock: '',
    pv: '',
    dp: '',
    sp: '',
    mrp: ''
  });

  const categories = [
    'health',
    'men',
    'women',
    'kids',
    'supplements',
    'ayurvedic',
    'skincare',
    'haircare'
  ];

  useEffect(() => {
    fetchUserProducts();
  }, []);

  const fetchUserProducts = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getUserProducts();
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error: any) {
      toast.error('Failed to load products');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setProductForm({
      name: '',
      description: '',
      price: '',
      discountPrice: '',
      category: '',
      features: '',
      images: '',
      stock: '',
      pv: '',
      dp: '',
      sp: '',
      mrp: ''
    });
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const featuresArray = productForm.features.split(',').map(f => f.trim()).filter(f => f);
      const imagesArray = productForm.images.split(',').map(img => img.trim()).filter(img => img);

      const productData = {
        name: productForm.name,
        description: productForm.description,
        price: parseFloat(productForm.price),
        discountPrice: productForm.discountPrice ? parseFloat(productForm.discountPrice) : undefined,
        category: productForm.category,
        features: featuresArray,
        images: imagesArray,
        stock: parseInt(productForm.stock),
        pv: productForm.pv ? parseFloat(productForm.pv) : undefined,
        dp: productForm.dp ? parseFloat(productForm.dp) : undefined,
        sp: productForm.sp ? parseFloat(productForm.sp) : undefined,
        mrp: productForm.mrp ? parseFloat(productForm.mrp) : undefined,
      };

      const response = await productsAPI.createUserProduct(productData);
      
      if (response.success) {
        toast.success('Product created successfully!');
        setIsCreateDialogOpen(false);
        resetForm();
        fetchUserProducts();
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to create product');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    setIsSubmitting(true);

    try {
      const featuresArray = productForm.features.split(',').map(f => f.trim()).filter(f => f);
      const imagesArray = productForm.images.split(',').map(img => img.trim()).filter(img => img);

      const productData = {
        name: productForm.name,
        description: productForm.description,
        price: parseFloat(productForm.price),
        discountPrice: productForm.discountPrice ? parseFloat(productForm.discountPrice) : undefined,
        category: productForm.category,
        features: featuresArray,
        images: imagesArray,
        stock: parseInt(productForm.stock),
        pv: productForm.pv ? parseFloat(productForm.pv) : undefined,
        dp: productForm.dp ? parseFloat(productForm.dp) : undefined,
        sp: productForm.sp ? parseFloat(productForm.sp) : undefined,
        mrp: productForm.mrp ? parseFloat(productForm.mrp) : undefined,
      };

      const response = await productsAPI.updateUserProduct(editingProduct._id, productData);
      
      if (response.success) {
        toast.success('Product updated successfully!');
        setIsEditDialogOpen(false);
        setEditingProduct(null);
        resetForm();
        fetchUserProducts();
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to update product');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      const response = await productsAPI.deleteUserProduct(productId);
      
      if (response.success) {
        toast.success('Product deleted successfully!');
        fetchUserProducts();
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete product');
    }
  };

  const openEditDialog = (product: Product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      discountPrice: product.discountPrice?.toString() || '',
      category: product.category,
      features: product.features.join(', '),
      images: product.images.join(', '),
      stock: product.stock?.toString() || '0',
      pv: product.pv?.toString() || '',
      dp: product.dp?.toString() || '',
      sp: product.sp?.toString() || '',
      mrp: product.mrp?.toString() || ''
    });
    setIsEditDialogOpen(true);
  };

  const openCreateDialog = () => {
    resetForm();
    setIsCreateDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900">My Products</h1>
          <p className="text-gray-600">Manage your product listings</p>
        </div>
        
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog} className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Product</DialogTitle>
              <DialogDescription>
                Add a new product to your listings
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleCreateProduct} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={productForm.name}
                    onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={productForm.category}
                    onValueChange={(value) => setProductForm(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={productForm.description}
                  onChange={(e) => setProductForm(prev => ({ ...prev, description: e.target.value }))}
                  required
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={productForm.price}
                    onChange={(e) => setProductForm(prev => ({ ...prev, price: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discountPrice">Discount Price (₹)</Label>
                  <Input
                    id="discountPrice"
                    type="number"
                    value={productForm.discountPrice}
                    onChange={(e) => setProductForm(prev => ({ ...prev, discountPrice: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock Quantity *</Label>
                  <Input
                    id="stock"
                    type="number"
                    value={productForm.stock}
                    onChange={(e) => setProductForm(prev => ({ ...prev, stock: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pv">Product Value (PV)</Label>
                  <Input
                    id="pv"
                    type="number"
                    value={productForm.pv}
                    onChange={(e) => setProductForm(prev => ({ ...prev, pv: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dp">Direct Price (DP)</Label>
                  <Input
                    id="dp"
                    type="number"
                    value={productForm.dp}
                    onChange={(e) => setProductForm(prev => ({ ...prev, dp: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sp">Sale Price (SP)</Label>
                  <Input
                    id="sp"
                    type="number"
                    value={productForm.sp}
                    onChange={(e) => setProductForm(prev => ({ ...prev, sp: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mrp">MRP</Label>
                  <Input
                    id="mrp"
                    type="number"
                    value={productForm.mrp}
                    onChange={(e) => setProductForm(prev => ({ ...prev, mrp: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Features (comma separated)</Label>
                <Textarea
                  id="features"
                  value={productForm.features}
                  onChange={(e) => setProductForm(prev => ({ ...prev, features: e.target.value }))}
                  placeholder="Feature 1, Feature 2, Feature 3"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="images">Image URLs (comma separated)</Label>
                <Textarea
                  id="images"
                  value={productForm.images}
                  onChange={(e) => setProductForm(prev => ({ ...prev, images: e.target.value }))}
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                  rows={2}
                />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? 'Creating...' : 'Create Product'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.length}</div>
            <p className="text-xs text-muted-foreground">Products listed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Stock</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {products.filter(p => p.inStock).length}
            </div>
            <p className="text-xs text-muted-foreground">Available products</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{products.reduce((total, product) => total + product.price, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Combined product value</p>
          </CardContent>
        </Card>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            <Package className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <p className="text-lg font-medium">No products yet</p>
            <p className="text-sm mb-4">Start by adding your first product</p>
            <Button onClick={openCreateDialog} className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Product
            </Button>
          </div>
        ) : (
          products.map((product) => (
            <Card key={product._id} className="overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <ImageIcon className="h-12 w-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <Badge variant={product.inStock ? "default" : "destructive"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                  {product.discountPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.discountPrice.toLocaleString()}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                <div className="space-y-2 text-xs text-gray-500 mb-4">
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <Badge variant="outline" className="text-xs">{product.category}</Badge>
                  </div>
                  {product.stock !== undefined && (
                    <div className="flex justify-between">
                      <span>Stock:</span>
                      <span className="font-medium">{product.stock} units</span>
                    </div>
                  )}
                  {product.pv && (
                    <div className="flex justify-between">
                      <span>PV:</span>
                      <span className="font-medium">{product.pv}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEditDialog(product)}
                    className="flex-1"
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteProduct(product._id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Update your product information
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleEditProduct} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Product Name *</Label>
                <Input
                  id="edit-name"
                  value={productForm.name}
                  onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-category">Category *</Label>
                <Select
                  value={productForm.category}
                  onValueChange={(value) => setProductForm(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-description">Description *</Label>
              <Textarea
                id="edit-description"
                value={productForm.description}
                onChange={(e) => setProductForm(prev => ({ ...prev, description: e.target.value }))}
                required
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-price">Price (₹) *</Label>
                <Input
                  id="edit-price"
                  type="number"
                  value={productForm.price}
                  onChange={(e) => setProductForm(prev => ({ ...prev, price: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-discountPrice">Discount Price (₹)</Label>
                <Input
                  id="edit-discountPrice"
                  type="number"
                  value={productForm.discountPrice}
                  onChange={(e) => setProductForm(prev => ({ ...prev, discountPrice: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-stock">Stock Quantity *</Label>
                <Input
                  id="edit-stock"
                  type="number"
                  value={productForm.stock}
                  onChange={(e) => setProductForm(prev => ({ ...prev, stock: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-pv">Product Value (PV)</Label>
                <Input
                  id="edit-pv"
                  type="number"
                  value={productForm.pv}
                  onChange={(e) => setProductForm(prev => ({ ...prev, pv: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-dp">Direct Price (DP)</Label>
                <Input
                  id="edit-dp"
                  type="number"
                  value={productForm.dp}
                  onChange={(e) => setProductForm(prev => ({ ...prev, dp: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-sp">Sale Price (SP)</Label>
                <Input
                  id="edit-sp"
                  type="number"
                  value={productForm.sp}
                  onChange={(e) => setProductForm(prev => ({ ...prev, sp: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-mrp">MRP</Label>
                <Input
                  id="edit-mrp"
                  type="number"
                  value={productForm.mrp}
                  onChange={(e) => setProductForm(prev => ({ ...prev, mrp: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-features">Features (comma separated)</Label>
              <Textarea
                id="edit-features"
                value={productForm.features}
                onChange={(e) => setProductForm(prev => ({ ...prev, features: e.target.value }))}
                placeholder="Feature 1, Feature 2, Feature 3"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-images">Image URLs (comma separated)</Label>
              <Textarea
                id="edit-images"
                value={productForm.images}
                onChange={(e) => setProductForm(prev => ({ ...prev, images: e.target.value }))}
                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                rows={2}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? 'Updating...' : 'Update Product'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProducts;
