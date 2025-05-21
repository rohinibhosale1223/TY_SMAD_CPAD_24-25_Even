import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.logoSection}>
        <span style={styles.logo}>THEGEM</span>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="#">ABOUT</Link></li>
        <li><Link to="#">NEW IN</Link></li>
        <li><Link to="#">SALE</Link></li>
        <li><Link to="#">CLOTHES</Link></li>
        <li><Link to="#">ACCESSORIES</Link></li>
        <li><Link to="#">BLOG</Link></li>
        <li><Link to="#">MAIN SHOP</Link></li>
        <li style={{ position: 'relative' }}>
          <button 
            onClick={() => navigate('/cart')}
            style={styles.cartButton}
            aria-label="Cart"
          >
            <span role="img" aria-label="cart">🛒</span>
            {cartCount > 0 && (
              <span style={styles.cartBadge}>{cartCount}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 40px',
    background: '#fff',
    borderBottom: '1px solid #eee',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  },
  logoSection: {
    fontWeight: 700,
    fontSize: '1.7rem',
    letterSpacing: '2px',
  },
  logo: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '1.7rem',
    letterSpacing: '2px',
  },
  navLinks: {
    display: 'flex',
    gap: '28px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '1rem',
  },
  cartButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    fontSize: '1.2rem',
    position: 'relative' as const,
  },
  cartBadge: {
    position: 'absolute' as const,
    top: '-8px',
    right: '-12px',
    background: '#ff4fcf',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 7px',
    fontSize: '0.8rem',
    fontWeight: 700,
    minWidth: '22px',
    textAlign: 'center' as const,
    boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
  },
};

export default Navbar; 