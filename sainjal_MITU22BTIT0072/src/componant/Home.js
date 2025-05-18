import { Link } from "react-router-dom";
import img1 from "../assets/icons_assets/restauranfood.jpg"
const Home = ()=>{
return(
    <section className="grid grid-cols-4 px-10 lg:grid-cols-12 md:grid-cols-8 gap-x-5 gl:px-16 bg-primary-2 h-fit">
            <div className="col-start-1 col-span-2 lg:col-start-3 lg:col-end-7 md:col-start-1 md:col-span-5">
                <h1 className="font-main text-5xl font-medium pt-6 text-primary-1">Little Lemon</h1>
                <p className="pt-3 pb-6 font-main text-Highlight-1 text-4xl">Chicago</p>
                <p className="lg:pb-10 md:pb-9 pb-6 text-Highlight-1 font-second lg:text-lg text-base">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to={"/Little-Lemon/Booking"} ><button className="lg:w-52 md:w-48 w-full h-fit lg:h-16 md:h-14  mb-4 bg-primary-1 rounded-lg text-Highlight-2 font-main lg:text-xl md:text-xl text-lg font-bold lg:mt-10 hover:scale-110 transition ease-in-out delay-75 duration-100 hover:-translate-y-1">Reserve a table</button></Link>
            </div>
            <img src={img1} alt="Main" className="object-fill col-start-3 col-span-2 mt-10 ml-10  justify-self-center self-center md:mt-10   md:justify-self-center lg:col-start-8 lg:col-span-3 rounded-lg lg:mt-2 lg:mb-[-15px] lg:h-[475px] lg:w-80 lg:ml-12 md:col-start-6 md:col-span-4  md:h-72 "/>
        </section>
)
}
export default Home;