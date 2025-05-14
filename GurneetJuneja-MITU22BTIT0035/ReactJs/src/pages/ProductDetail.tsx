import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Truck, 
  Clock, 
  ArrowLeft, 
  ChevronRight, 
  Heart, 
  Share2,
  MinusCircle,
  PlusCircle,
  ShoppingBag
} from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { mockProducts } from '../data/mockData';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../components/ui/Toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setLoading(true);
    // In a real app, you would fetch the product from an API
    const productId = Number(id);
    const foundProduct = mockProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
      setSelectedSize(foundProduct.sizes[0]);
      
      // Get related products from the same category
      const related = mockProducts
        .filter(p => p.category === foundProduct.category && p.id !== productId)
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      // Product not found
      navigate('/products');
    }
    
    setLoading(false);
  }, [id, navigate]);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      showToast('Added to cart successfully', 'success');
    }
  };
  
  const handleAddToWishlist = () => {
    showToast('Added to wishlist', 'success');
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-primary-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-primary-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button variant="accent" as={Link} to="/products">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }
  
  // Calculate discount percentage
  const discountPercentage = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary-700">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-primary-700">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/products?category=${product.category}`} className="hover:text-primary-700">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-primary-700 truncate">{product.title}</span>
        </div>
        
        {/* Back button (mobile only) */}
        <button 
          onClick={() => navigate(-1)}
          className="md:hidden flex items-center text-primary-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-6">
            {/* Product Images - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="space-y-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-md overflow-hidden cursor-pointer
                      ${selectedImage === image ? 'border-accent-500 ring-2 ring-accent-200' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.title} - view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Product Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
                <img 
                  src={selectedImage} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Sale Badge */}
                {product.compareAtPrice && (
                  <span className="absolute top-4 left-4 bg-accent-500 text-white text-sm font-medium px-2 py-1 rounded">
                    {discountPercentage}% OFF
                  </span>
                )}
              </div>
              
              {/* Product Thumbnails - Mobile */}
              <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-md overflow-hidden cursor-pointer flex-shrink-0
                      ${selectedImage === image ? 'border-accent-500 ring-2 ring-accent-200' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.title} - view ${index + 1}`}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl md:text-3xl font-medium text-primary-900 mb-2">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`h-4 w-4 ${star <= product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.reviewCount} reviews
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-medium text-primary-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary-800 mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors
                        ${selectedSize === size
                          ? 'bg-primary-700 text-white border-primary-700'
                          : 'border-gray-300 text-gray-700 hover:border-primary-500'
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-primary-800 mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="text-gray-500 hover:text-primary-700 disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <MinusCircle className="h-6 w-6" />
                  </button>
                  <span className="mx-4 w-10 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="text-gray-500 hover:text-primary-700"
                  >
                    <PlusCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="accent" 
                  size="lg" 
                  fullWidth
                  leftIcon={<ShoppingBag className="h-5 w-5" />}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  leftIcon={<Heart className="h-5 w-5" />}
                  onClick={handleAddToWishlist}
                >
                  Wishlist
                </Button>
              </div>
              
              {/* Product Info */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="h-5 w-5 mr-2 text-green-600" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <button className="flex items-center text-primary-700 hover:text-primary-800">
                  <Share2 className="h-4 w-4 mr-2" />
                  <span>Share this product</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-primary-900 mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;