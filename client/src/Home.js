// Home.js
import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
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

      {/* Footer */}
      <footer>
        <p>&copy; 2023 MyParcels App. All rights reserved.</p>
      </footer>
    </div>
  );
}
