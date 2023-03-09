import React from 'react';
import './PackageSize.scss';
import { useState } from 'react';

export const PackageSize = ({ icon, size, range, id, setCurrentPackage, active, handleClick }) => {
  // const [currentPackage, setCurrentPackage] = useState(0);
  // const active = currentPackage === id;

  // const handleClick = (id) => {
  //   setCurrentPackage(id);
  // };

  return (
    
      <div
        className={active ? 'active' : 'packageSize__option'}
        onClick={() => handleClick(id)} >
        <div className="packageSize__option--image">{icon}</div>
        <div className="packageSize__option--text">
          <div className="packageSize__option--title">{size}</div>
          <div>{range}</div>
        </div>
      </div>
  );
};
