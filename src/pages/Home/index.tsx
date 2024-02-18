import { AboutMeSection } from "../../components/sections/AboutMeSection"
import { ContactMe } from "../../components/sections/ContactMe"
import { ExperienceSection } from "../../components/sections/ExperienceSection"
import { HeroSection } from "../../components/sections/HeroSection"
import { KnowMoreSection } from "../../components/sections/KnowMoreSection"
import { ProjectsSection } from "../../components/sections/ProjectsSection"
import { TechStackSection } from "../../components/sections/TechStackSection"

const Home = () => {
    return (
        <div className="flex flex-col bg-background font-red-hat-display text-off-white gap-12 overflow-hidden relative" >
            {/* <img src="images/grain.png" className="absolute top-0 left-0 pointer-events-none w-full z-[99999]" alt="" /> */}
            <div className="absolute inset-0 opacity-50 z-[99999] pointer-events-none" style={{background: 'url(images/grain.png)'}}>
                hi
            </div>
            <HeroSection />
            <ProjectsSection />
            <KnowMoreSection />
            <AboutMeSection />
            <TechStackSection />
            <ExperienceSection />
            <ContactMe />
        </div>
    )
}

export { Home } 