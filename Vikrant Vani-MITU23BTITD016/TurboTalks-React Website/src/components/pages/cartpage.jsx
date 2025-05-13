import "../css/cartpage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import carlogo from "../assets/carlogo.jpg";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart2")) || [];
    setCartItems(stored);
  }, []);

  const removeItem = (productName) => {
    const updated = cartItems.filter((item) => item.name !== productName);
    setCartItems(updated);
    localStorage.setItem("cart2", JSON.stringify(updated));
  };

  return (
    <>
      <div className="navdiv">
        <header>
          <img className="logo" src={carlogo} alt="Car Blog Logo" />
        </header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/carnews">Car News</Link>
          <Link to="/carreviews">Car Reviews</Link>
          <Link to="/servicepage">Services</Link>
          <Link to="/cartpage" className="cart-count">
            Cart{cartItems.length > 0 ? ` (${cartItems.length})` : ""}
          </Link>
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
        </nav>
      </div>
      <div className="container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img
                  src={item.image}
                  alt={item.name.trim()}
                  className="item-image"
                />
                <div className="item-details">
                  <h4>{item.title || item.name.trim()}</h4>
                  <p>Rs. {item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.name)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <footer className="footer">
        © 2024 Car Blog. All rights reserved.
      </footer>
    </>
  );
}

export default CartPage;