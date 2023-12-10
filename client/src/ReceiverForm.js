// ReceiverForm.js
import React, { useState } from 'react';
import './ReceiverForm.css'; // Import your CSS file for styling

export default function ReceiverForm() {
  const [receiverInfo, setReceiverInfo] = useState({
    fullName: '',
    code: '',
  });

  const handleReceiverChange = (e) => {
    const { name, value } = e.target;
    setReceiverInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of receiver information
    console.log('Receiver Information:', receiverInfo);
    // Reset the form fields
    setReceiverInfo({
      fullName: '',
      code: '',
    });
  };

  return (
    <div className="receiver-form-container">
      <h2>Receiver Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={receiverInfo.fullName}
              onChange={handleReceiverChange}
              required
            />
          </label>
          <label>
            Code:
            <input
              type="text"
              name="code"
              value={receiverInfo.code}
              onChange={handleReceiverChange}
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
