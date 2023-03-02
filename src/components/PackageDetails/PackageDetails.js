import './PackageDetails.scss';
import ParcelLockerList from '../ParcelLockerList/ParcelLockerList';
import DeliveryCompanyList from '../DeliveryCompanyList/DeliveryCompanyList';
import React, { useState } from 'react';

const PackageDetails = () => {

  const [ShowParcelLockerList, setParcelLockerList] = useState(false)
  const [ShowDeliveryCompanyList, setDeliveryCompanyList]= useState(false)
  

  const onClickShowDeliveryCompanyList = () => {
    setDeliveryCompanyList(true);
    setParcelLockerList(false);
    }

  const onClickParcelLockerList = () => {
  setParcelLockerList(true);
  setDeliveryCompanyList(false);
  }

  

  return (
    <div className="container">
      <div className="title">
        <img src="/img/box_icon.svg" alt="box icon" />
        <h2 id='PackageDetails'>Odbiór przesyłki</h2>
      </div>
      <div className="title--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis in nisl quis rutrum.
      </div>
      <p>Wybierz sposób nadania paczki:</p>
      <div className="PackageDetails">
        <div className="PackageDetails__option" onClick={onClickShowDeliveryCompanyList}>
          <img src="/img/car_icon.svg" alt="car icon" />
          <div className="PackageDetails__option--text">wysyłam kurierem</div>
        </div>
        <div className="PackageDetails__option" onClick={onClickParcelLockerList} >
          <img src="/img/pointer_icon.svg" alt="pointer icon" />
          <div className="PackageDetails__option--text">
            paczkomat lub punkt odbioru
          </div>
        </div>
      </div>

      <div className='ChoosingCompany'>

        {ShowDeliveryCompanyList && <DeliveryCompanyList />}
        {ShowParcelLockerList && <ParcelLockerList />}
        
      </div>

      
      
      <p>Kategoria przesyłki:</p>
      <div className="packageSize">
        <div className="packageSize__option">
          <div className="packageSize__option--image">
            <img src="img/small_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">mała</div>
            <div className="packageSize__option--weitgh">do 5 kg</div>
          </div>
        </div>
        <div className="packageSize__option">
          <div className="packageSize__option--image">
            <img src="img/medium_box_icon.svg" alt="small box icon" />
          </div>
          <dix className="packageSize__option--text">
            <div className="packageSize__option--title">średnia</div>
            <div className="packageSize__option--weitgh">do 10 kg</div>
          </dix>
        </div>
        <div className="packageSize__option">
          <div className="packageSize__option--image">
            <img src="img/big_box_icon.svg" alt="small box icon" />
          </div>
          <dix className="packageSize__option--text">
            <div className="packageSize__option--title">duza</div>
            <div className="packageSize__option--weitgh">do 20 kg</div>
          </dix>
        </div>
        <div className="packageSize__option">
          <div className="packageSize__option--image">
            <img src="img/huge_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">wielka</div>
            <div className="packageSize__option--weitgh">do 35 kg</div>
          </div>
        </div>
        <div className="packageSize__option">
          <div className="packageSize__option--image">
            <img src="img/pallet_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
          <div className="packageSize__option--title">paleta</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
