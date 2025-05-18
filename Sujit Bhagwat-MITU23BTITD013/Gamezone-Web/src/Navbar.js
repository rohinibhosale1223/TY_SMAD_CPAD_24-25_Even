import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Gamezone</div>
      <ul className="navbar-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
