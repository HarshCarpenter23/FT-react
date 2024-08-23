import React from 'react';

function ContactForm() {
  return (
    <div className="contact-card">
      <div className="contact-container">
        <div className="form-image"></div>
        <div className="form-fields">
          <h2>Contact Us</h2>
          <input type="text" className="input-field" placeholder="Your Name" />
          <input type="email" className="input-field" placeholder="Your Email" />
          <input type="tel" className="input-field" placeholder="Phone" />
          <textarea placeholder="Message" className="input-field textarea"></textarea>
          <button className="submit-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;