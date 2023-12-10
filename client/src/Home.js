// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container">
      {/* Use the Navbar component */}
      <Navbar userLoggedIn={props.userLoggedIn} />

      {/* Main Content */}
      <div className="main-content">
        <div>
          <p>Welcome to MyParcels, your go-to parcel management app!</p>
          <p>Discover how easy it is to manage your parcels with us.</p>
        </div>
      </div>

      {/* User Role Selection */}
      <div className="user-role-selection">
        <div className="custom-dropdown">
          <div className="dropdown-header">Are you a: </div>
          <div className="dropdown-options">
            <Link to="/sender">
              <div>Sender</div>
            </Link>
            <Link to="/receiver">
              <div>Receiver</div>
            </Link>
            <Link to="/staff">
              <div>Staff</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 MyParcels App. All rights reserved.</p>
      </footer>
    </div>
  );
}
