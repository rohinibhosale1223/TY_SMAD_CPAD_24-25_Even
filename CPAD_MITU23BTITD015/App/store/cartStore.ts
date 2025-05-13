import { useState, useEffect } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// Simplified state management for the cart
// In a real app, we would use a more robust solution like Redux, Zustand, or Context API
const createCartStore = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Update the cart total whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, item];
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    cartTotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };
};

// This is a simplified version of a global store
// In a real app, we would use proper state management libraries
const cartStore = createCartStore();

export const useCartStore = () => {
  return cartStore;
};