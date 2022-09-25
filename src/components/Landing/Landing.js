import React from "react";
import "./Landing.css";
import HeroImage from "./../../Assets/HeroImage.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="landing-header">Improve Typing...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Speed!", "Accuracy!", "Technique!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right">
        <img
          data-aos="fade-left"
          className="hero-image"
          src={HeroImage}
          alt="monkey"
        />
      </div>
    </div>
  );
};
export default Landing;
