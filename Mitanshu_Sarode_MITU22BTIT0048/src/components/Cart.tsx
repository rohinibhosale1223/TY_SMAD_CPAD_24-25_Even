import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
          <p>Your cart is empty</p>
          <button 
            style={styles.continueShopping}
            onClick={() => navigate('/home')}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div style={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div style={styles.quantityControls}>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      style={styles.quantityButton}
                    >
                      -
                    </button>
                    <span style={styles.quantity}>{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
                <div style={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div style={styles.cartSummary}>
            <h2>Total: ${total.toFixed(2)}</h2>
            <button style={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px',
    textAlign: 'center' as const,
  },
  emptyCart: {
    textAlign: 'center' as const,
    padding: '40px',
  },
  continueShopping: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  cartItem: {
    display: 'flex',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
    gap: '20px',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover' as const,
    borderRadius: '4px',
  },
  itemDetails: {
    flex: 1,
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  quantityButton: {
    padding: '5px 10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  quantity: {
    minWidth: '30px',
    textAlign: 'center' as const,
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4f4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  itemTotal: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  cartSummary: {
    marginTop: '30px',
    padding: '20px',
    borderTop: '1px solid #eee',
    textAlign: 'right' as const,
  },
  checkoutButton: {
    padding: '12px 24px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '1.1rem',
  },
};

export default Cart; 