import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { itemCount } = useCart();
  
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link cart-link">
        Cart
        {itemCount > 0 && (
          <span className="cart-badge">
            {itemCount}
          </span>
        )}
      </Link>
      <Link to="/checkout" className="nav-link">Checkout</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
    </nav>
  );
};

export default Navbar;