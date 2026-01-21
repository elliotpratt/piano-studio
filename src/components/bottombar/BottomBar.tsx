import './BottomBar.css';
import { FaInstagram } from "react-icons/fa";

export default function Bottombar() {
  return (
    <div className="bar">
        <p>
            Eliana Cook
        </p>
        <a 
            href="https://www.instagram.com/periwinkle_rhinoceri/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaInstagram size={24} color='white'/>
        </a>
    </div>
  );
};