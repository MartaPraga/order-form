import './PackageDetails.scss';
import React, { useState } from 'react';
import { DeliveryDate, PackageSize } from './components';
import { Section } from '../Section';

export const PackageDetails = () => {
  const [isParcelLockerList, setParcelLockerList] = useState(false);
  const [isDeliveryCompanyList, setDeliveryCompanyList] = useState(false);
  const [isDatePicker, setDatePicker] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(0);

  const PACKAGE_OPTIONS = [
    {
      icon: <img src="img/small_box_icon.svg" alt="small box icon" />,
      size: 'mała',
      range: 'do 5kg',
      id: 1,
    },
    {
      icon: <img src="img/medium_box_icon.svg" alt="medium box icon" />,
      size: 'średnia',
      range: 'do 10kg',
      id: 2,
    },
    {
      icon: <img src="img/big_box_icon.svg" alt="big box icon" />,
      size: 'duza',
      range: 'do 20kg',
      id: 3,
    },
    {
      icon: <img src="img/huge_box_icon.svg" alt="huge box icon" />,
      size: 'wielka',
      range: 'do 35kg',
      id: 4,
    },
    {
      icon: <img src="img/pallet_icon.svg" alt="pallet icon" />,
      size: 'paleta',
      range: '',
      id: 5,
    },
  ];

  const handleDeliveryCompanyList = () => {
    setDeliveryCompanyList(true);
    setParcelLockerList(false);
  };

  const handleParcelLockerList = () => {
    setParcelLockerList(true);
    setDeliveryCompanyList(false);
  };

  const handlePicker = () => {
    setDatePicker(true);
  };

  const handleClick = (id) => {
    setCurrentPackage(id);
  };

  return (
    <Section
      title={
        <>
          <img src="/img/box_icon.svg" alt="box icon" />
          <h2 id="PackageDetails">Odbiór przesyłki</h2>
        </>
      }
      description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      facilisis in nisl quis rutrum."
    >
      <p>Wybierz sposób nadania paczki:</p>
      <div className="PackageDetails">
        <div
          className={
            isDeliveryCompanyList
              ? 'clickedDeliveryOption'
              : 'PackageDetails__option' && isParcelLockerList
              ? 'block'
              : 'clickedDeliveryOption'
          }
          onClick={handleDeliveryCompanyList}
        >
          <img src="/img/car_icon.svg" alt="car icon" />
          <div className="PackageDetails__option--text">wysyłam kurierem</div>
        </div>
        <div
          className={
            isParcelLockerList
              ? 'clickedDeliveryOption'
              : 'PackageDetails__option' && isDeliveryCompanyList
              ? 'block'
              : 'clickedDeliveryOption'
          }
          onClick={handleParcelLockerList}
        >
          <img src="/img/pointer_icon.svg" alt="pointer icon" />
          <div className="PackageDetails__option--text">
            paczkomat lub punkt odbioru
          </div>
        </div>
      </div>

      <div className="ChoosingCompany">
        {isDeliveryCompanyList && (
          <div className="CompanyList">
            <div className="CompanyList__options">
              <div
                className="CompanyList__options__option"
                onClick={handlePicker}
              >
                <img src="img/logo_DPD pickup.png" alt="logo DPD" />
              </div>
              <div className="CompanyList__options__option">
                <img src="img/logo_DHLKurier.png" alt="logo DHL" />
              </div>
            </div>

            <div className="ChoosingDateAndTime">
              {isDatePicker && <DeliveryDate />}
            </div>
          </div>
        )}
        {isParcelLockerList && (
          <div className="CompanyList">
            <div className="CompanyList__options">
              <div className="CompanyList__options__option">
                <img src="img/logo_InPost-paczkomat.png" alt="logo Inpost" />
              </div>
              <div className="CompanyList__options__option">
                <img src="img/logo_DPD pickup.png" alt="logo DPD" />
              </div>
              <div className="CompanyList__options__option">
                <img src="img/logo_DHL_paczkomat.png" alt="logo DHL" />
              </div>
            </div>
          </div>
        )}
      </div>

      <p>Kategoria przesyłki:</p>
      {/* <div className="Size">
        {PACKAGE_OPTIONS.map(({ id }) => {
          const active = currentPackage === id;

          return (
            <div className="packageSize">
              {PACKAGE_OPTIONS.map((option) => (
                <PackageSize
                  {...option}
                  setCurrentPackage={setCurrentPackage}
                  active={active}
                  handleClick={handleClick}
                />
              )
              )}
            </div>
          );
        })}
      </div> */}

      <div className="packageSize">
        {PACKAGE_OPTIONS.map(({ id, icon, size, range }) => {
          const active = currentPackage === id;

          return (
            <div className="packageSize">
              <div
                className={active ? 'active' : 'packageSize__option'}
                onClick={() => handleClick(id)}
              >
                <div className="packageSize__option--image">{icon}</div>
                <div className="packageSize__option--text">
                  <label for="id" className="packageSize__option--title">{size}</label>
                  <div>{range}</div>                  
                </div>
                
              </div>
              <input type="radio" id={id} value="id" name={size} checked={active === true} required />

            </div>
          );
        })}
      </div>

    </Section>
  );
};
