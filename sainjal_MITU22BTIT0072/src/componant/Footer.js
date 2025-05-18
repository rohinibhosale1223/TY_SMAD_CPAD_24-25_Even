import logo from "../assets/icons_assets/Logo .png"
import { Link } from 'react-router-dom';

const Footer = ()=>{
return(
    <footer className="grid grid-cols-4 auto-rows-auto px-10 gap-x-5 py-10 mt-5 bg-[#FBDABB] md:grid-cols-8 lg:grid-cols-12">
        <img alt="logo" src={logo} className="col-start-3 col-span-2 self-center order-4 mt-7 md:col-span-8 md:col-start-1 md:justify-self-center md:h-full md:py-10 lg:order-1 lg:col-start-3 lg:col-span-2 lg:h-fit lg:justify-self-start"/>
        <div className="col-start-1 col-span-2 order-1 md:justify-self-center lg:col-start-5 lg:order-2">
            <h3 className="mb-5 font-bold font-second text-lg text-primary-2">Doormat Navigation</h3>
            <Link to={"/Little-Lemon"} className="block">Home</Link>
            <a href="#about">Menu </a>
            <Link to={"/Little-Lemon/Booking"} className="block">Reservation</Link>
            <Link to={"/Little-Lemon"} className="block">Order online</Link>
            <a href='#about'>About</a>
            <Link to={"/Little-Lemon"} className="block">Login</Link>
        </div>
        <div className="col-start-3 col-span-2 order-2 md:col-span-4 md:justify-self-center g:col-start-7 lg:order-3 lg:col-span-2">
            <h3 className="mb-5 font-bold font-second text-lg text-primary-2">Contact</h3>
            <Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"} className="block">Address</Link>
            <Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"} className="block">Phone number</Link>
            <Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"} className="block">email</Link>
        </div>
        <div className="col-start-1 col-span-2 mt-5 order-3 md:col-start-7 md:mt-0 md:justify-self-center g:col-start-9 lg:order-4 lg:col-span-2">
            <h3 className="mb-5 font-bold font-second text-lg text-primary-2 ">Social media</h3>
            <Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"} className="block">Address</Link>
            <Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"} className="block">Phone number</Link>
            <Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"} className="block">email</Link>
        </div>
    </footer>
)
}
export default Footer;