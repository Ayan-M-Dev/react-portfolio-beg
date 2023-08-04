import React from 'react';
import { DarkModeProvider } from './Components/DarkMode/DarkModeContext';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";


function App() { 
  return (
    <div>
    <DarkModeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </DarkModeProvider>
    </div>
  );
}
export default App;