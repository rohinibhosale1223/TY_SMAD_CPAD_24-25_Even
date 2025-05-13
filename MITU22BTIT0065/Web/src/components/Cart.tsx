import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

interface CartItem {
  id: string;
  title: string;
  url: string;
  price: number;
  quantity: number;
  size: string;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  // Mock cart data - in a real app, this would come from a cart context or state management
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: '1',
      title: 'Beautiful Landscape',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      price: 29.99,
      quantity: 1,
      size: '8x10'
    },
    {
      id: '2',
      title: 'City Lights',
      url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      price: 39.99,
      quantity: 2,
      size: '11x14'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/gallery')} className="continue-shopping">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.url} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>Size: {item.size}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="item-total">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeItem(item.id)} className="remove-button">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (8%):</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart; 