// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
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

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Bruh
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
