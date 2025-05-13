import "../css/home.css";
import { Link } from "react-router-dom";
import carlogo from "../assets/carlogo.jpg";
import rolls from "../assets/rolls.jpg";
import rs6 from "../assets/rs6.jpeg";
import macan from "../assets/macan.webp";
import bmwi7 from "../assets/bmwi7.webp";
import maybach from "../assets/maybach.jpeg";
import lexus from "../assets/lexus.jpeg";
import maybachsclass from "../assets/maybachsclass.jpg";
import gt3 from "../assets/911gt3.webp";
import m5cs from "../assets/bmwm5.jpg";
import jesko from "../assets/jesko.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <div className="navdiv">
        <header>
          <img className="logo" src={carlogo} alt="TurboTalks Logo" />
        </header>
        <nav>
          <Link to="/home" id="home">
            Home
          </Link>
          <Link to="/carnews">Car News</Link>
          <Link to="/carreviews">Car Reviews</Link>
          <Link to="/servicepage">Services</Link>
          <Link to="/cartpage" className="cart-count">
            Cart
          </Link>
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
        </nav>
      </div>
      <div className="image-container">
        <div className="container main-content">
          <p>Welcome to our car blog!</p>
          <h2 className="fc">Featured Cars 2024</h2>
          <div className="car-section">
            <div className="car">
              <img src={rolls} alt="Car 1" />
              <p>
                The Rolls-Royce Spectre is the first all-electric car from the
                luxury carmaker. It is a sort of spiritual successor to the
                Phantom and launched in India at an ex-showroom price of Rs. 7.5
                crore!
              </p>
            </div>
            <div className="car">
              <img src={rs6} alt="Car 2" />
              <p>
                Audi is doubling down on the superwagon's success with a new
                trim level called the RS6 Avant Performance.
              </p>
            </div>
            <div className="car">
              <img src={macan} alt="Car 3" />
              <p>
                The latest Porsche Macan gets cosmetic upgrades as well as a
                slightly tweaked interior design with added features. The Macan
                is one of the best driving SUVs money can buy.
              </p>
            </div>
            <div className="car">
              <img src={bmwi7} alt="Car 4" />
              <p>
                With the i7, alongside the feat of electrifying the 7 Series,
                the brand has also offered an exuberant occupant experience.
              </p>
            </div>
            <div className="car">
              <img src={maybach} alt="Car 5" />
              <p>
                The Mercedes-Maybach GLS 600 doesn't just do opulence in spades,
                it can also outpace most sports cars with its AMG GT-derived
                4-litre twin-turbo V8.{" "}
              </p>
            </div>
            <div className="car">
              <img src={lexus} alt="Car 6" />
              <p>
                Although the Lexus LX befits an ultra-luxury segment, it
                commands an uncommon trait of being brute/tough.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opinions-section">
        <h2>Opinions on Cars</h2>
        <div className="car-opinion">
          <img src={maybachsclass} alt="Car 1" />
          <div className="opinion-info">
            <h3>Mercedes-Maybach S Class</h3>
            <p>
              An expert opinion on the features and performance of
              Mercedes-Maybach S Class. The Mercedes Benz S-class is a high-end
              luxury vehicle that is usually purchased through authorized
              dealerships. The buying experience is expected to be smooth and
              professional, with a focus on personalization and customization of
              the vehicle according to the customer's preferences.
            </p>
          </div>
        </div>
        <div className="car-opinion">
          <img src={gt3} alt="Car 2" />
          <div className="opinion-info">
            <h3>Porsche 911 GT3rs</h3>
            <p>
              An expert opinion on the features and performance of Porsche 911
              GT3rs. One thing has certainly been true of the five previous GT3
              RS generations (not counting the mid-life updates) - they've all
              been true class leaders. In every case, contemporary rivals from
              Ferrari, Lamborghini and everyone else wouldn't see which way the
              flat-six beasts went on a racetrack, thanks to powerful engines,
              low weight figures and enough aerodynamic features to make a
              fighter pilot jealous.
            </p>
          </div>
        </div>
        <div className="car-opinion">
          <img src={m5cs} alt="Car 3" />
          <div className="opinion-info">
            <h3>BMW M5 CS</h3>
            <p>
              An expert opinion on the features and performance of BMW M5 CS.
              Forget about the fact the M5 CS only gets 7kW more power than the
              regular M5 Competition. It's totally and utterly irrelevant,
              because you can't quantify this car by numbers. It is, quite
              simply, the best all-round sports sedan I've ever driven, even
              though it's difficult to call out any one aspect of the car that
              stands out more than any other.
            </p>
          </div>
        </div>
        <div className="car-opinion">
          <img src={jesko} alt="Car 4" />
          <div className="opinion-info">
            <h3>Koenigsegg Jesko Absolut</h3>
            <p>
              An expert opinion on the features and performance of Koenigsegg
              Jesko Absolut Accompanying this mighty power is the groundbreaking
              9-speed Koenigsegg Light Speed Transmission (LST) system, a
              revelation in automotive technology, ensuring that the Jesko not
              only sets new benchmarks in horsepower but also in acceleration
              and engineering prowess. The Jesko doesn't just excel in power but
              also in finesse, with advanced aerodynamics that generate over
              1000 kg of downforce, cementing its status as an ultimate track
              weapon.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p>
          © 2025 by Vikrant Vani |{" "}
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

export default HomePage;
