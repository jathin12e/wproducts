// src/App.jsx
import React from 'react';
import './App.css';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './components/products';
import Enquiry from './components/enquiry';
import Contact from './components/contact';
import ScrollToTop from './scrolltop';
import Cart from './components/cart';
import Details from './details';
import Topdetails from './topdetails';

// optional top-selling page (list of top products)
import Topsales from './components/topsales';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/topsale' element={<Topsales />} />

        {/* product detail routes (aliases) */}
        <Route path='/products/:id' element={<Details />} />
        <Route path='/details/:id' element={<Details />} />

        {/* top-selling product detail */}
        <Route path='/topdetails/:id' element={<Topdetails />} />

        <Route path='/services' element={<Services />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </div>
  );
};

export default App;
