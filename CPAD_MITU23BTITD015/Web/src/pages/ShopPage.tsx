import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { Search, Filter, ShoppingBag } from 'lucide-react';

interface ShopPageProps {
  setSelectedProduct: (product: any) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ setSelectedProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showInStock, setShowInStock] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    const matchesStock = showInStock ? product.inStock : true;
    
    return matchesSearch && matchesCategory && matchesStock;
  }).sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0; // 'featured' - no sorting
  });

  return (
    <div className="pt-20 pb-16">
      {/* Shop Hero */}
      <section className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-blue-800 p-2 rounded-full mb-4">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tech Products Shop
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Premium tech gadgets and accessories for professionals and enthusiasts
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar - Desktop */}
            <div className="hidden md:block w-64 mr-8">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`category-${category}`}
                          type="radio"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 text-blue-700 focus:ring-blue-500"
                        />
                        <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Availability</h3>
                  <div className="flex items-center">
                    <input
                      id="in-stock"
                      type="checkbox"
                      checked={showInStock}
                      onChange={() => setShowInStock(!showInStock)}
                      className="h-4 w-4 text-blue-700 focus:ring-blue-500"
                    />
                    <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
                      In Stock Only
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters & Sorting
              </button>
            </div>

            {/* Mobile Filters */}
            {isFilterOpen && (
              <div className="md:hidden mb-6 bg-white rounded-lg shadow-sm p-4">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-xs ${
                          selectedCategory === category
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      id="mobile-in-stock"
                      type="checkbox"
                      checked={showInStock}
                      onChange={() => setShowInStock(!showInStock)}
                      className="h-4 w-4 text-blue-700 focus:ring-blue-500"
                    />
                    <label htmlFor="mobile-in-stock" className="ml-2 text-sm text-gray-700">
                      In Stock Only
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found. Try a different search term or filter.</p>
                </div>
              ) : (
                <>
                  <p className="text-gray-500 mb-6">{filteredProducts.length} products found</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard 
                        key={product.id} 
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;