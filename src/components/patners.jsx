import React from 'react';
import './patners.css';

const partners = [
  '/images/Screenshot 2025-07-14 155808-Photoroom.png',
  '/images/Screenshot_2025-08-08_131502-removebg-preview.png',
  
  '/images/Screenshot 2025-08-05 175754-Photoroom.png',
  '/images/Screenshot 2025-08-05 180830-Photoroom.png',
  
  '/images/Screenshot 2025-08-06 102444-Photoroom.png',
  
];

const PartnersSlider = () => {
  return (
    <div className="partners-slider-wrapper">
      <div className="partners-slider-track">
        {partners.concat(partners).map((logo, index) => (
          <div className="partner-logo" key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSlider;
