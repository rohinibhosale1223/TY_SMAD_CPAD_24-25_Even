import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const products: Product[] = [
    { id: 1, name: 'Smartphone', price: 699.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Laptop', price: 1299.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Headphones', price: 199.99, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Smart Watch', price: 299.99, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Tablet', price: 499.99, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh' }}>
      {/* Promo Banner */}
      <div style={styles.promoBanner}>
        <span style={styles.promoText}><b>MARCH SALE</b></span>
        <span style={styles.promoHighlight}>40% OFF!</span>
        <span style={styles.promoMsg}>Sale Is Running. Hurry Up &amp; Get Your 40% OFF!</span>
        <button style={styles.promoBtn}>Buy Now for $35</button>
      </div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>NEW <br /> COLLECTION</h1>
          <p style={styles.heroSubtitle}>There's nothing like new</p>
          <button style={styles.heroBtn}>SHOP NEW ARRIVALS</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
          alt="New Collection"
          style={styles.heroImg}
        />
      </section>
      {/* Products Grid */}
      <div style={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImg} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.price}>${product.price.toFixed(2)}</p>
            <button 
              style={styles.addToCartButton}
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  promoBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    background: 'linear-gradient(90deg, #2d2d2d 0%, #6c63ff 100%)',
    color: '#fff',
    padding: '8px 40px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1rem',
    fontWeight: 500,
  },
  promoText: {
    background: '#222',
    padding: '2px 10px',
    borderRadius: '3px',
    fontSize: '0.95rem',
  },
  promoHighlight: {
    background: '#ff4fcf',
    color: '#fff',
    padding: '2px 14px',
    borderRadius: '3px',
    fontWeight: 700,
    fontSize: '1.05rem',
  },
  promoMsg: {
    flex: 1,
    textAlign: 'center' as const,
    fontSize: '1rem',
  },
  promoBtn: {
    background: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    padding: '6px 18px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px 40px 40px 40px',
    background: '#fff',
    borderRadius: '0 0 30px 30px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    marginBottom: '40px',
    flexWrap: 'wrap' as const,
  },
  heroText: {
    flex: 1,
    minWidth: '320px',
  },
  heroTitle: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    fontSize: '3.2rem',
    margin: 0,
    letterSpacing: '2px',
    lineHeight: 1.1,
  },
  heroSubtitle: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.2rem',
    color: '#444',
    margin: '18px 0',
  },
  heroBtn: {
    background: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    padding: '12px 32px',
    fontWeight: 700,
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
  heroImg: {
    width: '380px',
    height: 'auto',
    borderRadius: '18px',
    objectFit: 'cover' as const,
    marginLeft: '40px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    minWidth: '260px',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '32px',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  productCard: {
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '12px',
    textAlign: 'center' as const,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  productImg: {
    width: '100%',
    maxWidth: '180px',
    height: '180px',
    objectFit: 'cover' as const,
    borderRadius: '8px',
    marginBottom: '18px',
  },
  productName: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '1.1rem',
    margin: '0 0 8px 0',
  },
  price: {
    fontSize: '1.1em',
    color: '#28a745',
    fontWeight: 'bold',
    marginBottom: '12px',
  },
  addToCartButton: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: 'auto',
    fontWeight: 600,
    fontSize: '1rem',
  },
};

export default Home; 