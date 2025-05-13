import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { ArrowLeft, ShoppingCart, Star, CheckCircle, XCircle } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-blue-700 hover:text-blue-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 h-[400px] md:h-auto">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="mb-2">
              <div className="text-sm text-blue-700 font-medium">{product.category}</div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
            </div>
            
            <div className="flex items-center mt-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)} Rating</span>
            </div>
            
            <div className="my-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="my-6">
              <div className="flex items-center">
                {product.inStock ? (
                  <div className="flex items-center text-emerald-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>In Stock</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-500">
                    <XCircle className="w-5 h-5 mr-2" />
                    <span>Out of Stock</span>
                  </div>
                )}
                <div className="ml-6 text-gray-500 text-sm">SKU: TECH-{product.id}</div>
              </div>
            </div>
            
            <div className="flex items-baseline my-6">
              <span className="text-3xl font-bold text-gray-900">{formatCurrency(product.price)}</span>
              <span className="text-sm text-gray-500 line-through ml-2">{formatCurrency(product.price * 1.2)}</span>
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                Save 20%
              </span>
            </div>
            
            <div className="mt-8">
              <button 
                className={`w-full rounded-md py-3 px-4 flex items-center justify-center text-white font-medium ${
                  product.inStock 
                    ? 'bg-blue-700 hover:bg-blue-800 transition-colors' 
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                onClick={() => product.inStock && addToCart(product)}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex">
                  <span className="font-medium w-32">Brand:</span>
                  <span>TechKeeda</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Warranty:</span>
                  <span>1 Year</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Return Policy:</span>
                  <span>30 Days</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Shipping:</span>
                  <span>Free (2-3 Business Days)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;