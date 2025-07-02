import { Footer } from "./components/LandingComponent/footer";
import Hero1 from "./components/LandingComponent/hero1";
import Hero2 from "./components/LandingComponent/hero2";
import Hero3 from "./components/LandingComponent/hero3";
import Hero4 from "./components/LandingComponent/hero4";
import { Sidebar } from "./components/LandingComponent/sidebar";

export const Landing=()=>{
    return(
        <div className="flex h-screen overflow-hidden">
            <div className="bg-grey3 w-[9%]">
                <Sidebar/>
            </div>
            <div className="bg-grey2 flex flex-col w-[91%] gap-7 px-[150px] pt-[50px] pb-5 overflow-y-auto">
                <Hero1/>
                <Hero2/>
                <Hero3/>
                <Hero4/>
                <Footer/>
            </div>
        </div>
    )
}