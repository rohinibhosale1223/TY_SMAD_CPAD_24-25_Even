import "../css/carnews.css";
import { Link } from "react-router-dom";
import carlogo from "../assets/carlogo.jpg";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import news4 from "../assets/news4.png";
import news5 from "../assets/news5.png";
import news6 from "../assets/news6.png";
import news7 from "../assets/news7.png";
import news8 from "../assets/news8.png";
import news9 from "../assets/news9.png";
import news10 from "../assets/news10.png";
import news11 from "../assets/news11.png";
import news12 from "../assets/news12.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function CarNewsPage() {
  return (
    <>
      <div className="navdiv">
        <header>
          <img className="logo" src={carlogo} alt="TurboTalks Logo" />
        </header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/carnews" id="news">
            Car News
          </Link>
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
      <div className="main-content">
        <p>
          Stay updated with the latest car news, reviews, and features right
          here.
        </p>
      </div>
      <div className="car-section">
        <div className="car">
          <p className="date">Published On Mar 25, 2024 09:00:00 AM</p>
          <img src={news1} alt="Car Example" />
          <p className="title">
            Opinion: Automotive advertising - fact or fiction?
          </p>
          <p>
            It's high time the automobile industry tightens up its advertising
            claim
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Mar 18, 2024 11:27:00 AM</p>
          <img src={news2} alt="Car Example 2" />
          <p className="title">
            Opinion: India's new EV policy offers car brands a level playing
            field
          </p>
          <p>
            New and existing players will be able to benefit from this policy
            and other schem
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Mar 16, 2024 09:00:00 AM</p>
          <img src={news3} alt="Car Example" />
          <p className="title">Opinion: Highway speed limits need rethinking</p>
          <p>
            Low speed limits on a 6-lane road result in dangerous braking in
            front of speed cameras.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Mar 09, 2024 09:00:00 AM</p>
          <img src={news4} alt="Car Example" />
          <p className="title">Opinion: Cold brakes; beware</p>
          <p>
            Cold brakes that haven't been used or warmed up can catch you
            unaware.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Mar 02, 2024 11:26:00 AM</p>
          <img src={news5} alt="Car Example" />
          <p className="title">
            Opinion: Maruti's upcoming hybrid tech is a masterstroke
          </p>
          <p>
            Maruti Suzuki's upcoming series hybrids, such as the Swift, Fronx
            and Baleno, could technically be defined as EVs, allowing them to
            qualify for a lower GST slab.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Feb 04, 2024 09:00:00 AM</p>
          <img src={news6} alt="Car Example" />
          <p className="title">
            Opinion: Make in India performance EVs coming soon
          </p>
          <p>
            EVs lend themselves better to higher levels of performance and
            Indian-made EVs will soon deliver over 400hp.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Jan 27, 2024 08:00:00 AM</p>
          <img src={news7} alt="Car Example" />
          <p className="title">
            Opinion: 3 hurdles the Duster must not trip over
          </p>
          <p>
            The Duster's comeback can be easy but there are a few hurdles
            Renault must not stumble over.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Jan 20, 2024 09:00:00 AM</p>
          <img src={news8} alt="Car Example" />
          <p className="title">
            Opinion: Tips for automotive marketers for 2024
          </p>
          <p>
            From sustainability to limiting the use of influencers, here's how
            automotive companies can keep the momentum going this year.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Jan 02, 2024 09:00:00 AM</p>
          <img src={news9} alt="Car Example" />
          <p className="title">
            Opinion: Cars are getting safer, but are drivers?
          </p>
          <p>
            Regulations have made our cars safer, but road infrastructure and
            driver awareness needs to catch up.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Dec 27, 2023 08:00:00 AM</p>
          <img src={news10} alt="Car Example" />
          <p className="title">
            Opinion: Luxury carmakers should offer a better customer experience
          </p>
          <p>
            When it comes to luxury cars, very often it's the product that holds
            more sway than the brand itself.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Nov 28, 2023 03:30:00 PM</p>
          <img src={news11} alt="Car Example" />
          <p className="title">The vintage elegance of the Mercedes W123</p>
          <p>
            Ahead of the Mercedes-Benz Classic Car Rally, here's getting behind
            the wheel of the legendary 230 sedan.
          </p>
        </div>
        <div className="car">
          <p className="date">Published on Dec 16, 2023 07:00:00 AM</p>
          <img src={news12} alt="Car Example" />
          <p className="title">Opinion: Buying a new car as an investment</p>
          <p>
            New car prices have shot up recently due to tighter emissions norms,
            higher input costs and long waiting periods.
          </p>
        </div>
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

export default CarNewsPage;
