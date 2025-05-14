import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Truck } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../contexts/CartContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  
  // Handle empty cart
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-medium text-primary-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              You need to add items to your cart before proceeding to checkout.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              as={Link}
              to="/products"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 1) {
      setCurrentStep(2);
      window.scrollTo(0, 0);
    } else {
      // Submit order
      setIsProcessing(true);
      
      // Simulate order processing
      setTimeout(() => {
        setIsProcessing(false);
        clearCart();
        navigate('/order-confirmation');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-medium text-primary-900">Checkout</h1>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-primary-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
        </div>
        
        {/* Checkout Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center w-full max-w-md">
            <div className={`flex-1 text-center ${currentStep === 1 ? 'font-medium text-primary-800' : 'text-gray-500'}`}>
              <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full border-2 mb-2
                ${currentStep === 1 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300 bg-white text-gray-500'}`}
              >
                1
              </div>
              <span className="text-sm">Shipping</span>
            </div>
            <div className="flex-1 border-t-2 border-gray-300"></div>
            <div className={`flex-1 text-center ${currentStep === 2 ? 'font-medium text-primary-800' : 'text-gray-500'}`}>
              <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full border-2 mb-2
                ${currentStep === 2 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300 bg-white text-gray-500'}`}
              >
                2
              </div>
              <span className="text-sm">Payment</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6">
                {currentStep === 1 ? (
                  /* Shipping Information */
                  <div className="animate-fade-in">
                    <h2 className="text-lg font-medium text-primary-900 mb-6">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="input w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="input w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input w-full"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address*
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="input w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      <div className="col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City*
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="input w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State*
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="input w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code*
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                          className="input w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country*
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="input w-full"
                      >
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        variant="accent"
                        size="lg"
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Payment Information */
                  <div className="animate-fade-in">
                    <h2 className="text-lg font-medium text-primary-900 mb-6">Payment Information</h2>
                    
                    <div className="mb-6">
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card*
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        className="input w-full"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="input w-full pl-10"
                        />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiration Date*
                        </label>
                        <input
                          type="text"
                          id="expDate"
                          name="expDate"
                          value={formData.expDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                          className="input w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV*
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          required
                          className="input w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-8">
                      <Shield className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm text-gray-600">
                        Your payment information is encrypted and secure.
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="secondary"
                        onClick={() => setCurrentStep(1)}
                      >
                        Back to Shipping
                      </Button>
                      <Button 
                        type="submit" 
                        variant="accent"
                        size="lg"
                        isLoading={isProcessing}
                      >
                        {isProcessing ? 'Processing Order...' : 'Place Order'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-lg font-medium text-primary-900 mb-4">Order Summary</h2>
                
                <div className="max-h-80 overflow-y-auto mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex py-4 first:pt-0 border-b border-gray-100 last:border-0">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-sm font-medium text-primary-800">
                            <h3 className="line-clamp-1">{item.product.title}</h3>
                            <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-primary-900">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-primary-900">
                      {getTotalPrice() >= 50 ? 'Free' : '$5.99'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span className="font-medium text-primary-900">
                      ${(getTotalPrice() * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-medium text-primary-900">Total</span>
                    <span className="font-medium text-primary-900">
                      ${(getTotalPrice() + (getTotalPrice() >= 50 ? 0 : 5.99) + (getTotalPrice() * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 space-y-2">
                  <div className="flex items-center">
                    <Truck className="h-4 w-4 mr-2 text-green-600" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;