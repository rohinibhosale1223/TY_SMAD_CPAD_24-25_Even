import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  const wishlistGames = [
    {
      id: 1,
      title: 'The Last of Us Part II',
      image: 'https://eskipaper.com/images/the-last-of-us-wallpaper-7.jpg'
    },
    {
      id: 2,
      title: 'Horizon Forbidden West',
      image: 'https://gameranx.com/wp-content/uploads/2022/01/horizon-forbidden-west-1-scaled.jpg'
    },
    {
      id: 3,
      title: 'Ghost of Tsushima',
      image: 'https://gmedia.playstation.com/is/image/SIEPDC/ghost-of-tsushima-master-image-en-24jun21?$native$'
    }
  ];

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <p>Games you wish to own someday.</p>
      <div className="wishlist-grid">
        {wishlistGames.map(game => (
          <div className="wishlist-card" key={game.id}>
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
