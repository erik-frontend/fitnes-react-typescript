

export type SectionId = "home" | "benefits" | "ourclasses" | "contact";

export const navLinks:{id:SectionId; label:string}[] = [
    {id: "home", label: "Home"},
    {id: "benefits", label: "Benefits"},
    {id: "ourclasses", label: "Our Classes"},
    {id: "contact", label: "Contact Us"},
]