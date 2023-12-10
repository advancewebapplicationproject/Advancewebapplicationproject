// BoxOptions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoxOptions.css'; // Import the CSS file for styling

const BoxOptions = ({ onSelectBox }) => {
  const navigate = useNavigate();

  const handleBoxClick = (index) => {
    onSelectBox(index);
    navigate('/sender');
  };

  const boxSizes = [
    { name: 'Small', weight: '1kg', length: '10cm', height: '10cm', price: '$5' },
    { name: 'Medium', weight: '5kg', length: '20cm', height: '20cm', price: '$10' },
    { name: 'Large', weight: '10kg', length: '30cm', height: '30cm', price: '$15' },
  ];

  return (
    <div className='Text-above-box'><h2 className="parcel-heading">Select the size of your parcel</h2> 
    <div className="box-options-container">
      {boxSizes.map((box, index) => (
        <div
          key={index}
          className={`box ${box.name.toLowerCase()}-box`}
          onClick={() => handleBoxClick(index)}
        >
          <h3>{box.name}</h3>
          <p>Weight: {box.weight}</p>
          <p>Length: {box.length}</p>
          <p>Height: {box.height}</p>
          <p>Price: {box.price}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BoxOptions;
