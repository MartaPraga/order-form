import './PackageDetails.scss';
import React, { useState } from 'react';
import { DeliveryDate } from './components/DeliveryDate';
import { Section } from '../Section';

export const PackageDetails = () => {
  const [isParcelLockerList, setParcelLockerList] = useState(false);
  const [isDeliveryCompanyList, setDeliveryCompanyList] = useState(false);
  const [isDatePicker, setDatePicker] = useState(false);

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
          className="PackageDetails__option"
          onClick={handleDeliveryCompanyList}
        >
          <img src="/img/car_icon.svg" alt="car icon" />
          <div className="PackageDetails__option--text">wysyłam kurierem</div>
        </div>
        <div
          className="PackageDetails__option"
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
              <div className="CompanyList__option">
                <img src="img/logo_InPost-paczkomat.png" alt="logo Inpost" />
              </div>
              <div className="CompanyList__option">
                <img src="img/logo_DPD pickup.png" alt="logo DPD" />
              </div>
              <div className="CompanyList__option">
                <img src="img/logo_DHL_paczkomat.png" alt="logo DHL" />
              </div>
            </div>
          </div>
        )}
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
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">średnia</div>
            <div>do 10 kg</div>
          </div>
        </div>
        <div className="packageSize__option">
          <div className="packageSize__option--image">
            <img src="img/big_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">duza</div>
            <div>do 20 kg</div>
          </div>
        </div>
        <div className="packageSize__option">
          <div className="packageSize__option--image">
            <img src="img/huge_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">wielka</div>
            <div>do 35 kg</div>
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
    </Section>
  );
};
