import { Link } from 'react-router-dom';
import products from '../data/products';
import '../styles/App.css';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page">
      <h1>Welcome to Our Store</h1>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <Link 
                to={`/products/${product.id}`} 
                className="view-details-btn"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link to="/products" className="view-all-btn">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Home;