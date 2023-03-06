import './UserDetails.scss';
import React, { useState } from 'react';
import { Section } from '../Section/Section';

export const UserDetails = ({ register, unregister, errors }) => {
  const [personalData, setPersonalData] = useState(true);

  const handlePersonalData = () => {
    setPersonalData(true);
  };

  const handleCompanyData = () => {
    setPersonalData(false);
  };
  return (
    <Section
      title={
        <>
          <img src="/img/person_icon.svg" alt="person icon" />
          <h2 id="UserDetails">Zgłaszający</h2>
        </>
      }
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac, mattis a quam. Integer vel egestas urna, quis blandit neque.'
      }
    >
      <div>
        <div className="UserDetails__form--title">
          <button onClick={handlePersonalData}>Osoba prywatna / </button>
          <button onClick={handleCompanyData}>Firma</button>
        </div>
        <div className="UserDetails__form__data--line">
          {personalData ? (
            <>
              {/* TODO: create separate Input component and reuse it */}
              <label className="label">
                Imię
                <input
                  {...register('firstName', { required: true })}
                  className="long"
                  type="text"
                  placeholder="Imię"
                />
                {errors.firstName && <p className="error">pole obowiązkowe</p>}
              </label>

              <label className="label">
                Nazwisko
                <input
                  {...register('lastName', { required: true })}
                  className="long"
                  type="text"
                  placeholder="Nazwisko"
                />
                {errors.lastName && <p className="error">pole obowiązkowe</p>}
              </label>
            </>
          ) : (
            <>
              <label className="label">
                {/* {label} */}
                <input
                  {...register('companyName', { required: true })}
                  className="long"
                  type="text"
                  placeholder="Nazwa firmy"
                />
                {errors.companyName && (
                  <p className="error">pole obowiązkowe</p>
                )}
              </label>

              <label className="label">
                NIP
                <input
                  {...register('companyTaxNumber', { required: true })}
                  className="long"
                  type="text"
                  placeholder="NIP"
                />
                {errors.companyTaxNumber && (
                  <p className="error">pole obowiązkowe</p>
                )}
              </label>
            </>
          )}
        </div>
        <div className="UserDetails__form__data--line">
          <label className="label">
            Adres
            <input
              {...register('address', { required: true })}
              className="long"
              type="text"
              id="address"
              name="address"
              placeholder="Ulica"
            />
            {errors.address && <p className="error">pole obowiązkowe</p>}
          </label>
          <label className="label">
            Numer domu
            <input
              {...register('houseNumber', { required: true })}
              className="short"
              type="text"
              placeholder="Nr domu"
            />
            {errors.houseNumber && <p className="error">pole obowiązkowe</p>}
          </label>
          <label className="label">
            Numer lokalu
            <input
              {...register('flatNumber', { required: true })}
              className="short"
              type="text"
              placeholder="Nr lokalu"
            />
            {errors.flatNumber && <p className="error">pole obowiązkowe</p>}
          </label>
        </div>
        <div className="UserDetails__form__data--line">
          <label className="label">
            Kod pocztowy
            <input
              {...register('postalCode', { required: true })}
              className="short"
              type="text"
              placeholder="Kod pocztowy"
            />
            {errors.postalCode && <p className="error">pole obowiązkowe</p>}
          </label>
          <label className="label">
            Miejscowość
            <input
              {...register('city', { required: true })}
              className="verylong"
              type="text"
              placeholder="Miejscowość"
            />
            {errors.city && <p className="error">pole obowiązkowe</p>}
          </label>
        </div>
        <div className="UserDetails__form__data--line">
          <label className="label">
            Numer telefonu
            <input
              {...register('phoneNumber', { required: true })}
              className="long"
              type="tel"
              placeholder="Telefon"
            />
            {errors.phoneNumber && <p className="error">pole obowiązkowe</p>}
          </label>
          <label className="label">
            E-mail
            <input
              {...register('mail', { required: true })}
              className="long"
              type="email"
              placeholder="E-mail"
            />
            {errors.mail && <p className="error">pole obowiązkowe</p>}
          </label>
        </div>
      </div>
    </Section>
  );
};
