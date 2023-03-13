import './PackageDetails.scss';
import React, { useState } from 'react';
import { DeliveryDate } from './components';
import { Section } from '../Section';
import { useRef, useEffect } from 'react';

export const PackageDetails = () => {
  const [isParcelLockerList, setParcelLockerList] = useState(false);
  const [isDeliveryCompanyList, setDeliveryCompanyList] = useState(false);
  const [isDatePicker, setDatePicker] = useState(false);
  const [DPDDelivery, setDPDDelivery] = useState(false);
  const [DHLDelivery, setDHLDelivery] = useState(false);
  const [inPostMassage, setInPostMassage] = useState(false);
  const [DPDpickupMassage, setDPDpickupMassage] = useState(false);
  const [DHLPaczkomtMassage, setDHLPaczkomatMassage] = useState(false);
  const [smallPackage, setSmallPackage] = useState(false);
  const [mediumPackage, setMediumPackage] = useState(false);
  const [bigPackage, setBigPackage] = useState(false);
  const [HugePackage, setHugePackage] = useState(false);
  const [PalletPackage, setPalletPackage] = useState(false);

  const isSmall = useRef(false);
  const isMedium = useRef(false);
  const isBig = useRef(false);
  const isHuge = useRef(false);
  const isPallet = useRef(false);

  const handleSmallPackage = () => {
    setSmallPackage(true);
    setMediumPackage(false);
    setBigPackage(false);
    setHugePackage(false);
    setPalletPackage(false);
  };

  const handleMediumPackage = () => {
    setSmallPackage(false);
    setMediumPackage(true);
    setBigPackage(false);
    setHugePackage(false);
    setPalletPackage(false);
  };

  const handleBigPackage = () => {
    setSmallPackage(false);
    setMediumPackage(false);
    setBigPackage(true);
    setHugePackage(false);
    setPalletPackage(false);
  };

  const handleHugePackage = () => {
    setSmallPackage(false);
    setMediumPackage(false);
    setBigPackage(false);
    setHugePackage(true);
    setPalletPackage(false);
  };

  const handlePalletPackage = () => {
    setSmallPackage(false);
    setMediumPackage(false);
    setBigPackage(false);
    setHugePackage(false);
    setPalletPackage(true);
  };

  useEffect(() => {
    isSmall.current.disabled = true;
    isMedium.current.disabled = true;
    isBig.current.disabled = true;
    isHuge.current.disabled = true;
  }, []);

  const handleDeliveryCompanyList = () => {
    setDeliveryCompanyList(true);
    setParcelLockerList(false);
    isSmall.current.disabled = false;
    isMedium.current.disabled = false;
    isBig.current.disabled = false;
    isHuge.current.disabled = false;
    isPallet.current.disabled = false;
  };

  const handleParcelLockerList = () => {
    setParcelLockerList(true);
    setDeliveryCompanyList(false);
    setHugePackage(false);
    setPalletPackage(false);
    isSmall.current.disabled = false;
    isMedium.current.disabled = false;
    isBig.current.disabled = false;
    isHuge.current.disabled = true;
    isPallet.current.disabled = true;
  };

  const haldleDPDDelivery = () => {
    setDPDDelivery(true);
    setDHLDelivery(false);
    setDatePicker(true);
  };

  const haldleDHLDelivery = () => {
    setDPDDelivery(false);
    setDHLDelivery(true);
    setDatePicker(true);
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
                className={
                  DPDDelivery ? 'clickedOption' : 'CompanyList__options__option'
                }
                onClick={haldleDPDDelivery}
              >
                <img src="img/logo_DPD pickup.png" alt="logo DPD" />
              </div>
              <div
                className={
                  DHLDelivery ? 'clickedOption' : 'CompanyList__options__option'
                }
                onClick={haldleDHLDelivery}
              >
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
                className={
                  inPostMassage
                    ? 'clickedOption'
                    : 'CompanyList__options__option'
                }
                onClick={handleinPost}
              >
                <img src="img/logo_InPost-paczkomat.png" alt="logo Inpost" />
              </div>
              <div
                className={
                  DPDpickupMassage
                    ? 'clickedOption'
                    : 'CompanyList__options__option'
                }
                onClick={handleDPDpickup}
              >
                <img src="img/logo_DPD pickup.png" alt="logo DPD" />
              </div>
              <div
                className={
                  DHLPaczkomtMassage
                    ? 'clickedOption'
                    : 'CompanyList__options__option'
                }
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
        <button
          ref={isSmall}
          className={smallPackage ? 'activePackage' : 'packageSize__option'}
          onClick={() => handleSmallPackage()}
          type="button"
          value='mała'
        >
          <div className="packageSize__option--image">
            <img src="img/small_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">mała</div>
            <div className="packageSize__option--weitgh">do 5 kg</div>
          </div>
        </button>
        <button
          ref={isMedium}
          className={mediumPackage ? 'activePackage' : 'packageSize__option'}
          onClick={() => handleMediumPackage()}
          type="button"
          value='średnia'
        >
          <div className="packageSize__option--image">
            <img src="img/medium_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">średnia</div>
            <div>do 10 kg</div>
          </div>
        </button>
        <button
          ref={isBig}
          className={bigPackage ? 'activePackage' : 'packageSize__option'}
          onClick={() => handleBigPackage()}
          type="button"
          value='duza'
        >
          <div className="packageSize__option--image">
            <img src="img/big_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">duza</div>
            <div>do 20 kg</div>
          </div>
        </button>
        <button
          ref={isHuge}
          className={HugePackage ? 'activePackage' : 'packageSize__option'}
          onClick={() => handleHugePackage()}
          type="button"
          value='wielka'
        >
          <div className="packageSize__option--image">
            <img src="img/huge_box_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">wielka</div>
            <div>do 35 kg</div>
          </div>
        </button>
        <button
          ref={isPallet}
          className={PalletPackage ? 'activePackage' : 'packageSize__option'}
          onClick={() => handlePalletPackage()}
          type="button"
          value="paleta"
        >
          <div className="packageSize__option--image">
            <img src="img/pallet_icon.svg" alt="small box icon" />
          </div>
          <div className="packageSize__option--text">
            <div className="packageSize__option--title">paleta</div>
          </div>
        </button>

       
      </div>
    </Section>
  );
};
