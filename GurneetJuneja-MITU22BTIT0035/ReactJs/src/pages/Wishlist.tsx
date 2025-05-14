import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { mockProducts } from '../data/mockData';

const Wishlist: React.FC = () => {
  const { showToast } = useToast();
  
  // Mock wishlist data (first 3 products)
  const wishlistItems = mockProducts.slice(0, 3);
  
  const handleRemoveFromWishlist = (productId: number) => {
    showToast('Product removed from wishlist', 'info');
  };
  
  const handleMoveToCart = (productId: number) => {
    showToast('Product added to cart', 'success');
  };
  
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-3xl font-medium text-primary-900 mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">
              Items added to your wishlist will be saved here for you to view later.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              as={Link}
              to="/products"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-medium text-primary-900 mb-8">My Wishlist</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <div className="hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-500 mb-4">
              <div className="md:col-span-6">Product</div>
              <div className="md:col-span-2 text-center">Price</div>
              <div className="md:col-span-4 text-right">Actions</div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {wishlistItems.map((product) => (
                <div key={product.id} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex flex-col md:grid md:grid-cols-12 md:gap-6">
                    {/* Product */}
                    <div className="md:col-span-6 flex">
                      <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div className="ml-4 flex flex-col">
                        <h3 className="text-base font-medium text-primary-800">
                          <Link to={`/products/${product.id}`}>
                            {product.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        {/* Mobile Price */}
                        <div className="md:hidden mt-2">
                          <span className="font-medium text-primary-800">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.compareAtPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              ${product.compareAtPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        {/* Mobile Actions */}
                        <div className="md:hidden flex mt-4 space-x-2">
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleMoveToCart(product.id)}
                            leftIcon={<ShoppingBag className="h-4 w-4" />}
                          >
                            Add to Cart
                          </Button>
                          <button
                            onClick={() => handleRemoveFromWishlist(product.id)}
                            className="p-2 text-gray-400 hover:text-accent-500 border border-gray-200 rounded-md"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop Price */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-center">
                      <div>
                        <span className="font-medium text-primary-800">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.compareAtPrice && (
                          <span className="block text-sm text-gray-500 line-through">
                            ${product.compareAtPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Desktop Actions */}
                    <div className="hidden md:flex md:col-span-4 items-center justify-end space-x-4">
                      <Button 
                        variant="accent" 
                        size="sm"
                        onClick={() => handleMoveToCart(product.id)}
                        leftIcon={<ShoppingBag className="h-4 w-4" />}
                      >
                        Add to Cart
                      </Button>
                      <button
                        onClick={() => handleRemoveFromWishlist(product.id)}
                        className="text-gray-400 hover:text-accent-500"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            to="/products" 
            className="text-primary-700 hover:text-primary-800"
          >
            Continue Shopping
          </Link>
          <Button
            variant="secondary"
            onClick={() => {
              // Add all to cart
              showToast('All items added to cart', 'success');
            }}
          >
            Add All to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;