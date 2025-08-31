import React from 'react';
import './contact.css'

import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="headline-track">
        <h1 className="headline">LET’S TALK ✉️ LET’S TALK 📞 LET’S TALK 🌍 </h1>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-card">aq
            <h2>📬 Contact Info</h2>
            <p><strong>Email:</strong> umaniddena@gmail.com</p>
            <p><strong>Phone:</strong> +91 8984605392</p>
            <p><strong>Location:</strong> Hyderabad</p>

            <div className="socials">
              <a href="https://www.instagram.com/shankar__0077?igsh=MWphYXBtYTRtZW16MA=="><FaInstagram /></a>
              <a href="https://www.instagram.com/shankar__0077?igsh=MWphYXBtYTRtZW16MA=="><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/uma-shankar-niddena-3a2ba7301"><FaLinkedin /></a>
              <a href="https://github.com/Uma-Shankar-Niddena"><FaGithub /></a>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h2>🔥 Drop a Message</h2>
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="What's your message, dost?" />
          <button type="submit">Send  Message 💥</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
