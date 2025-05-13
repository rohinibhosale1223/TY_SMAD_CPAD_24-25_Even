import React from 'react';
import Header from './Header';

const About: React.FC = () => (
  <>
    <Header />
    <div className="welcome-section">
      <h1>About Us</h1>
      <p>OneShot is your go-to photography blog and community. Our mission is to inspire, educate, and connect photographers of all levels.</p>
      <p>We believe in the power of visual storytelling and strive to provide a platform where creativity can flourish. Thank you for being a part of our journey!</p>
      <ul>
        <li>Founded: 2024</li>
        <li>Team: Passionate photographers & educators</li>
        <li>Contact: info@oneshot.com</li>
      </ul>
    </div>
  </>
);

export default About; 