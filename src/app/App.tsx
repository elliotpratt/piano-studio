// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
import Navbar from '../components/navbar/navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/about';
import Contact from '../pages/contact';
import FAQ from '../pages/faq';
import Lessons from '../pages/lessons';
import StudioPolicy from '../pages/studio_policy';
import Home from '../pages';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/studio_policy" element={<StudioPolicy />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
