import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const featuredPhotos = [
  {
    id: '1',
    title: 'Mountain Sunset',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    photographer: 'John Doe',
    category: 'Landscape'
  },
  {
    id: '2',
    title: 'Urban Life',
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    photographer: 'Jane Smith',
    category: 'Street'
  },
  {
    id: '3',
    title: 'Wildlife Moment',
    url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    photographer: 'Mike Johnson',
    category: 'Wildlife'
  }
];

const categories = [
  {
    name: 'Landscape',
    description: 'Capture the beauty of nature',
    icon: '🏔️'
  },
  {
    name: 'Portrait',
    description: 'Professional portrait photography',
    icon: '👤'
  },
  {
    name: 'Street',
    description: 'Urban life and city moments',
    icon: '🌆'
  },
  {
    name: 'Wildlife',
    description: 'Animals in their natural habitat',
    icon: '🦁'
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to OneShot</h1>
            <p>Discover the art of photography through our curated collection of stunning images</p>
            <button onClick={() => navigate('/gallery')} className="cta-button">
              Explore Gallery
            </button>
          </div>
        </section>

        {/* Featured Photos Section */}
        <section className="featured-section">
          <h2>Featured Photos</h2>
          <div className="featured-grid">
            {featuredPhotos.map(photo => (
              <div key={photo.id} className="featured-card">
                <img src={photo.url} alt={photo.title} />
                <div className="featured-info">
                  <h3>{photo.title}</h3>
                  <p>By {photo.photographer}</p>
                  <span className="category-tag">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <h2>Photo Categories</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.name} className="category-card">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose OneShot?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>High Quality Prints</h3>
              <p>Professional grade prints with vibrant colors and sharp details</p>
            </div>
            <div className="feature-card">
              <h3>Fast Shipping</h3>
              <p>Quick delivery with careful packaging to ensure your prints arrive safely</p>
            </div>
            <div className="feature-card">
              <h3>Expert Photographers</h3>
              <p>Work from talented photographers around the world</p>
            </div>
            <div className="feature-card">
              <h3>Custom Sizes</h3>
              <p>Choose from various sizes to fit your space perfectly</p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for new photos, tips, and exclusive offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 