import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Signup function directly in the component
  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      alert('Email already exists');
      return false;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('authUser', JSON.stringify(newUser));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup(email, password)) {
      navigate('/'); // Redirect to home after successful signup
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-content">
          <h2 className="signup-title">Create Your Account</h2>
          <p className="signup-subtext">Join the platform to explore the world of gaming!</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="signup-button">Sign Up</button>
          </form>

          <div className="signup-footer">
            Already have an account? <a href="/login">Login here</a>
          </div>
        </div>

        <div className="signup-image">
          <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116965796/original/0d1b0d77c52830452fdf3ba75a74fa24e31520a0/do-minimalist-logo-design-for-your-business.jpg" alt="Join Gaming" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
