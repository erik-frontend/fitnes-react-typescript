import { navLinks, type SectionId } from "@/types/type"
import CustomLink from "./Link"
import { useState } from "react"
import logo from "../../assets/Logo.png"

const Nav = () => {
    const [isTopPage, setIsTopPage] = useState<boolean>(true)
    const navBarBackground = isTopPage ? "" : "bg-primary-100 drop-shadow"
    const [activeSection, setActiveSection] = useState<SectionId|null>(navLinks[0]?.id || null)

    const handleActive = (sectionId:SectionId) => {

    }

    return (
        <nav className="relative h-[88px]">
            <div className={`${navBarBackground} ${isTopPage ? "py-6" : "py-4"} animate fixed top-0 z-30 w-full`}>
                <div className="flex-between mx-auto w-5/6">
                    <div className="flex-between w-full gap-20">
                        <img src={logo} alt="logo" />
                        <div className="flex-between w-full">
                        <div className="flex-between gap-8 text-sm">
                            {navLinks.map(({ id, label }) => (
                                <CustomLink 
                                    key={id}
                                    section={id}
                                    onClick={handleActive}
                                    activeSection={activeSection}
                                >
                                    {label}
                                </CustomLink>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav