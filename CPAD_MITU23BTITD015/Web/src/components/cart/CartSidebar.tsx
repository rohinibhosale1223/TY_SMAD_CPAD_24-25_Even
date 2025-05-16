import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="px-4 pt-5 pb-4 sm:px-6 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Your Cart
              </h2>
              <button
                className="text-gray-400 hover:text-gray-500 transition-colors"
                onClick={onClose}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 px-4 sm:px-6">
              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <ShoppingBag className="w-16 h-16 mx-auto text-gray-300" />
                  <p className="mt-4 text-gray-500">Your cart is empty</p>
                  <button 
                    className="mt-4 text-blue-600 hover:text-blue-800 transition-colors flex items-center mx-auto"
                    onClick={onClose}
                  >
                    Continue Shopping
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.product.id} className="py-4 flex">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              {item.product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.category}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {formatCurrency(item.product.price)}
                          </p>
                        </div>
                        
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center border border-gray-200 rounded">
                            <button 
                              className="px-2 py-1 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-2 py-1 text-gray-900">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            type="button"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>{formatCurrency(getCartTotal())}</p>
                </div>
                <div className="flex flex-col space-y-3">
                  <button 
                    className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
                  >
                    Checkout
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button
                    className="w-full text-blue-700 border border-blue-700 py-3 px-4 rounded-md hover:bg-blue-50 transition-colors"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <button
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={onClose}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;