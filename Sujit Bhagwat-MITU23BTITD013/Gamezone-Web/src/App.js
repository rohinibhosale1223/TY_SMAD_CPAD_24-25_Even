import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import Wishlist from './Wishlist';
import Checkout from './Checkout';
import Store from './Store'; // Importing Store component
import Library from './Library'; // Importing Library component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/store" element={<Store />} /> {/* Route for Store */}
        <Route path="/library" element={<Library />} /> {/* Route for Library */}
      </Routes>
    </Router>
  );
}

export default App;
