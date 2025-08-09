import React, { useState } from 'react';
import Nav from './nav';
import Footer from './footer';
import Feed from './feed';
import './enquiry.css';
import { MdEmail, MdPhone, MdAccessTime, MdLocationOn, MdHelpOutline } from "react-icons/md";



const ServiceEnquiry = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");
    const formEle = e.target;
    const formData = new FormData(formEle);
    fetch("https://script.google.com/macros/s/AKfycbwiteX5wiYm0J8a1r8MbaiJKlxJezpFFpbVoZAL4o5j2st8xYbo1RP-sjmdOh0GfkbGhg/exec", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        setButtonText("Thank you");
        formEle.reset();
        setTimeout(() => setButtonText("Submit"), 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit feedback.");
      })
      .finally(() => setLoading(false));
  };

  return (

        <div>
          <Nav />
        <div>
      

      <div className="enquiry-container">
        
<div className="left-info-box">
  <h2><MdHelpOutline style={{ marginRight: '8px' }} /> Need Help?</h2>
  <p>If you have questions or need assistance, reach out to us directly.</p>

  <div className="info-section">
    <h4><MdEmail /> Email</h4>
    <p>chandanaram007@gmail.com<br />shreyasrsn@gmail.com</p>

    <h4><MdPhone /> Phone</h4>
    <p>+91 9945009127<br />+91 7204799503</p>

    <h4><MdLocationOn /> Main Office</h4>
    <p>
      #129/29, Horamavu Main Road,<br />
      Near Raghavendhra Circle,<br />
      Bangalore – 560043
    </p>

    <h4><MdAccessTime /> Office Hours</h4>
    <p>9:30 AM - 6:30 PM (Mon - Sat)</p>
  </div>
</div>
        <div className="right-form">
          <h1>Contact Us</h1>
          <p>Fill in the form below and we’ll get in touch with you shortly</p>
          <form onSubmit={handleSubmit} className="form">
            <input placeholder="Your Name" name="Name" type="text" required />
            <input placeholder="Your Email" name="Email" type="text" required  />
            <input placeholder="Your Phone" name="Phone" type="text" required />
            <textarea name="Message" placeholder="Your message or requirements..." required ></textarea>
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>

      <Feed />
      <Footer />
    </div>
    </div>
  );
};

export default ServiceEnquiry;
