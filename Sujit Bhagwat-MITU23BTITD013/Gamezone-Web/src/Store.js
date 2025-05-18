import React from 'react';
import './Store.css';

function Store() {
  return (
    <div className="store">
      <h2>Game Store</h2>
      <p>No new games available in the store right now. Please check back later!</p>
      <img
        src="https://cdn.cloudflare.steamstatic.com/store/promo/wishlist/empty_state.png"
        alt="Empty store"
        className="empty-store-image"
      />
    </div>
  );
}

export default Store;
