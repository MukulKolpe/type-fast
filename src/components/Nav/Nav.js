import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link to="/" className="logo" />
      </div>
      <div className="nav-right">
        <button className="nav-button">
          <GitHubIcon />
          <a
            href="https://github.com/MukulKolpe/type-fast"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Nav;
