// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
import Navbar from '../components/navbar/Navbar';
import Bottombar from '../components/bottombar/BottomBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Lessons from '../pages/Lessons';
import StudioPolicy from '../pages/StudioPolicy';
import Home from '../pages/HomePage';

function App() {
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
      <Bottombar />
    </BrowserRouter>
    </>
  );
}

export default App
