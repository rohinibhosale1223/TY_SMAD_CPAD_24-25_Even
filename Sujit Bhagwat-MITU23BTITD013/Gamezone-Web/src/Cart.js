import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = (game) => {
    navigate('/checkout', { state: { game } });
  };

return (
    <div className="cart">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            cartItems.map((game, index) => (
                <div className="cart-item" key={index}>
                    <img src={game.image} alt={game.title} />
                    <div className="cart-info">
                        <h3>{game.title}</h3>
                        <p>{game.description}</p>
                        <p className="price">{game.price}</p>
                        <div className="cart-buttons">
                            <button onClick={() => handleCheckout(game)}>Buy Now</button>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>
);
}

export default Cart;
