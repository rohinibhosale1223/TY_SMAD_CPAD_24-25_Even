import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

// Product images with proper aspect ratios and fallbacks
const PRODUCT_IMAGES = {
  1: 'https://m.media-amazon.com/images/I/61+Q6Rh+O6L._SL1500_.jpg', // Headphones
  2: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg', // Smartphone
  3: 'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg', // Laptop
  4: 'https://m.media-amazon.com/images/I/61Bv0K5iQ0L._SL1500_.jpg', // Smart Watch
  5: 'https://m.media-amazon.com/images/I/61Bv0K5iQ0L._SL1500_.jpg', // Speaker
  6: 'https://m.media-amazon.com/images/I/61Bv0K5iQ0L._SL1500_.jpg'  // Tablet
};

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'Atharv',
    email: 'hellO@gmail.com',
    address: 'Dahiwadi. India',
    phone: '+91 9130833395'
  });
  
  // Sample orders data
  const [orders] = useState([
    {
      id: 1,
      products: [
        { id: 2, name: "Smartphone", quantity: 1, price: 59999 },
        { id: 4, name: "Smart Watch", quantity: 2, price: 14999 }
      ],
      date: "2023-05-15",
      total: 89997,
      status: "Delivered",
      trackingId: "TRK12345678"
    },
    {
      id: 2,
      products: [
        { id: 3, name: "Laptop", quantity: 1, price: 89990 }
      ],
      date: "2023-06-20",
      total: 89990,
      status: "Shipped",
      trackingId: "TRK87654321"
    }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'details'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save to backend here
    setEditMode(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleReorder = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (order) {
      // In a real app, you would add these products to cart
      console.log('Reordering:', order);
      navigate('/cart');
    }
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleViewDetails = (orderId) => {
    // Navigate to order details page
    console.log('Viewing order:', orderId);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Account</h1>
        <div className="profile-tabs">
          <button 
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            My Orders
          </button>
          <button 
            className={activeTab === 'details' ? 'active' : ''}
            onClick={() => setActiveTab('details')}
          >
            Account Details
          </button>
        </div>
      </div>

      {activeTab === 'details' ? (
        <div className="account-details">
          <div className="section-header">
            <h2>Personal Information</h2>
            {!editMode && (
              <button 
                className="edit-btn"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          {editMode ? (
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                  disabled // Typically email shouldn't be changed
                />
              </div>
              
              <div className="form-group">
                <label>Shipping Address</label>
                <textarea
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-info">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">{profile.name}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{profile.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Phone:</span>
                <span className="info-value">{profile.phone}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Address:</span>
                <span className="info-value">{profile.address}</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="orders-history">
          <h2>My Orders</h2>
          
          {orders.length === 0 ? (
            <div className="empty-orders">
              <p>You haven't placed any orders yet.</p>
              <button 
                className="shop-btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-summary">
                    <div className="order-meta">
                      <div>
                        <strong>Order #{order.id}</strong>
                        <span>Placed on {new Date(order.date).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div className={`order-status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </div>
                    </div>
                    
                    <div className="order-products">
                      {order.products.map(product => (
                        <div key={product.id} className="product-item">
                          <div className="product-image">
                            <img 
                              src={PRODUCT_IMAGES[product.id]} 
                              alt={product.name}
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/100?text=Product+Image';
                              }}
                            />
                          </div>
                          <div className="product-info">
                            <h4>{product.name}</h4>
                            <p>Quantity: {product.quantity}</p>
                            <p>Price: {formatPrice(product.price)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="order-footer">
                    <div className="order-total">
                      <span>Total:</span>
                      <strong>{formatPrice(order.total)}</strong>
                    </div>
                    <div className="order-actions">
                      <button 
                        className="details-btn"
                        onClick={() => handleViewDetails(order.id)}
                      >
                        View Details
                      </button>
                      <button 
                        className="reorder-btn"
                        onClick={() => handleReorder(order.id)}
                      >
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;