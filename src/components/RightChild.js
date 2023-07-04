import React from 'react';

const RightChild = ({ selectedItem }) => {
  return (
    <div className="right-child">
      {selectedItem && (
        <div className="card bg-light mb-3" style={{ borderRadius: '5px' }}>
          <div className="card-body">
            <h2 className="card-title">{selectedItem.Name}</h2>
            <p className="card-text">Price: {selectedItem.Price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightChild;

