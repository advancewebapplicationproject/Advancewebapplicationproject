// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons"; // Import the cog icon
import "./Navbar.css"; // Import a separate CSS file for styling

export default function Navbar() {
  const [showSettings, setShowSettings] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState(null);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5005/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Use the access token from the state
        },
      });

      if (response.ok) {
        console.log("Logout successful");
        setAccessToken(null);
        setLogoutMessage("Successfully logged out!");
      } else {
        const errorData = await response.json();
        console.error("Logout failed:", errorData);
        setLogoutMessage(`Logout failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleDeleteAccount = () => {
    // Implement your delete account logic here
    console.log("Delete Account clicked");
  };

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

        <div className="settings">
          <button className="settings-button" onClick={toggleSettings}>
            <FontAwesomeIcon icon={faCog} />
          </button>
          {showSettings && (
            <div className="settings-dropdown">
              <button className="settings-option" onClick={handleLogout}>
                Logout
              </button>
              <button className="settings-option" onClick={handleDeleteAccount}>
                Delete Account
              </button>
            </div>
          )}
        </div>
        {logoutMessage && <div className="logout-message">{logoutMessage}</div>}
      </div>

      <div className="navbar-auth">
        <p className="user-status">Not logged in</p>
        <br />
        <p className="Sign-up-Status">New to MyParcels</p>
        <div className="auth-links">
          <Link to="/login" className="auth-link">
            Login
          </Link>
          <Link to="/signup" className="auth-link">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
