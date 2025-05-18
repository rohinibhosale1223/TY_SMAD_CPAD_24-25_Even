// src/componant/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validEmail = 'sai@gmail.com';
  const validPassword = '1234';

  const handleLogin = () => {
    if (email.trim() === validEmail && password.trim() === validPassword) {
      setMessage('✅ You are logged in successfully!');
      setTimeout(() => {
        navigate('/Little-Lemon/');
      }, 2000); // wait 2 seconds before redirecting
    } else {
      setMessage('❌ Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleLogin}>Login</button>
      {message && (
        <p className={message.includes('successfully') ? 'success-msg' : 'error-msg'}>
          {message}
        </p>
      )}
    </div>
  );
}

export default LoginPage;
