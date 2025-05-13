import "../css/carreviews.css";
import { Link } from "react-router-dom";
import carlogo from "../assets/carlogo.jpg";
import autoexpo from "../assets/autoexpo.png";
import compare from "../assets/compare.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function CarReviewsPage() {
  return (
    <>
      <div className="navdiv">
        <header>
          <img className="logo" src={carlogo} alt="Car Blog Logo" />
        </header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/carnews">Car News</Link>
          <Link to="/carreviews" style={{ color: "#ff4500" }}>
            Car Reviews
          </Link>
          <Link to="/servicepage">Services</Link>
          <Link to="/cartpage" className="cart-count">Cart</Link>
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
        </nav>
      </div>
      <br />
      <div className="main-content">
        <section className="review-highlight">
          <img src={autoexpo} alt="Highlight Car Review" />
          <h2>AUTO EXPO 2023 THE BIGGEST AUTO EXTRAVAGANZA</h2>
          <p>
            Auto Expo is one of the world's premier auto shows. A signature
            event, that witness the best minds coming together on a single
            platform to showcases all that is best in the automotive world, in
            terms of products, technologies, concepts and trends.
          </p>
        </section>
        <section className="reviews-list">
          <div className="review-card">
            <h3>
              EXCLUSIVE : Toyota Innova HyCross ka Petrol GX Variant | Auto Expo
              2023
            </h3>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/QQ-zS7RprDw"
              title="Toyota Innova HyCross"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              The new Innova HyCross has elevated its design to a new HY. The
              muscular SUV stance and stature of the new Innova HyCross is
              accentuated by its glamorous yet tough Front Grille and a raised
            </p>
          </div>
          <div className="review-card">
            <h3>Yeh SUV hai Fortuner ka Big Daddy!!! | Auto Expo 2023</h3>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/Afim_iA3038"
              title="Fortuner Big Daddy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              The new Legender houses a refined 6-speed Diesel AT engine. The
              power on tap complements the cutting-edge design of the Legender
              seamlessly.
            </p>
          </div>
          <div className="review-card">
            <h3>Lexus LX500d - Rs 3.8 crore SUV | Auto Expo 2023</h3>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/cJlNpZUAe9M"
              title="Lexus LX500d"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              The LX 500d seats up to 5 people comfortably and is powered by a
              V6 3.3-liter twin-turbocharged diesel engine that delivers 304
              horsepower and control without compromise.
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="review-highlight">
          <img src={compare} alt="Highlight Car Review" />
          <h2>Compare Cars 2024</h2>
          <p>
            Important decisions like car purchase are often confusing. The
            "Compare Cars" tool from TurboTalks is designed to help you in car
            comparison on the basis of prices, mileage, power, performances and
            hundreds of other features and specifications. Our car comparison
            tool now comes with enhanced capabilities to compare cars at version
            level.
          </p>
        </section>
        <section className="reviews-list">
          <div className="review-card">
            <h3>
              Tata Nexon vs Maruti Brezza vs Kia Sonet vs Hyundai Venue - MAHA
              COMPARISON
            </h3>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/XUEMRPppTF0"
              title="SUV Comparison"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              In this video, we compare the big names of the compact SUV, namely
              the Nexon, Sonet, Brezza and Venue and do their Asli Test. We
              compare them on the basis of boot space, performance, storage,
              drive experience etc. Dive in!
            </p>
          </div>
          <div className="review-card">
            <h3>
              2022 Maruti Baleno vs Tata ALTROZ vs Hyundai i20 - MAHA COMPARISON
            </h3>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/w5qDwXK472I"
              title="Hatchback Comparison"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              Maruti Baleno vs Tata ALTROZ vs Hyundai i20 - which one should you
              buy and why? We share all the details with you. Check it out in
              detail. These are all 2022 models of the premium hatchbacks. In
              terms of overall performance, space, features, second row space,
              mileage, hill climb and even headlight throw.
            </p>
          </div>
          <div className="review-card">
            <h3>
              Hyundai Verna vs Honda City vs Skoda Slavia vs VW Virtus - MAHA
              COMPARISON
            </h3>
            <iframe
              width="200"
              height="200"
              src="https://www.youtube.com/embed/CT0WS2868CI"
              title="Sedan Comparison"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              Hyundai Verna vs Honda City vs Skoda Slavia vs VW Virtus - which
              one should you buy and why? We share all the details with you.
              Check it out in detail. In terms of overall performance, space,
              features, second row space, mileage, hill climb and even headlight
              throw.
            </p>
          </div>
        </section>
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

export default CarReviewsPage;
