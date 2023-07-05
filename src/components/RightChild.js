import React from 'react';

const RightChild = ({ selectedItem }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Item Details</h5>
        <p className="card-text">ID: {selectedItem.id}</p>
        <p className="card-text">Name: {selectedItem.Name}</p>
        <p className="card-text">Price: ${selectedItem.Price}</p>
      </div>
    </div>
  );
};

export default RightChild;







