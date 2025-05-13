import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful login
      if (email && password) {
        // Store user info in localStorage or context
        localStorage.setItem('user', JSON.stringify({ email }));
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-content">
          <div className="login-image">
            <div className="image-overlay">
              <h2>Welcome Back</h2>
              <p>Sign in to access your photo collection and manage your prints</p>
            </div>
          </div>
          
          <div className="login-box">
            <h2>Sign In</h2>
            <p className="login-subtitle">Access your photo gallery account</p>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>

            <div className="social-login">
              <p>Or continue with</p>
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
              Don't have an account?{' '}
              <Link to="/register" className="register-anchor">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login; 