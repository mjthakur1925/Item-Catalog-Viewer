
import React from 'react';

const LeftChild = ({ data, onItemClick }) => {
  return (
    <div>
      <h2>Left Child</h2>
      <ul className="list-group">
        {data.map((item) => (
          <li
            key={item.id}
            className="list-group-item"
            onClick={() => onItemClick(item.id)}
          >
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftChild;


