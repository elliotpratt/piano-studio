import { NavLink } from "react-router-dom";
import './Link.css';

interface NavButtonProps {
  destination: string;
  name: string;
}

export default function NavButton({ destination, name }: NavButtonProps) {
  return (
    <div className="links">
      <NavLink to={destination} className="navlink">
        {name}
        <span className="underline" aria-hidden="true"></span>
      </NavLink>
    </div>
  );
};