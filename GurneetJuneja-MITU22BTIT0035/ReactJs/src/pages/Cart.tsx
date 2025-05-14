import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, TruckIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-3xl font-medium text-primary-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              as={Link}
              to="/products"
            >
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-medium text-primary-900 mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-6">
                <div className="hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-500 mb-4">
                  <div className="md:col-span-6">Product</div>
                  <div className="md:col-span-2 text-center">Price</div>
                  <div className="md:col-span-2 text-center">Quantity</div>
                  <div className="md:col-span-2 text-right">Total</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div key={item.product.id} className="py-6 first:pt-0 last:pb-0">
                      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-6">
                        {/* Product */}
                        <div className="md:col-span-6 flex">
                          <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          
                          <div className="ml-4 flex flex-col flex-grow">
                            <h3 className="text-base font-medium text-primary-800">
                              <Link to={`/products/${item.product.id}`}>
                                {item.product.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500">{item.product.category}</p>
                            <p className="text-sm text-gray-500">Size: {item.product.sizes[0]}</p>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-accent-500 hover:text-accent-600 text-sm flex items-center w-fit mt-auto md:hidden"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="md:col-span-2 flex items-center justify-between mt-4 md:mt-0 md:justify-center">
                          <span className="md:hidden text-sm text-gray-500">Price:</span>
                          <span className="text-sm font-medium text-primary-800">
                            ${item.product.price.toFixed(2)}
                          </span>
                        </div>
                        
                        {/* Quantity */}
                        <div className="md:col-span-2 flex items-center justify-between mt-4 md:mt-0 md:justify-center">
                          <span className="md:hidden text-sm text-gray-500">Quantity:</span>
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              className="px-2 py-1 text-gray-500 hover:text-primary-800"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-2 py-1 text-sm">{item.quantity}</span>
                            <button
                              className="px-2 py-1 text-gray-500 hover:text-primary-800"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        
                        {/* Total */}
                        <div className="md:col-span-2 flex items-center justify-between mt-4 md:mt-0 md:justify-end">
                          <span className="md:hidden text-sm text-gray-500">Total:</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-primary-800 mr-2 md:mr-0">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-accent-500 hidden md:block"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
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
                className="text-primary-700 hover:text-primary-800 flex items-center"
              >
                <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-lg font-medium text-primary-900 mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-primary-900">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-primary-900">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium text-primary-900">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-medium text-primary-900">Total</span>
                    <span className="font-medium text-primary-900">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  variant="accent" 
                  size="lg" 
                  fullWidth
                  as={Link}
                  to="/checkout"
                  className="mb-4"
                >
                  Proceed to Checkout
                </Button>
                
                <div className="text-xs text-gray-500 space-y-2">
                  <div className="flex items-center">
                    <TruckIcon className="h-4 w-4 mr-2 text-green-600" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;