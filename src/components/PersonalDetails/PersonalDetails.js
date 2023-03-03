import './PersonalDetails.scss'

import React from 'react'

export default function 
() {
  return (
    <div>
       <form className="ClaimantPersonalDetails__form__data">
          <div className="ClaimantPersonalDetails__form__data--line">
            <input
              className="long"
              type="text"
              id="fname"
              name="fname"
              placeholder="Imię"
              required
            ></input>
            <input
              className="long"
              type="text"
              id="lname"
              name="lname"
              placeholder="Nazwisko"
              required
            ></input>
          </div>
          <div className="ClaimantPersonalDetails__form__data--line">
            <input
              className="long"
              type="text"
              id="address"
              name="address"
              placeholder="Ulica"
              required
            ></input>
            <input
              className="short"
              type="text"
              id="hnumber"
              name="hnumber"
              placeholder="Nr domu"
              required
            ></input>
            <input
              className="short"
              type="text"
              id="fnumber"
              name="fnumber"
              placeholder="Nr lokalu"
            ></input>
          </div>
          <div className="ClaimantPersonalDetails__form__data--line">
            <input
              className="short"
              type="text"
              id="postalcode"
              name="postalcode"
              placeholder="Kod pocztowy"
              required
            ></input>
            <input
              className="verylong"
              type="text"
              id="city"
              name="city"
              placeholder="Miejcowość"
              required
            ></input>
          </div>
          <div className="ClaimantPersonalDetails__form__data--line">
            <input
              className="long"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Telefon"
              required
            ></input>
            <input
              className="long"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            ></input>
          </div>
        </form>
    </div>
  )
}
