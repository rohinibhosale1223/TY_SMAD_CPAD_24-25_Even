import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-titles">
          <h1 className="main-title">OneShot</h1>
          <span className="subtitle">Your go-to Photography Blog</span>
        </div>
      </div>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Gallery</NavLink>
        <NavLink to="/tutorials" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tutorials</NavLink>
        <NavLink to="/community" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Community</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Cart
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink>
      </nav>
    </header>
  );
};

export default Header; 