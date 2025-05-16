import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'New Arrivals', path: '/products?tag=new' },
    { name: 'Sale', path: '/products?tag=sale' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-800">
            ELYSIUM
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-accent-500 ${
                    isActive ? 'text-accent-600' : 'text-primary-800'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Search & Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="input w-40 lg:w-64 pl-9 h-9 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
            
            <div className="flex items-center space-x-5">
              <NavLink to="/wishlist" className="relative text-primary-800 hover:text-accent-500 transition-colors">
                <Heart className="h-5 w-5" />
              </NavLink>
              
              <NavLink to="/account" className="text-primary-800 hover:text-accent-500 transition-colors">
                <User className="h-5 w-5" />
              </NavLink>
              
              <NavLink to="/cart" className="relative text-primary-800 hover:text-accent-500 transition-colors">
                <ShoppingBag className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <NavLink to="/cart" className="relative text-primary-800">
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </NavLink>
            <button 
              onClick={toggleMenu}
              className="text-primary-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down absolute w-full left-0 py-4 px-4">
          <form onSubmit={handleSearch} className="relative mb-6">
            <input
              type="text"
              placeholder="Search products..."
              className="input w-full pl-9 h-10 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </form>
          
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  `text-base font-medium transition-colors hover:text-accent-500 ${
                    isActive ? 'text-accent-600' : 'text-primary-800'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="flex justify-start space-x-8 pt-4 border-t border-gray-200">
            <NavLink to="/wishlist" className="flex items-center text-primary-800">
              <Heart className="h-5 w-5 mr-2" />
              <span>Wishlist</span>
            </NavLink>
            
            <NavLink to="/account" className="flex items-center text-primary-800">
              <User className="h-5 w-5 mr-2" />
              <span>Account</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;