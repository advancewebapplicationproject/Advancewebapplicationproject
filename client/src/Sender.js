// Sender.js
import React, { useState } from 'react';
import './Sender.css'; // Add this line to import Sender.css
import Navbar from './Navbar';
import BoxDetails from './BoxDetails';
import SenderForm from './SenderForm';
import BoxOptions from './BoxOptions'; // Add this line to import BoxOptions

const boxSizes = [
  { name: 'Small', weight: '1kg', length: '10cm', height: '10cm', price: '$5' },
  { name: 'Medium', weight: '5kg', length: '20cm', height: '20cm', price: '$10' },
  { name: 'Large', weight: '10kg', length: '30cm', height: '30cm', price: '$15' },
  // Add more sizes as needed
];

export default function Sender() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxSelect = (boxIndex) => {
    // For simplicity, assuming you have boxSizes array available
    const selectedBox = boxSizes[boxIndex];
    setSelectedBox(selectedBox);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission logic, e.g., send data to the server
    console.log('Form Data:', formData);
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
          <BoxOptions onSelectBox={handleBoxSelect} />
        )}
      </div>
    </div>
  );
}
