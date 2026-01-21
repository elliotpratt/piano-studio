import NavButton from "./Link.tsx";
import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 20);
  };

  return (
    <div className={scrolling ? "navbar navbar-scroll" : "navbar"}>
      <NavButton destination="/" name="Home" />
      <NavButton destination="/about" name="About" />
      <NavButton destination="/contact" name="Contact" />
      <NavButton destination="/faq" name="FAQ" />
      <NavButton destination="/lessons" name="Lessons" />
      <NavButton destination="/studio_policy" name="Studio Policy" />
    </div>
  );
};