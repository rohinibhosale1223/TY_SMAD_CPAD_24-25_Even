import logo from "../assets/icons_assets/Logo .png";
import "./style/header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import basket from "../assets/icons_assets/Basket.png";
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <header className="scroll-smooth lg:grid md:grid lg:h-20 h-16 lg:grid-cols-12 gap-x-5 lg:px-16 md:px-16 px-10 content-center md:grid-cols-8 md:h-24 grid grid-cols-4">
        <img
          alt="logo"
          src={logo}
          className="lg:object-fill lg:col-start-3 lg:col-end-5 lg:order-1 md:order-2 md:col-start-4 md:col-end-6 md:w-96 order-2 col-start-2 col-span-2 justify-self-center lg:justify-self-start lg:w-44 lg:self-center"
        />
        {children}
        {!sidebar && (
          <button
            onClick={handleClick}
            className="lg:hidden md:col-start-1 md:order-1 md:text-5xl text-3xl order-1 col-start-1"
          >
            <FaBars />
          </button>
        )}
        <button className="lg:hidden md:order-3 md:col-start-8 justify-self-end order-3 col-start-4">
          <img alt="Basket icon" className="md:w-14 w-9" src={basket} />
        </button>

        {/* Optional Login Button for Large Screens */}
        <Link
          to="/Little-Lemon/login"
          className="hidden lg:block lg:col-start-11 lg:col-end-12 self-center font-semibold text-Highlight-1 hover:underline"
        >
          Login
        </Link>
      </header>

      {sidebar && (
        <aside className="scroll-smooth lg:hidden z-50 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-90 bg-primary-2">
          <button
            onClick={handleClick}
            className="lg:hidden text-Highlight-1 top-3 left-10 md:text-6xl text-4xl relative"
          >
            <FaTimes />
          </button>
          <ul className="flex items-center bg-opacity-0 bg-primary-2 flex-col mt-16">
            <li className="p-5 md:font-bold text-3xl md:text-4xl font-main text-Highlight-1">
              <Link to="/Little-Lemon/">Home</Link>
            </li>
            <li className="p-5 md:font-bold text-3xl md:text-4xl font-main text-Highlight-1">
              <Link to="/Little-Lemon/">About</Link>
            </li>
            <li className="p-5 md:font-bold text-3xl md:text-4xl font-main text-Highlight-1">
              <Link to="/Little-Lemon/">Menu</Link>
            </li>
            <li className="p-5 md:font-bold text-3xl md:text-4xl font-main text-Highlight-1">
              <Link to="/Little-Lemon/">Reservation</Link>
            </li>
            <li className="p-5 md:font-bold text-3xl md:text-4xl font-main text-Highlight-1">
              <Link to="/Little-Lemon/">Order online</Link>
            </li>
            <li     >
              <Link to="/Little-Lemon/Login">Login</Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Header;
