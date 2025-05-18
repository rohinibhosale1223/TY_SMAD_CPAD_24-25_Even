import icon from "../assets/icons_assets/fast-delivery.png"
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
    <div className="grid grid-cols-4  auto-rows-auto md:grid-cols-6 lg:grid-cols-3 lg:w-64  md:mb-2 md:drop-shadow-lg md:px-3 md:pb-3 my-3 lg:hover:scale-105 lg:hover:z-50 bg-white rounded-md transition ease-in-out delay-150 duration-200" >
    <h2 className="col-start-1 col-span-2 text-xl font-bold font-second lg:order-2 lg:mt-3 ">{props.name}</h2>
    <p className="text-primary-2 col-start-1 col-span-2 h-fit  font-second line-clamp-4  md:col-span-4 md:col-start-1 lg:order-4 lg:my-5 " >{props.descripion}</p>
    <Link className="col-start-3 col-span-2 lg:w-64 font-second justify-self-end md:col-start-5 md:justify-self-center md:w-36 w-20 h-20 md:h-36 
        lg:order-first lg:col-start-1 lg:col-span-3 lg:h-48 ">
        <img alt="food-img" src={props.img} className="lg:w-64 rounded-md lg:rounded-none lg:rounded-t-lg lg:object-fill lg:h-full h-full  "/>
    </Link>
    <p className="col-start-1 col-span-2 mt-2 text-lg text-Secondary-1 lg:order-3 lg:col-start-3 lg:justify-self-center lg:p-0 lg:self-center lg:col-span-1 lg:mt-3 font-main "><span>$</span>{props.price}</p>
    <Link to={"https://EbraheemAbdelAziz.github.io/Little-Lemon/"} className="col-start-3 w-fill col-span-2 mt-2 md:mt-0 lg:mt-0 justify-self-center flex lg:order-5 lg:col-start-1 lg:col-span-3 lg:justify-self-start">
        <p className="self-center text-sm w-fit lg:text-base font-second font-bold">Order a delivery</p>
        <img alt="icon" src={icon} className="ml-1 md:ml-2 lg:ml-2 self-center w-6"/>
    </Link>
    </div>
    )
}
export default Card;