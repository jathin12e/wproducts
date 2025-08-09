// components/HeroSection.jsx
import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Premium Electricals , Electronics & Automation <br/>Products for Every Need</h1>
        <p>
          We specialize in selling top-quality electrical, electronic, and automation products for swimming pools,<br/>
  landscaping, and irrigation. Trusted by professionals across India
        </p>
        <div className="hero-buttons">
          <Link to="/products" ><button className='btn-primary'>Browse Products</button></Link>
          <Link to="/about"><button className='btn-secondary'>Who We Are</button></Link>
        </div>
      </div>
      <div className="scroll-down">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default HeroSection;
