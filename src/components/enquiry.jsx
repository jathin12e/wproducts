import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import './enquiry.css'; 
import Nav from './nav';
import Footer from './footer';
import { MdEmail, MdPhone, MdAccessTime, MdLocationOn, MdHelpOutline } from "react-icons/md";

export default function ServiceEnquiry() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const formRef = useRef(null);

  // Get the product name from URL query param
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("product") || "";

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Submitting...");
    setIsError(false);

    const formDatab = new FormData(formRef.current);
    const url = "https://script.google.com/macros/s/AKfycbx8qb3YC3cJmoJPBF5NYdrl5FYCTxl3JK8Xq7VAT7KLeXPHJGlXYP7FBPm2KnQZUDNZug/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formDatab
      });

      const data = await response.text();
      console.log(data);
      setMessage("Form submitted successfully!");
      setIsError(false);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
      setIsError(true);
    }
  }

  return (
    <div>
      <Nav />
      <div className="enquiry-page">
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
            <h1>Service Enquiry</h1>
            <p>Fill in the form below and we’ll get in touch with you shortly.</p>

            {message && (
              <div className={`form-message ${isError ? 'error' : 'success'}`}>
                {message}
              </div>
            )}

            <form className="form" ref={formRef} onSubmit={handleSubmit}>
              <input
                name="Service"
                type="text"
                value={initialService}
                readOnly
                required
                placeholder="Product Name"
              />
              <input placeholder="Your Name" name="Name" type="text" required />
              <input placeholder="Your Email" name="Email" type="email" required />
              <input placeholder="Phone Number" name="Phone" type="tel" required />

              {/* Pre-filled service field */}
              

              <textarea
                name="Message"
                placeholder="Your message or requirements..."
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
