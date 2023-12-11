// ReceiverForm.js
import React, { useState, useEffect } from "react";
import "./ReceiverForm.css"; // Import your CSS file for styling

export default function ReceiverForm() {
  const [receiverInfo, setReceiverInfo] = useState({
    id: "",
    code: "",
  });
  const [error, setError] = useState("");
  const [lockerUpdated, setLockerUpdated] = useState(0);

  const [lockers, setLockers] = useState([]);

  const handleReceiverChange = (e) => {
    const { name, value } = e.target;
    setReceiverInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("http://localhost:5005/lockers")
      .then((response) => response.json())
      .then((response) => {
        setLockers(response);
      });
    return () => {};
  }, [lockerUpdated]);

  const handleLockerUpdate = async (id, updated_locker_info) => {
    setError("");
    const response = await fetch(`http://localhost:5005/lockers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated_locker_info),
    });
    if (response.status === 200) {
      setLockerUpdated(lockerUpdated + 1);
      setReceiverInfo({
        id: "",
        code: "",
      });
    } else {
      const responseMessage = await response.json();
      setError(responseMessage.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLockerUpdate(receiverInfo.id, {
      open: true,
      code: receiverInfo.code,
    });
  };

  const handleCloseLocker = async (id) => {
    await handleLockerUpdate(id, { open: false });
  };

  return (
    <div className="receiver-form-container">
      <h2>Lockers</h2>
      <div className="lockers-list">
        {lockers.map((locker, index) => {
          return (
            <div key={index} className="locker">
              <p>Locker ID: {locker.id}</p>
              <p>Locker Open: {locker.open ? "Open" : "Closed"}</p>
              <p>Locker Empty: {locker.package_id ? "Full" : "Empty"}</p>
              {locker.open && (
                <input
                  type="button"
                  value="Close Locker"
                  onClick={() => handleCloseLocker(locker.id)}
                />
              )}
            </div>
          );
        })}
      </div>
      <h2>Receiver Information</h2>
      <span className="red">{error}</span>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <label>
            Locker ID:
            <input
              type="text"
              name="id"
              value={receiverInfo.id}
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
