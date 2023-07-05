import React from 'react';

const LeftChild = ({ data, onItemClick, selectedId }) => {
  return (
    <div className="list-group">
      {data.map((item) => (
        <a
          key={item.id}
          href="#!"
          className={`list-group-item list-group-item-action ${selectedId === item.id ? 'active' : ''}`}
          onClick={() => onItemClick(item.id)}
        >
          {item.Name}
        </a>
      ))}
    </div>
  );
};

export default LeftChild;







