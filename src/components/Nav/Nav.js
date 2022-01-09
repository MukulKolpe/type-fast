import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <span className="flash-logo-text"></span>
      </div>
      <div className="nav-right">
        <a
          href="https://github.com/MukulKolpe/type-fast"
          className="github-link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Nav;
