import React, { useState } from 'react';
import LeftChild from './LeftChild.js';
import RightChild from './RightChild';

import { data } from '../data/data';

const App = () => {
  const [selectedItemId, setSelectedItemId] = useState(3); // Default selected item ID

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <LeftChild items={data} onItemClick={handleItemClick} />
          </div>
          <div className="col-md-8">
            <RightChild selectedItem={data.find(item => item.id === selectedItemId)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
