import { Link } from 'react-scroll';
import { SectionId } from '@/types/type';


type Props = {
    section: SectionId;
    children: React.ReactNode;
    onClick: (sectionId: SectionId) => void;
    activeSection: SectionId | null;
}
const Link = ({section, children, onClick, activeSection}:Props) => {
  return (
    <div>Link</div>
  )
}

export default Link