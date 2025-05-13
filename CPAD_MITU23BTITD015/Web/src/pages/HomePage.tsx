import React from 'react';
import { blogPosts } from '../data/blogs';
import { products } from '../data/products';
import BlogCard from '../components/blog/BlogCard';
import ProductCard from '../components/products/ProductCard';
import { ArrowRight, Laptop, Cpu, ChevronRight } from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: string) => void;
  setSelectedBlog: (blog: any) => void;
  setSelectedProduct: (product: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  setActivePage, 
  setSelectedBlog,
  setSelectedProduct
}) => {
  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Your Ultimate Tech <br /> 
                <span className="text-blue-700">Resource Hub</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stay informed with the latest tech insights and shop premium gadgets. Discover expert articles and cutting-edge products all in one place.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setActivePage('blog')}
                  className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors flex items-center"
                >
                  Explore Blogs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActivePage('shop')}
                  className="border border-blue-700 text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Shop Products
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Tech devices on desk" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Articles</h2>
            <button 
              onClick={() => setActivePage('blog')}
              className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm font-medium"
            >
              View All 
              <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((blog) => (
              <BlogCard 
                key={blog.id} 
                blog={blog} 
                setSelectedBlog={setSelectedBlog}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top Products</h2>
            <button 
              onClick={() => setActivePage('shop')}
              className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm font-medium"
            >
              View All 
              <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Computing</h3>
              <p className="text-gray-600 text-sm mb-4">Laptops, Desktops, Components</p>
              <button 
                onClick={() => setActivePage('shop')}
                className="text-blue-700 hover:text-blue-900 transition-colors flex items-center justify-center mx-auto text-sm font-medium"
              >
                View Products
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Devices</h3>
              <p className="text-gray-600 text-sm mb-4">Smartphones, Tablets, Accessories</p>
              <button 
                onClick={() => setActivePage('shop')}
                className="text-blue-700 hover:text-blue-900 transition-colors flex items-center justify-center mx-auto text-sm font-medium"
              >
                View Products
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600 text-sm mb-4">Routers, Switches, Wi-Fi Systems</p>
              <button 
                onClick={() => setActivePage('shop')}
                className="text-blue-700 hover:text-blue-900 transition-colors flex items-center justify-center mx-auto text-sm font-medium"
              >
                View Products
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Components</h3>
              <p className="text-gray-600 text-sm mb-4">CPUs, GPUs, Memory, Storage</p>
              <button 
                onClick={() => setActivePage('shop')}
                className="text-blue-700 hover:text-blue-900 transition-colors flex items-center justify-center mx-auto text-sm font-medium"
              >
                View Products
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with TechKeeda
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter for the latest tech news, product releases, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md sm:rounded-l-none hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;