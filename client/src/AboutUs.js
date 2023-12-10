// AboutUs.js
import React from "react";
import Navbar from "./Navbar";
import "./AboutUs.css"; // Create a new CSS file for styling

export default function AboutUs() {
  return (
    <div className="about-us">
    <div className="about-us-container">
      <Navbar />
        <h2>About Us</h2>
        <p>This is the about page content.</p>
      </div>
      <footer>
        <p>&copy; 2023 MyParcels App. All rights reserved.</p>
      </footer>
    </div>
  );
}