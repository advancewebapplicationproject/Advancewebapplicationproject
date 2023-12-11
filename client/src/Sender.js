// Sender.js
import React, { useState, useEffect } from "react";
import "./Sender.css"; // Add this line to import Sender.css
import Navbar from "./Navbar";
import BoxDetails from "./BoxDetails";
import SenderForm from "./SenderForm";
import BoxOptions from "./BoxOptions"; // Add this line to import BoxOptions

const boxSizes = [
  { name: "Small", weight: "1kg", length: "10cm", height: "10cm", price: "$5" },
  {
    name: "Medium",
    weight: "5kg",
    length: "20cm",
    height: "20cm",
    price: "$10",
  },
  {
    name: "Large",
    weight: "10kg",
    length: "30cm",
    height: "30cm",
    price: "$15",
  },
  // Add more sizes as needed
];

export default function Sender() {
  const [selectedBox, setSelectedBox] = useState(null);

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/packages")
      .then((response) => response.json())
      .then((response) => {
        setPackages(response);
      });
    return () => {};
  }, []);

  const handleBoxSelect = (boxIndex) => {
    // For simplicity, assuming you have boxSizes array available
    const selectedBox = boxSizes[boxIndex];
    setSelectedBox(selectedBox);
  };

  const handleFormSubmit = async (formData) => {
    // Handle form submission logic, e.g., send data to the server
    await fetch("http://localhost:5005/packages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <Navbar />
      <div className="sender-container">
        {selectedBox ? (
          <div>
            <BoxDetails box={selectedBox} />
            <SenderForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          <>
            <div className="package-container">
              <h2>Parcels</h2>
              <div className="package-list">
                {packages.map((pack, index) => {
                  return (
                    <div key={index} className="package">
                      <p>Sender name: {pack.sender_name}</p>
                      <p>Sender address: {pack.sender_address}</p>
                      <p>Sender email: {pack.sender_email}</p>
                      <p>Sender contact: {pack.sender_contact}</p>
                      <p>Item name: {pack.item_name}</p>
                      <p>Item weight: {pack.item_weight}</p>
                      <p>Receiver name: {pack.receiver_name}</p>
                      <p>Receiver address: {pack.receiver_address}</p>
                      <p>Receiver email: {pack.receiver_email}</p>
                      <p>Receiver contact: {pack.receiver_contact}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <BoxOptions onSelectBox={handleBoxSelect} />
          </>
        )}
      </div>
    </div>
  );
}
