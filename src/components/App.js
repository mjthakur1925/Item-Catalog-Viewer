import React, { useState } from 'react';
import LeftChild from './LeftChild';
import RightChild from './RightChild';


import Data from '../data/data';


const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <LeftChild data={Data} onItemClick={handleItemClick} />
        </div>
        <div className="col-8">
          <RightChild selectedItem={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default App;

