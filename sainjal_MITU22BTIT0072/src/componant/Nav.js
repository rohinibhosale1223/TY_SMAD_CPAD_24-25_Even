
import { Link } from 'react-router-dom';
const Nav = ()=>{
    return (
        <>
        <nav className="lg:col-span-6 lg:order-2" >
            <ul className="lg:flex lg:items-center lg:justify-items-end md:hidden hidden">
                <li className="mr-9 w-fit lg:hover:scale-125 hover:-translate-y-1 transition ease-in-out delay-75 duration-100 "><Link to={"/Little-Lemon"}>Home</Link></li>
                <li className="mr-9 w-fit lg:hover:scale-125 hover:-translate-y-1 transition ease-in-out delay-75 duration-100 "><a href='#about'>About</a></li>
                <li className="mr-9 w-fit lg:hover:scale-125 hover:-translate-y-1 transition ease-in-out delay-75 duration-100 "><a href='#menu'>Menu</a></li>
                <li className="mr-9 w-fit lg:hover:scale-125 hover:-translate-y-1 transition ease-in-out delay-75 duration-100 "><Link to={"/Little-Lemon/Booking"}>Reservation</Link></li>
                <li className="mr-9 w-fit lg:hover:scale-125 hover:-translate-y-1 transition ease-in-out delay-75 duration-100 "><a href='#menu'>Order online</a></li>
                <li className="mr-9 w-fitb bg-[#F4CE14] lg:w-28 h-10 rounded-lg flex items-center justify-center lg:hover:scale-110 transition ease-in-out delay-75 duration-100 "><Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"}>Login</Link></li>
            </ul>
        </nav>
        </>

    )
}
export default Nav ;