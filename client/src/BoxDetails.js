// BoxDetails.js
import React from 'react';
import './BoxDetails.css'; // Add this line to import BoxDetails.css

const BoxDetails = ({ box }) => {
  return (
    <div>
      <h2>Box Details</h2>
      <p>Name: {box.name}</p>
      <p>Weight: {box.weight}</p>
      <p>Length: {box.length}</p>
      <p>Height: {box.height}</p>
      <p>Price: {box.price}</p>
    </div>
  );
};

export default BoxDetails;
