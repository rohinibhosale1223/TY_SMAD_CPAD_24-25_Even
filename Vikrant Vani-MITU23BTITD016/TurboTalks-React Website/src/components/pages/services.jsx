import "../css/services.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carlogo from "../assets/carlogo.jpg";
import brakeImg from "../assets/brake.jpeg";
import oilImg from "../assets/oil.webp";
import clutchImg from "../assets/clutch.jpeg";
import filterImg from "../assets/filter.jpeg";
import mirrorImg from "../assets/mirror.png";
import steerImg from "../assets/steer.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const products = [
  {
    name: "brake",
    title: "Brake",
    price: 2400,
    image: brakeImg,
    desc: "These are steel backing plates which are bound to the surface that faces the brake discs. Brake pads convert the kinetic energy to thermal through friction.",
  },
  {
    name: "oil",
    title: "Engine Oil",
    price: 1000,
    image: oilImg,
    desc: "Fully Synthetic motor oil - It features the dynamic “Flexi-Molecule Technology” that constantly adapt to boost protection, when your engine needs it most.",
  },
  {
    name: "clutch",
    title: "Clutch",
    price: 4300,
    image: clutchImg,
    desc: "The clutch disc, also known as the clutch drive plate, is a part placed between the pressure plate of the clutch cover and the flywheel. When the car clutch is engaged, the disc is squeezed between the friction surfaces of these two parts.",
  },
  {
    name: "filter",
    title: "Filter",
    price: 2100,
    image: filterImg,
    desc: "Car filter is essentially important as it guards engine from dust, dirt, sand and other contaminants.",
  },
  {
    name: "mirror",
    title: "Side Mirror",
    price: 1870,
    image: mirrorImg,
    desc: "Far Vision Car Side Door Mirrors are your most affordable OE replacement mirrors and they are manufactured from the highest quality, corrosion-resistant materials to withstand all types of weather.",
  },
  {
    name: "steer",
    title: "Steering Wheel",
    price: 5600,
    image: steerImg,
    desc: "Made from leather with carbon fiber inserts, the steering wheel exudes luxury and sophistication.",
  },
];

function ServicesPage() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart2")) || [];
    setCart(stored);
    setCartCount(stored.length);
  }, []);

  const addProduct = (product) => {
    if (!cart.find((e) => e.name === product.name)) {
      const newCart = [...cart, product];
      setCart(newCart);
      setCartCount(newCart.length);
      localStorage.setItem("cart2", JSON.stringify(newCart));
    }
  };

  return (
    <>
      <div className="navdiv">
        <header>
          <img className="logo" src={carlogo} alt="Car Blog Logo" />
        </header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/carnews">Car News</Link>
          <Link to="/carreviews">Car Reviews</Link>
          <Link to="/servicepage" id="service">
            Services
          </Link>
          <Link to="/cartpage" className="cart-count">
            Cart{cartCount > 0 ? ` (${cartCount})` : ""}
          </Link>
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
        </nav>
      </div>
      <div className="product-cart">
        {products.map((product) => (
          <div className="product" key={product.name}>
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} />
            <p>{product.desc}</p>
            <p>Rs. {product.price}</p>
            <button onClick={() => addProduct(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <footer>
        <p>
          © 2024 by Vikrant Vani |{" "}
          <a href="mailto:workwithvikrant0111@gmail.com">
            workwithvikrant0111@gmail.com
          </a>
        </p>
        <ul className="socials">
          <li>
            <a
              href="https://www.linkedin.com/in/vikrant-vani-96b329209/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/codeby-vikrant"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_.vikrant_10._/"
              target="_blank"
              rel="noopener noreferrer"
              title="instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default ServicesPage;
