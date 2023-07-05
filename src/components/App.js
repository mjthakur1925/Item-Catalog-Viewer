import React, { useState } from 'react';
import Data from '../data/data';
import LeftChild from './LeftChild';
import RightChild from './RightChild';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'; // Import custom CSS

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  const selectedItem = Data.find((item) => item.id === selectedId);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <LeftChild data={Data} onItemClick={handleItemClick} selectedId={selectedId} />
        </div>
        <div className="col-9">
          <RightChild selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default App;



