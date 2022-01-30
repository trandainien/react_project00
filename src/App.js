import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import NavMenu from './components/NavMenu.js';
import SmoothScrollbar from './components/SmoothScrollbar.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollbar>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </SmoothScrollbar>
    </Router>
  );
}
