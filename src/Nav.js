import React from "react";
import "./Nav.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar__nav">
        <Link to="/">
          <div className="nav__logo">
            <img src={logo} alt="Mitchell Skee" />
          </div>
        </Link>
        <Link to="/projects/">
          <div className="nav__contact">
            <h6>Projects</h6>
          </div>
        </Link>
      </div>
      <div className="navbar__fadeBottom" />
    </div>
  );
}

export default Nav;
