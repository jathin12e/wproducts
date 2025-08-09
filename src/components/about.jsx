// pages/About.jsx
import React, { useEffect, useRef } from 'react';
import './about.css';
import Nav from './nav';
import Footer from './footer';
import Values from './values';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref) => {
      gsap.fromTo(
        ref,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div>
      <Nav />
      <div className="about-page">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="overlay">
            <h1>About W Products</h1>
            <p>Shaping spaces with water, beauty, and functionality.</p>
          </div>
        </div>

        {/* Sections with animation */}
        <div className="about-section" ref={addToRefs}>
          <h2>Who We Are</h2>
          <p>
            we are committed sellers of a wide range of premium swimming pool accessories, irrigation systems, landscape solutions, and cutting-edge electrical and electronic automation products...
          </p>
          <p>
            Our offerings span across pool equipment, lighting systems, control panels, pumps, valves, sensors, and automated controllers...
          </p>
          <p>
            Whether you're upgrading a pool, automating a landscape, or installing intelligent irrigation, W Products delivers the technology and trust you need to transform ideas into reality.
          </p>
        </div>

        <div className="about-section" ref={addToRefs}>
          <h2>Our Mission</h2>
          <p>
            our mission is simple yet impactful:
            <em> "To be India’s most trusted provider of premium pool, landscape, irrigation, electrical, and automation products."</em>
          </p>
          <p>
            We are committed to offering high-performance, durable, and aesthetically refined solutions...
          </p>
          <ul>
            <li>🛠️ Reliable partner for contractors, builders, and system integrators</li>
            <li>🏡 Trusted supplier for homeowners, villas, and gated communities</li>
            <li>🏢 Go-to resource for commercial, hospitality, and infrastructure projects</li>
          </ul>
          <p>
            From backyard pools to public fountains, from smart irrigation to automated electrical systems — <strong> W Products delivers solutions that perform, impress, and endure</strong>
          </p>
        </div>

        <div className="about-section" ref={addToRefs}>
          <h2>Why Choose Us</h2>
          <p>
            we stand out through our unwavering commitment to quality, innovation, and customer satisfaction...
          </p>
          <ul>
            <li>Handpicked products from global industry leaders</li>
            <li>One-stop solution for pool, landscape, irrigation, and automation needs</li>
            <li>Competitive pricing with no compromise on quality</li>
            <li>Expert consultation and post-sales support</li>
            <li>Trusted by homeowners, commercial developers, and contractors</li>
          </ul>
        </div>

        <div className="about-section" ref={addToRefs}>
          <h2>What We Offer</h2>
          <p>
            We offer a comprehensive range of products and technologies that blend performance, design, and sustainability...
          </p>
          <ul>
            <li>Swimming pool accessories and automation systems</li>
            <li>Landscape lighting, fountains, and control panels</li>
            <li>Smart irrigation systems and water management tools</li>
            <li>Electrical components for efficient power distribution</li>
            <li>Electronic controllers, sensors, and automation devices</li>
          </ul>
          <p>
            Our curated product lines are designed to deliver performance, durability, and ease of integration...
          </p>
        </div>

        {/* Highlights / Features */}
        <div className="about-highlights" ref={addToRefs}>
          <div className="highlight-card">✅ One-Stop Solution</div>
          <div className="highlight-card">🌐 Pan-India Service</div>
          <div className="highlight-card">🏆 Trusted Global Brands</div>
          <div className="highlight-card">🎯 Competitive Pricing</div>
        </div>

        <Values />
        <Footer />
      </div>
    </div>
  );
};

export default About;
