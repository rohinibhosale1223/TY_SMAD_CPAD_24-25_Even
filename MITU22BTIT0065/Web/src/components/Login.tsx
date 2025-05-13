import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/'); // Navigate to gallery page after successful login
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
              <h2>Welcome Back!</h2>
              <p>Access your photography collection and continue your creative journey</p>
            </div>
          </div>
          <div className="login-box">
            <h2>Sign In to OneShot</h2>
            <p className="login-subtitle">Your Photography Community</p>
            <form onSubmit={handleSubmit}>
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <label htmlFor="email">Email</label>
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
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              <button type="submit" className="login-button">
                Sign In
              </button>
              <div className="social-login">
                <p>Or continue with</p>
                <div className="social-buttons">
                  <button type="button" className="social-button google">
                    Google
                  </button>
                  <button type="button" className="social-button facebook">
                    Facebook
                  </button>
                </div>
              </div>
              <p className="register-link">
                Don't have an account?{' '}
                <a href="/register" className="register-anchor">
                  Create an account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login; 