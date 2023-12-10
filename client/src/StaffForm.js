// StaffForm.js
import React, { useState } from 'react';
import './StaffForm.css'; // Import your CSS file for styling

export default function StaffForm() {
  const [staffInfo, setStaffInfo] = useState({
    fullName: '',
    code: '',
  });

  const handleStaffChange = (e) => {
    const { name, value } = e.target;
    setStaffInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of staff information
    console.log('Staff Information:', staffInfo);
    // Reset the form fields
    setStaffInfo({
      fullName: '',
      code: '',
    });
  };

  return (
    <div className="staff-form-container">
      <h2>Staff Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={staffInfo.fullName}
              onChange={handleStaffChange}
              required
            />
          </label>
          <label>
            Code:
            <input
              type="text"
              name="code"
              value={staffInfo.code}
              onChange={handleStaffChange}
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
