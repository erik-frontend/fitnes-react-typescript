import { Link } from "react-scroll";
import type {SectionId} from "../types/type";

type Props = {
    to:SectionId;
    children:React.ReactNode;
}

export const ActionBtn = ({to, children}: Props) => {
    return(
        <Link to={to} className="animate rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer">
            {children}
        </Link>
    )
}