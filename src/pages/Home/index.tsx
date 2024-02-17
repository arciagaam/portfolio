import { HeroSection } from "../../components/sections/HeroSection"

const Home = () => {
    return (
        <div className="flex flex-col bg-background font-red-hat-display min-h-screen">
            <div className="fixed"></div>
            <img src="images/grain.png" className="fixed top-0 left-0 pointer-events-none w-full z-[99999] opacity-30" alt="" />
            <HeroSection/> 
        </div>
    )
}

export { Home } 