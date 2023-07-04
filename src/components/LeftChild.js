import React from 'react';

const LeftChild = ({ items, onItemClick }) => {
  return (
    <div className="left-child">
      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item">
            <button
              className="btn btn-link"
              onClick={() => onItemClick(item.id)}
            >
              {item.Name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftChild;

