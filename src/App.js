// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FTcorner from './components/FTcorner';
import About from './components/About';
import Ecochoco from './components/Ecochoco';
import Shop from './components/Shop';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ft-corner" element={<FTcorner />} />
        <Route path="/about" element={<About />} />
        <Route path="/ecochoco" element={<Ecochoco />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
