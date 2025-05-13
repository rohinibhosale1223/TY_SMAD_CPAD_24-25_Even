import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { Star, ShoppingCart } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface ProductCardProps {
  product: Product;
  setSelectedProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, setSelectedProduct }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group"
      onClick={() => setSelectedProduct(product)}
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-blue-700 font-medium mb-1">{product.category}</p>
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          <div className="flex items-center bg-blue-50 rounded px-2 py-1">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="mt-2 text-gray-500 text-sm line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-900 font-semibold">{formatCurrency(product.price)}</span>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              product.inStock 
                ? 'bg-blue-700 text-white hover:bg-blue-800' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;