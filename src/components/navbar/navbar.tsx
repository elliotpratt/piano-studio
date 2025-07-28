import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navBar">
        <div className="links">
            <NavLink to="/" 
                className="group transition duration-300"
            >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/about" 
                className="group transition duration-300"
            >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/contact" 
                className="group transition duration-300"
            >
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/faq" 
                className="group transition duration-300"
            >
                FAQ
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/lessons" 
                className="group transition duration-300"
            >
                Lessons
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </NavLink>
        </div>
        <div className="links">
            <NavLink to="/studio_policy" 
                className="group transition duration-300"
            >
                Studio Policy
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </NavLink>
        </div>
    </div>
  );
};