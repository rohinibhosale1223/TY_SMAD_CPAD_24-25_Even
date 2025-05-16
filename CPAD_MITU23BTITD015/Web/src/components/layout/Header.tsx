import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { ShoppingCart, Menu, X, Search, Laptop } from 'lucide-react';

interface HeaderProps {
  setActivePage: (page: string) => void;
  activePage: string;
  setShowCart: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setActivePage, activePage, setShowCart }) => {
  const { getCartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => {
              setActivePage('home');
              setIsMobileMenuOpen(false);
            }}
          >
            <Laptop className="w-8 h-8 text-blue-800" />
            <span className="ml-2 text-xl font-bold text-blue-900">TechKeeda</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setActivePage('home')} 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                activePage === 'home' ? 'text-blue-700' : 'text-gray-700'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => setActivePage('blog')} 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                activePage === 'blog' ? 'text-blue-700' : 'text-gray-700'
              }`}
            >
              Blog
            </button>
            <button 
              onClick={() => setActivePage('shop')} 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                activePage === 'shop' ? 'text-blue-700' : 'text-gray-700'
              }`}
            >
              Shop
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="hover:text-blue-700 transition-colors text-gray-700"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:text-blue-700 transition-colors text-gray-700"
              onClick={() => setShowCart(true)}
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-100 p-4 transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  setActivePage('home');
                  setIsMobileMenuOpen(false);
                }} 
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  activePage === 'home' ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setActivePage('blog');
                  setIsMobileMenuOpen(false);
                }} 
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  activePage === 'blog' ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                Blog
              </button>
              <button 
                onClick={() => {
                  setActivePage('shop');
                  setIsMobileMenuOpen(false);
                }} 
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  activePage === 'shop' ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                Shop
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;