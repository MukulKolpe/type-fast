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
        <button
          className="nav-button"
          onClick={() =>
            window.open("https://github.com/MukulKolpe/type-fast", "_blank")
          }
        >
          <GitHubIcon />
          <span className="nav-link">Code</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
