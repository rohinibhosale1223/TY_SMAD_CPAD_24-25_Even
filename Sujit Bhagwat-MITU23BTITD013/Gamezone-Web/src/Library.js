// Removed unused React import
import './Library.css';

const purchasedGames = [
  {
    id: 1,
    title: 'Elden Ring',
    description: 'Dark fantasy action RPG.',
    image: 'https://fond-decran.com/wp-content/uploads/2022/04/elden-ring-wallpaper.jpg'
  },
  {
    id: 2,
    title: 'Cyberpunk 2077',
    description: 'Futuristic open-world RPG.',
    image: 'https://4kwallpapers.com/images/wallpapers/cyberpunk-2077-2880x1800-13543.jpg'
  }
];

function Library() {
  return (
    <div className="library">
      <h2>Your Library</h2>
      <p>All your purchased games are here!</p>
      <div className="library-games">
        {purchasedGames.map(game => (
          <div className="game-card" key={game.id}>
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <button className="play-button">Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
