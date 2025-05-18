// src/componant/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem('userEmail', email.trim());
    localStorage.setItem('userPassword', password.trim());
    setMessage('✅ Your account has been successfully created!');

    setTimeout(() => {
      navigate('/Little-Lemon/login');
    }, 2000);
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
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
        placeholder="Create a password"
      />
      <button onClick={handleSignup}>Create Account</button>
      {message && <p className="success-msg">{message}</p>}
    </div>
  );
}

export default SignupPage;
