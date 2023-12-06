// AboutUs.js
import React from "react";
import Navbar from "./Navbar";
import "./AboutUs.css"; // Create a new CSS file for styling

export default function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Use the Navbar component */}
      <Navbar />

      {/* Main Content with Background Image */}
      <div
        className="main-content"
        style={{
          backgroundImage: `url('C:\\Users\\bhand\\Advancewebapplicationproject-1\\Advancewebapplicationproject\\client\\src\\parcellockerImage.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh", // Set the height to cover the entire viewport
        }}
      >
        <h2>About Us</h2>
        <p>This is the about page content.</p>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 MyParcels App. All rights reserved.</p>
      </footer>
    </div>
  );
}
