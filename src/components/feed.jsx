import React, { useState } from "react";
import './feed.css'; // your styles

export default function Feedback() {
  const [buttonText, setButtonText] = useState("Submit");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");

    const formEle = e.target;
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbxQNiyqdjG0D56S23Bpqd8ok6tt_p6IGS_Rt3wZug8c_m0gY1kEB9RCp0lCmu696CG_/exec", {
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
      <div className="feed-position">
        <div className="right-form" style={{ marginTop: "20px" }}>
          <h1>We Value Your Feedback</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Your Name" name="Name" type="text" required />
            <input placeholder="Your Rating" name="Rating" type="text" required />
            <textarea name="FeedBack" placeholder="Your message or requirements..." required />
            <button type="submit" disabled={loading}>
              {buttonText}
            </button>
          </form>
        </div>
        <div className="left-image">
          <img src="/images/5342014.png" alt="service" />
        </div>
      </div>
    </div>
  );
}
