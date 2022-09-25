import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <div className="footer-header">👋Connect with me </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mukulkolpe/"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/MukulKolpe"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>

          <a
            href="https://github.com/MukulKolpe"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/mukulkolpe/"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#39445a"
        style={{
          backgroundColor: "#fff",
          width: "40px",
          height: "40px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Footer;
