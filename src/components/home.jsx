import React, { useEffect } from 'react';
import Nav from './nav';
import Footer from './footer';
import Hero from './hero';
import { Link } from 'react-router-dom';
import './home.css';
import Top from './topsales';
import Patners from './patners';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      
      <div className="why-choose-us reveal">
        <h2>Why Choose Us</h2>
        <div className="reasons">
          <div className="card">🔧 Quality-Assured Products</div>
          <div className="card">🌍 Trusted Global Brands</div>
          <div className="card">🛠️ Reliable After-Sales Support</div>
          <div className="card">🚀 Pan-India Delivery</div>
        </div>
      </div>

      <div className="reveal">
        <Patners />
      </div>

      <div className="reveal">
        <Top />
      </div>

      <div className="cta-section reveal">
        <h2>Ready to Transform Your Space?</h2>
        <p>Shop now or get in touch to explore tailored solutions for your project.</p>
        <div className="cta-buttons">
          <Link to="/products" className="cta-btn">View Products</Link>
          <Link to="/contact" className="cta-btn cta-secondary">Contact Us</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
