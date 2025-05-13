import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';
import BlogDetail from './components/blog/BlogDetail';
import ProductDetail from './components/products/ProductDetail';
import { CartProvider } from './contexts/CartContext';
import CartSidebar from './components/cart/CartSidebar';
import { BlogPost, Product } from './types';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);

  const renderContent = () => {
    if (selectedBlog) {
      return (
        <BlogDetail 
          blog={selectedBlog} 
          onBack={() => setSelectedBlog(null)} 
        />
      );
    }

    if (selectedProduct) {
      return (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
      );
    }

    switch (activePage) {
      case 'blog':
        return <BlogPage setSelectedBlog={setSelectedBlog} />;
      case 'shop':
        return <ShopPage setSelectedProduct={setSelectedProduct} />;
      default:
        return (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedBlog={setSelectedBlog} 
            setSelectedProduct={setSelectedProduct} 
          />
        );
    }
  };

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header 
            setActivePage={setActivePage} 
            activePage={activePage} 
            setShowCart={setShowCart} 
          />
          <Navbar />
          <main className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={renderContent()} />
              <Route path="/blog" element={renderContent()} />
              <Route path="/shop" element={renderContent()} />
            </Routes>
          </main>
          <Footer />
          <CartSidebar 
            isOpen={showCart} 
            onClose={() => setShowCart(false)} 
          />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;