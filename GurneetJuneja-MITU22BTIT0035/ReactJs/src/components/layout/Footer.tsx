import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-medium mb-4">ELYSIUM</h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Discover premium quality products with our curated collection. 
              Elevating your shopping experience since 2022.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=new-arrivals" className="text-gray-300 hover:text-white transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?category=best-sellers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/products?category=sale" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sale Items
                </Link>
              </li>
              <li>
                <Link to="/products?category=clothing" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300 text-sm">123 Fashion Street, CA 90210, United States</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-300 mr-2" />
                <span className="text-gray-300 text-sm">+1 (888) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-300 mr-2" />
                <span className="text-gray-300 text-sm">support@elysium.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="max-w-xl mx-auto text-center mb-6">
            <h5 className="text-lg font-medium mb-2">Subscribe to our newsletter</h5>
            <p className="text-gray-300 text-sm mb-4">Get updates on new arrivals, special offers and more.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow input bg-primary-800 border-primary-700 text-white placeholder-gray-400 focus:ring-accent-500"
              />
              <button type="submit" className="btn-accent ml-2 px-4 py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {currentYear} Elysium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;