import { Section } from '../Section';
import { DatePicker } from '../../../DatePicker';
import './ToolDetails.scss';
import { useState, useRef } from 'react';
import React from 'react';

export const ToolDetails = ({clickedGuarantee, clickedPostWarranty}) => {
  const receipt = useRef();
  const certificate = useRef();

  const [receiptValue, setReceiptValue] = useState('nie wybrano pliku');
  const [certificateValue, setCertificateValue] = useState('nie wybrano pliku');

  const handleReceiptChange = () => {
    setReceiptValue(receipt.current.files[0].name);
  };

  const handleChange = () => {
    setCertificateValue(certificate.current.files[0].name);
  };

  return (
    <Section
      title={
        <>
          <img src="/img/drill_icon.svg" alt="drill icon" />
          <h2 id="ToolDetails">Narzędzie</h2>
        </>
      }
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac,
    mattis a quam. Integer vel egestas urna, quis blandit neque."
    >
      <div className="toolDetails">
        <div className="line">
          <input
            className="long"
            type="text"
            id="toolName"
            name="toolName"
            placeholder="Nazwa urządzenia"
            required
          ></input>
          <input
            className="long"
            type="text"
            id="toolModel"
            name="toolModel"
            placeholder="Model"
            required
          ></input>
        </div>
        <div className="line">
          <input
            className="verylong"
            type="text"
            id="SerialNr"
            name="SerialNr"
            placeholder="Numer seryjny (opcjonalnie)"
          ></input>
          <div className="popup">gdzie znaleźć numer?</div>
        </div>
{clickedGuarantee ? (
        <div className="guaranteeData">
          <DatePicker />
          <div className="guaranteeData__proof">
            <div className="guaranteeData__proof--file">
              <label for="receipt">
                Dowód zakupu
                <img src="/img/plus_icon.svg" alt="plus icon"></img>
              </label>
              <span>{receiptValue}</span>
              <input
                accept=".jpg, .jpeg, .png .pdf"
                type="file"
                ref={receipt}
                id="receipt"
                onChange={handleReceiptChange}
              ></input>
            </div>
            <div className="guaranteeData__proof--file">
              <label for="certificate">
                3-letni certyfikat
                <img src="/img/plus_icon.svg" alt="plus icon"></img>
              </label>
              <span>{certificateValue}</span>
              <input
                accept=".jpg, .jpeg, .png .pdf"
                type="file"
                ref={certificate}
                id="certificate"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div> ) : null }

        <div className="description">
          <label className="description__title" for="description">
            Opis usterki
            <textarea
              className="description__data"
              type="text"
              id="description"
              name="description"
            ></textarea>
          </label>
        </div>
        {clickedPostWarranty ? (
        <div className="maxPrice">
          <div className="maxPrice__description">
            <img src="img/plus_icon.svg" alt="question mar icon"></img>
            <p>
              Maksymalna kwota, do której wyrażasz zgodę na naprawę{' '}
              <span>(opcjonalnie)</span>
            </p>
          </div>
          <input 
          className="short" 
          type="number"
          placeholder="Kwota"
          min={1}></input>
        </div> ) : null }
      </div>
    </Section>
  );
};
