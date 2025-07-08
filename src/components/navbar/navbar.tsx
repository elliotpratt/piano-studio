import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navBar">
        <div className="links">
            <NavLink to="/" 
                className={({isActive}) => isActive ? "active" : ""}
            >
                Home
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/about" 
                className={({isActive}) => isActive ? "active" : ""}
            >
                About
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/contact" 
                className={({isActive}) => isActive ? "active" : ""}
            >
                Contact
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/faq" 
                className={({isActive}) => isActive ? "active" : ""}
            >
                FAQ
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/lessons" 
                className={({isActive}) => isActive ? "active" : ""}
            >
                Lessons
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/studio_policy" 
                className={({isActive}) => isActive ? "active" : ""}
            >
                Studio Policy
            </NavLink>
        </div>
    </div>
  );
};