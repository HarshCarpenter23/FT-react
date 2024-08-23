import React from 'react';
import ContactForm from './ContactForm';
import './ContactPage.css';
import Navbar from './Navbar';

function Contact() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <video autoPlay loop muted playsInline className="background-video">
        <source src="Chocolate - 3d animation with source file.mp4" type="video/mp4" />
      </video>
      <div className="page-content">
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;