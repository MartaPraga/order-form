import React from 'react';
import './ParcelLockerList.scss';

const ParcelLockerList = () => {
  return (
    <div className='ParcelLockerList'>
      <div className='ParcelLockerList__option'>
        <img src="img/logo_InPost-paczkomat.png" alt="logo Inpost" />
      </div>
      <div className='ParcelLockerList__option'>
        <img src="img/logo_DPD pickup.png" alt="logo DPD" />
      </div>
      <div className='ParcelLockerList__option'>
        <img src="img/logo_DHL_paczkomat.png" alt="logo DHL" />
      </div>
    </div>
  );
};

export default ParcelLockerList;
