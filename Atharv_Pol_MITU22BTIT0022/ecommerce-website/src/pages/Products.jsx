import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import '../styles/Products.css';

const Products = () => {
  const [productList] = useState(products);
  const { addToCart } = useCart();

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-actions">
              <Link to={`/products/${product.id}`} className="details-btn">
                View Details
              </Link>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;