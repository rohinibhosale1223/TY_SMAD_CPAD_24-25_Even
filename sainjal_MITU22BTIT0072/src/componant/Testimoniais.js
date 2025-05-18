import TestimoniaisCard from "./TestimoniaisCard";
import TistimoniaisData from "./data/TistimoniaisData";
import { useEffect, useState } from "react"

const Tistimoniais = ()=>{
    const [ data , setData ] = useState([{}]);
    useEffect(()=>{
        setData(TistimoniaisData)
    },[])
    return(
        <section className="grid grid-cols-4 auto-rows-auto px-10 mt-10 lg:grid-cols-12 md:grid-cols-8 gap-x-5 gl:px-16 bg-primary-2" >
            <h1 className="uppercase col-start-1 col-span-4 justify-self-center text-Karla text-2xl font-extrabold text-primary-1 my-10 md:col-span-8 lg:col-span-12">Testimoniais</h1>
            <div className="grid grid-cols-4 auto-rows-auto col-start-1 col-span-4 mb-5   md:col-start-2 md:col-span-6 lg:grid-cols-8 md:grid-cols-6 gap-x-5  lg:col-span-8 lg:col-start-3">
                {
                data.map((e , index)=>{
                    return (
                        <TestimoniaisCard key={index} name={e.name} descripion={e.descripion} rating={e.rating} img={e.img}  />
                    )
                })
            }
            </div>
        </section>
    )
}
export default Tistimoniais;