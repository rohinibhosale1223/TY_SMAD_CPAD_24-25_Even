import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import './Login.css'; // We'll reuse the login styles

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful registration
      if (formData.name && formData.email && formData.password) {
        // Store user info in localStorage or context
        localStorage.setItem('user', JSON.stringify({ 
          name: formData.name,
          email: formData.email 
        }));
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-content">
          <div className="login-image">
            <div className="image-overlay">
              <h2>Join Our Community</h2>
              <p>Create an account to start sharing and printing your photos</p>
            </div>
          </div>
          
          <div className="login-box">
            <h2>Create Account</h2>
            <p className="login-subtitle">Start your photo gallery journey</p>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button type="submit" className="login-button">
                Create Account
              </button>
            </form>

            <div className="social-login">
              <p>Or sign up with</p>
              <div className="social-buttons">
                <button className="social-button">
                  <i className="fab fa-google"></i> Google
                </button>
                <button className="social-button">
                  <i className="fab fa-facebook"></i> Facebook
                </button>
              </div>
            </div>

            <p className="register-link">
              Already have an account?{' '}
              <Link to="/login" className="register-anchor">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register; 