import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, TruckIcon, CreditCard, LifeBuoy } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { mockProducts } from '../data/mockData';

const Home: React.FC = () => {
  // Featured products (first 8 products)
  const featuredProducts = mockProducts.slice(0, 8);
  
  // Categories
  const categories = [
    { name: 'Clothing', image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750', link: '/products?category=clothing' },
    { name: 'Shoes', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750', link: '/products?category=shoes' },
    { name: 'Accessories', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750', link: '/products?category=accessories' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/6348105/pexels-photo-6348105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Elevate Your Style
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Discover our new collection and find your unique style. Quality meets luxury at Elysium.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="accent"
                size="lg"
                rightIcon={<ShoppingBag className="h-5 w-5" />}
                as={Link}
                to="/products"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                as={Link}
                to="/products?tag=new"
              >
                New Arrivals
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center text-primary-900 mb-12">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={category.link}
                className="group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/5]">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl text-white font-medium mb-2">{category.name}</h3>
                    <div className="flex items-center text-white/80 group-hover:text-accent-500 transition-colors">
                      <span className="text-sm mr-1">Shop now</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-medium text-primary-900">
              Featured Products
            </h2>
            <Link 
              to="/products" 
              className="text-primary-700 hover:text-accent-500 transition-colors flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Summer Sale
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Get up to 50% off on selected items. Limited time offer.
              </p>
              <Button 
                variant="accent"
                size="lg"
                as={Link}
                to="/products?tag=sale"
              >
                Shop the Sale
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img 
                src="https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Summer sale" 
                className="rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-accent-300 transition-colors">
              <div className="flex justify-center mb-4">
                <TruckIcon className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-accent-300 transition-colors">
              <div className="flex justify-center mb-4">
                <CreditCard className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure checkout</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-accent-300 transition-colors">
              <div className="flex justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30 days return policy</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-accent-300 transition-colors">
              <div className="flex justify-center mb-4">
                <LifeBuoy className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;