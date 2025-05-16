import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/add', label: 'Add' },
  { to: '/history', label: 'History' },
  { to: '/categories', label: 'Categories' },
  { to: '/reports', label: 'Reports' },
];

const Navbar = ({ user, setUser }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-white hover:text-green-400 transition font-semibold ${
                  pathname === link.to ? 'underline text-green-400' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300 font-medium">
              Logged in as: <span className="text-white">{user}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
