import img1 from "../assets/icons_assets/Mario and Adrian A.jpg"
import img2 from "../assets/icons_assets/Mario and Adrian b.jpg"
const About = ()=>{
    return (
        <section className="grid grid-cols-4 auto-rows-auto px-10 mt-10 lg:grid-cols-12 md:grid-cols-8 gap-x-5 gl:px-16 " id="about">
            <div className="col-start-1 col-span-4 lg:col-start-3 lg:col-end-7 md:col-start-1 md:col-span-5">
                    <h1 className="font-main text-5xl font-medium pt-6 text-primary-1">Little Lemon</h1>
                    <p className="pt-3 pb-6 font-main text-Highlight-2 text-3xl">Chicago</p>
                    <p className="lg:pb-10 md:pb-9 pb-6 text-Highlight-2 font-second lg:text-lg text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-start-1 col-span-4 justify-self-end col-end-4 flex h-fit justify-start md:col-start-6 md:justify-start md:col-span-3 md:mt-10 lg:col-start-7 lg:col-span-4 self-center">
                <img alt="photo_1" src={img1} className="w-36 h-52 rounded-md mt-12 hover:z-50 lg:w-60 lg:h-80 "/>
                <img alt="photo_2" src={img2} className="w-36 h-52 rounded-md ml-[-46px] z-40 hover:z-50 lg:w-60 lg:h-80 "/>
            </div>
        </section>
    )
}
export default About;