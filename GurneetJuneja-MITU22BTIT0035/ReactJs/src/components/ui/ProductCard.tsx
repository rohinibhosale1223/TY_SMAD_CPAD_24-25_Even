import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../types/product';
import { useToast } from './Toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast('Product added to cart', 'success');
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Wishlist functionality would be implemented here
    showToast('Product added to wishlist', 'success');
  };

  // Calculate discount percentage
  const discountPercentage = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) 
    : 0;

  return (
    <div className="card group animate-fade-in">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Sale Badge */}
          {product.compareAtPrice && (
            <span className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
              {discountPercentage}% OFF
            </span>
          )}
          
          {/* Quick Actions */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex gap-2 bg-white rounded-full shadow-md p-1">
              <button 
                onClick={handleAddToWishlist}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                title="Add to wishlist"
              >
                <Heart className="h-5 w-5 text-primary-700" />
              </button>
              <button 
                onClick={handleAddToCart}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                title="Add to cart"
              >
                <ShoppingBag className="h-5 w-5 text-primary-700" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-primary-800 mb-1 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-gray-500 mb-2">{product.category}</p>
          <div className="flex items-center">
            <span className="font-medium text-primary-900">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;