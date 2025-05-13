import React from 'react';
import Header from './Header';

const Tutorials: React.FC = () => (
  <>
    <Header />
    <div className="welcome-section">
      <h1>Tutorials</h1>
      <p>Learn new photography techniques, tips, and tricks from our curated tutorials. Whether you're a beginner or a pro, there's something here for everyone!</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=7b6lGk5G4xM" target="_blank" rel="noopener noreferrer">Getting Started with DSLR Cameras (YouTube)</a></li>
        <li><a href="https://www.youtube.com/watch?v=7ZVyNjKSr0M" target="_blank" rel="noopener noreferrer">Understanding Exposure and Lighting (YouTube)</a></li>
        <li><a href="https://www.youtube.com/watch?v=7wqgU2FQK0w" target="_blank" rel="noopener noreferrer">Editing Basics: Make Your Photos Pop (YouTube)</a></li>
        <li><a href="https://www.youtube.com/watch?v=1J0TQ3Qd5iA" target="_blank" rel="noopener noreferrer">Creative Composition Ideas (YouTube)</a></li>
      </ul>
    </div>
  </>
);

export default Tutorials; 