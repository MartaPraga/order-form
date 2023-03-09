import './PackageDetails.scss';
import React, { useState } from 'react';
import { DeliveryDate, PackageSize } from './components';
import { Section } from '../Section';

export const PackageDetails = () => {
  const [isParcelLockerList, setParcelLockerList] = useState(false);
  const [isDeliveryCompanyList, setDeliveryCompanyList] = useState(false);
  const [isDatePicker, setDatePicker] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(0);
  const [inPostMassage, setInPostMassage] = useState(false);
  const [DPDpickupMassage, setDPDpickupMassage] = useState(false);
  const [DHLPaczkomtMassage, setDHLPaczkomatMassage] = useState(false);

  const PACKAGE_OPTIONS = [
    {
      icon: <img src="img/small_box_icon.svg" alt="small box icon" />,
      size: 'mała',
      range: 'do 5kg',
      lockerRange: '64 x 38 x 8 cm',
      id: 1,
    },
    {
      icon: <img src="img/medium_box_icon.svg" alt="medium box icon" />,
      size: 'średnia',
      range: 'do 10kg',
      lockerRange: '64 x 38 x 19 cm',
      id: 2,
    },
    {
      icon: <img src="img/big_box_icon.svg" alt="big box icon" />,
      size: 'duza',
      range: 'do 20kg',
      lockerRange: '64 x 38 x 41 cm',
      id: 3,
    },
    {
      icon: <img src="img/huge_box_icon.svg" alt="huge box icon" />,
      size: 'wielka',
      range: 'do 35kg',
      lockerRange: '-',
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

  const handleinPost = () => {
    setInPostMassage(true);
    setDPDpickupMassage(false);
    setDHLPaczkomatMassage(false);
  };

  const handleDPDpickup = () => {
    setDPDpickupMassage(true);
    setInPostMassage(false);
    setDHLPaczkomatMassage(false);
  };

  const handleDHLPaczkomat = () => {
    setDPDpickupMassage(false);
    setInPostMassage(false);
    setDHLPaczkomatMassage(true);
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
              : 'PackageDetails__option'
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
              : 'PackageDetails__option'
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
              <div
                className="CompanyList__options__option"
                onClick={handleinPost}
              >
                <img src="img/logo_InPost-paczkomat.png" alt="logo Inpost" />
              </div>
              <div
                className="CompanyList__options__option"
                onClick={handleDPDpickup}
              >
                <img src="img/logo_DPD pickup.png" alt="logo DPD" />
              </div>
              <div
                className="CompanyList__options__option"
                onClick={handleDHLPaczkomat}
              >
                <img src="img/logo_DHL_paczkomat.png" alt="logo DHL" />
              </div>
            </div>
          </div>
        )}
      </div>
      {inPostMassage ? (
        <div className="massage">
          Po potwierdzeniu zgłoszenia, kod do paczkomatu zostanie wysłany na
          wskazany adres e-mail. Aby nadać przesyłkę, udaj się do paczkomatu i
          wprowadź na ekranie otrzymany kod. Otworzy się skrytka, umieść w niej
          paczkę i zamknij drzwiczki.
        </div>
      ) : (
        <div></div>
      )}
      {DHLPaczkomtMassage ? (
        <div className="">
          Wydrukuj etykietę i zanieś paczkę do wybranego punktu obsługi paczek
          lub DHL BOX.
        </div>
      ) : (
        <div></div>
      )}

      {DPDpickupMassage ? (
        <div>
          Wydrukuj etykietę i zanieś paczkę do wybranego punktu obsługi paczek
        </div>
      ) : (
        <div></div>
      )}

      <p>Kategoria przesyłki:</p>

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
                  <label for="id" className="packageSize__option--title">
                    {size}
                  </label>
                  <div>{range}</div>
                </div>
              </div>
              <input
                type="radio"
                id={id}
                value="id"
                name={size}
                checked={active === true}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};
