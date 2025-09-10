import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Ignite from './pages/Ignite';
import Resources from './pages/Resources';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './pages/Gallery';
import Empower from './pages/Empower';
import Elevate from './pages/Elevate';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ignite" element={<Ignite />} />
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/empower' element={<Empower/>}/>
        <Route path='/elevate' element={<Elevate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

