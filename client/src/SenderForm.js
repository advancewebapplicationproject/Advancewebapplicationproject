// SenderForm.js
import React from "react";
import "./SenderForm.css";

const SenderForm = ({ onSubmit }) => {
  return (
    <div>
      <h2>Sender Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            sender_name: e.target.senderName.value,
            sender_address: e.target.senderAddress.value,
            sender_email: e.target.senderEmail.value,
            sender_contact: e.target.senderContact.value,
            item_name: e.target.itemName.value,
            item_weight: e.target.itemWeight.value,
            receiver_name: e.target.receiverName.value,
            receiver_address: e.target.receiverAddress.value,
            receiver_email: e.target.receiverEmail.value,
            receiver_contact: e.target.receiverContact.value,
          };
          onSubmit(data);
        }}
      >
        {/* Sender Information */}
        <div>
          <h3>Sender Information</h3>
          <label>
            Sender Name:
            <input type="text" name="senderName" required />
          </label>
          <label>
            Sender Address:
            <input type="text" name="senderAddress" required />
          </label>
          <label>
            Sender Email:
            <input type="email" name="senderEmail" required />
          </label>
          <label>
            Sender Contact:
            <input type="text" name="senderContact" required />
          </label>
        </div>

        {/* Item Details */}
        <div>
          <h3>Item Details</h3>
          <label>
            Item Name:
            <input type="text" name="itemName" required />
          </label>
          <label>
            Item Weight:
            <input type="text" name="itemWeight" required />
          </label>
          {/* Add more item details as needed */}
        </div>

        {/* Receiver Information */}
        <div>
          <h3>Receiver Information</h3>
          <label>
            Receiver Name:
            <input type="text" name="receiverName" required />
          </label>
          <label>
            Receiver Address:
            <input type="text" name="receiverAddress" required />
          </label>
          <label>
            Receiver Email:
            <input type="email" name="receiverEmail" required />
          </label>
          <label>
            Receiver Contact:
            <input type="text" name="receiverContact" required />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SenderForm;
