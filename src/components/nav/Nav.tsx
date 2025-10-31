import { navLinks, type SectionId } from "@/types/type"
import CustomLink from "./Link"
import { useState } from "react"

const Nav = () => {

    const [activeSection, setActiveSection] = useState<SectionId|null>(navLinks[0]?.id || null)

    const handleActive = (sectionId:SectionId) => {

    }

    return (
        <nav className="relative h-[88px]">
            <div className="">
                <div className="">
                    <div className="">
                        <img src="" alt="logo" />
                    </div>
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
        </nav>
    )
}

export default Nav