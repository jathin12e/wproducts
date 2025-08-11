import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone, MdAccessTime, MdLocationOn, MdHelpOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + Contact Info */}
        <div className="footer-section footer-logo-section">
          <img
            src="/images/Screenshot 2025-07-31 111523.png"
            alt="w-products"
            className="footer-logo-img"
           
          />
          <div className="contact-info">
            <p><MdEmail /> <a href="mailto:chandanaram007@gmail.com">chandanaram007@gmail.com</a> <br /> <a href="mailto:shreyasrsn@gmail.com">shreyasrsn@gmail.com</a></p>
            <p><MdLocationOn/>Bangalore - Main office: #129/29, Horamavu Main Road,Near Raghavendhra Circle, Bangalore –<br /> 560043</p>
            <p>
              <MdPhone /><a href="tel:+919945009127">+91 9945009127</a><br />
              <a href="tel:+919663000039">+91 7204799503</a>
            </p>
            <p><MdAccessTime /> 9:30 AM - 6:30 PM (Mon - Sat)</p>
          </div>
        </div>

        {/* Navigation Links */}
    <div className='position-5'>
        <div className="footer-section footer-links-section" >
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">products</Link></li>
            
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/enquiry">Enquiry</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-links-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/products">Electrical And Electronics</Link></li>
            <li><Link to="/products">Fluid Technology</Link></li>
            <li><Link to="/products">Construcion</Link></li>
            
            
          </ul>
        </div>
        </div>
        {/* Get In Touch */}
        <div className="footer-section footer-contact-section">
          <h4>Get In Touch</h4>
          <p><Link to="/contact" className="contact-link">Questions or Feedback?</Link></p>
          <p>We'd love to hear from you.</p>
          <Link to="/" className="btn btn-outline-primary" style={{color:"#90caf9"}}>Back to Home</Link>
        </div>

    </div>
    

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} W Products. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
