import About from "./About";
import Home from "./Home";
import Specials from "./Specials";
import Tistimoniais from "./Testimoniais";
const Main = ()=>{

    return(
    <main className="scroll-smooth">
        <Home />
        <Specials />
        <Tistimoniais />
        <About />
    </main>
    )
}
export default Main;