// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Import a separate CSS file for styling

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <span className="my-parcels-title"> MyParcels</span>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/messages" className="nav-link">
          Messages
        </Link>
        <Link to="/pricing" className="nav-link">
          Pricing
        </Link>
        <Link to="/search" className="nav-link">
          Search
        </Link>
      </div>

      <div className="navbar-auth">
        <p className="user-status">Not logged in</p>
        <div className="auth-links">
          <Link to="login" className="auth-link">
            Login
          </Link>
          <Link to="signup" className="auth-link">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
