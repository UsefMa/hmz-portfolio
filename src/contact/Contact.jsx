import React from "react";
import "./ContactStyle.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <p className="contact-title"> Get in Touch</p>
        <div className="contact-grid">
          <div className="input-side">
            <input type="text" placeholder="Your Email" />
            <br />
            <button>Send'it</button>
          </div>

          {/* media*/}
          <div className="media-side">
            <a href="https://web.facebook.com/mido.hamzaS"  target="_blank" ><AiFillFacebook
              style={{ cursor: "pointer" }}
              size={45}
              className="media-icon"
            /></a>
            <a href= "https://ma.linkedin.com/in/hamza-naouni-275b94197?original_referer=https%3A%2F%2Fwww.google.com%2F"     target="_blank"><AiFillLinkedin
              style={{ cursor: "pointer" }}
              size={45}
              className="media-icon"
            /></a>
            <a href="https://www.google.com/"  target="_blank"><AiFillInstagram
              style={{ cursor: "pointer" }}
              size={45}
              className="media-icon"
            /></a>
          </div>
        </div>
        {/* put the grid container here*/}
      </div>
    </>
  );
};

export default Contact;
