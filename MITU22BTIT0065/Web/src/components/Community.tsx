import React from 'react';
import Header from './Header';

const photographers = [
  {
    name: 'Alice Johnson',
    bio: 'Landscape photographer with a passion for mountains and sunsets.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Brian Lee',
    bio: 'Street photographer capturing candid moments in urban life.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Carla Gomez',
    bio: 'Wildlife photographer and conservationist.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const Community: React.FC = () => (
  <>
    <Header />
    <div className="welcome-section">
      <h1>Community</h1>
      <p>Join our vibrant community of photographers! Share your work, get feedback, and connect with fellow enthusiasts.</p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {photographers.map((p) => (
          <div key={p.name} style={{ background: '#fafafa', borderRadius: 8, padding: 20, minWidth: 220, textAlign: 'center', boxShadow: '0 2px 8px #eee' }}>
            <img src={p.img} alt={p.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{p.name}</h3>
            <p style={{ color: '#444', fontSize: '1rem' }}>{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Community; 