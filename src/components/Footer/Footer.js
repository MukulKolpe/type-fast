import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        href="https://www.linkedin.com/in/mukulkolpe/"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://twitter.com/MukulKolpe"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fab fa-twitter"></i>
      </a>

      <a
        href="https://github.com/MukulKolpe"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fab fa-github"></i>
      </a>

      <a
        href="https://www.instagram.com/mukul_kolpe/?hl=en"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fab fa-instagram"></i>
      </a>
    
     
    </div>
  );
};

export default Footer;
