import React from 'react';

const RightChild = ({ selectedItem }) => {
  const selectedData = Data.find((item) => item.id === selectedItem);

  return (
    <div>
      <h2>Right Child</h2>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{selectedData.Name}</h5>
          <p className="card-text">Price: ${selectedData.Price}</p>
        </div>
      </div>
    </div>
  );
};

export default RightChild;


