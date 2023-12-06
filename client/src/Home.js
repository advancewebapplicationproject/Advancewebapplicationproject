import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import a separate CSS file for styling

export default function Home(props) {
  return (
    <div className="home-container">
      {/* Header */}
      <header>
        <h1>MyParcels App</h1>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div>
          <p>Welcome to MyParcels, your go-to parcel management app!</p>
          <p>Discover how easy it is to manage your parcels with us.</p>
        </div>

        <div>
          <p>User login status: {props.userLoggedIn ? "is logged in" : "not logged in"}</p>
          {props.userLoggedIn ? (
            <Link to="protected">Go to protected view</Link>
          ) : (
            <>
              <Link to="signup">Sign up</Link>
              <br />
              <Link to="login">Login</Link>
              <br />
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 MyParcels App. All rights reserved.</p>
      </footer>
    </div>
  );
}
