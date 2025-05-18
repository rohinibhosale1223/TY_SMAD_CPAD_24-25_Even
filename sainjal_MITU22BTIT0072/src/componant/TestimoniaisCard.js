import StarRating from "./StarRating";

const TestimoniaisCard = (props)=>{
    return(
        <div className="col-span-4 mb-5 justify-self-center  bg-Highlight-1 pt-3 rounded-sm md:col-span-3 md:w-52 md:justify-self-center lg:col-span-2 lg:w-full drop-shadow-lg hover:scale-110 transition ease-in-out delay-75 duration-100 hover:-translate-y-1">
            <StarRating  rateing={props.rating} />
            <div className="flex my-4 flex-wrap justify-center ">
                <img alt="user_photo" src={props.img} className="w-12 h-12 ml-2"/>
                <h3 className="self-center ml-3 ">{props.name}</h3>
            </div>
            <p className="p-2 text-center line-clamp-2 hover:line-clamp-4">{props.descripion}</p>
        </div>
    )
}
export default TestimoniaisCard;