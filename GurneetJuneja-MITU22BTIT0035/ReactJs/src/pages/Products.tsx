import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, X } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { mockProducts } from '../data/mockData';
import { Product } from '../types/product';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Get categories from products
  const allCategories = [...new Set(mockProducts.map(product => product.category))];
  
  // Initialize from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    
    if (category) {
      setSelectedCategories([category]);
    }
    
    if (search) {
      setSearchTerm(search);
    }
    
    // Load products
    let initialProducts = [...mockProducts];
    
    if (tag === 'new') {
      initialProducts = initialProducts.filter(p => p.tags.includes('new'));
    } else if (tag === 'sale') {
      initialProducts = initialProducts.filter(p => p.compareAtPrice !== null);
    }
    
    setProducts(initialProducts);
  }, [searchParams]);
  
  // Apply filters
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => 
        selectedCategories.includes(p.category)
      );
    }
    
    // Filter by price
    filtered = filtered.filter(p => 
      p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      );
    }
    
    // Sort products
    if (sortBy === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(filtered);
  }, [products, selectedCategories, priceRange, sortBy, searchTerm]);
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSortBy('newest');
    setSearchTerm('');
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic is already handled in the useEffect
  };

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-medium text-primary-900 mb-2">
            {searchTerm ? `Search: ${searchTerm}` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>
        
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <Button 
            onClick={() => setIsFiltersOpen(true)} 
            variant="secondary"
            leftIcon={<Filter className="h-4 w-4" />}
          >
            Filters
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium text-lg text-primary-800">Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-accent-600 hover:text-accent-700"
                >
                  Clear all
                </button>
              </div>
              
              {/* Search */}
              <div className="mb-6">
                <h4 className="font-medium text-sm text-primary-800 mb-3">Search</h4>
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="input w-full pl-9 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </form>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-sm text-primary-800 mb-3">Categories</h4>
                <div className="space-y-2">
                  {allCategories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="rounded text-accent-500 mr-2"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-sm text-primary-800 mb-3">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">${priceRange[0]}</span>
                    <span className="text-sm text-gray-600">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Sort By */}
              <div>
                <h4 className="font-medium text-sm text-primary-800 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input w-full text-sm"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters Sidebar */}
          {isFiltersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-auto animate-slide-up">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-lg text-primary-800">Filters</h3>
                  <button onClick={() => setIsFiltersOpen(false)}>
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Search */}
                <div className="mb-8">
                  <h4 className="font-medium text-sm text-primary-800 mb-3">Search</h4>
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="input w-full pl-9 text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </form>
                </div>
                
                {/* Categories */}
                <div className="mb-8">
                  <h4 className="font-medium text-sm text-primary-800 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {allCategories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="rounded text-accent-500 mr-2"
                        />
                        <span className="text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="font-medium text-sm text-primary-800 mb-3">Price Range</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">${priceRange[0]}</span>
                      <span className="text-sm text-gray-600">${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
                
                {/* Sort By */}
                <div className="mb-8">
                  <h4 className="font-medium text-sm text-primary-800 mb-3">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="input w-full text-sm"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="accent" 
                    fullWidth
                    onClick={() => setIsFiltersOpen(false)}
                  >
                    Apply Filters
                  </Button>
                  <Button 
                    variant="secondary" 
                    fullWidth
                    onClick={() => {
                      clearFilters();
                      setIsFiltersOpen(false);
                    }}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="flex-grow">
            {/* Sort By - Mobile View */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <div className="flex items-center">
                <SlidersHorizontal className="h-4 w-4 text-gray-600 mr-2" />
                <span className="text-sm text-gray-600">Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-none bg-transparent text-sm font-medium text-primary-800"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            
            {/* Active Filters */}
            {(selectedCategories.length > 0 || searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((category) => (
                  <div key={category} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-sm text-gray-700 mr-1">{category}</span>
                    <button onClick={() => toggleCategory(category)}>
                      <X className="h-3.5 w-3.5 text-gray-500" />
                    </button>
                  </div>
                ))}
                
                {searchTerm && (
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-sm text-gray-700 mr-1">"{searchTerm}"</span>
                    <button onClick={() => setSearchTerm('')}>
                      <X className="h-3.5 w-3.5 text-gray-500" />
                    </button>
                  </div>
                )}
                
                <button 
                  onClick={clearFilters}
                  className="text-sm text-accent-600 hover:text-accent-700 ml-2"
                >
                  Clear all
                </button>
              </div>
            )}
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
                <Button variant="accent" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;