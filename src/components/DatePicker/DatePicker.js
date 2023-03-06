import './DatePicker.scss';
import React, { useState } from 'react';
import BaseDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker =() => {
  
const [startDate, setStartDate] = useState(null)
// const [isWeekday, setIsWeekday] = useState(true)

const isWeekday = (date) => {
  const day = new Date(date);
  return day !== 0 && day !== 6;
};

  return (
    <div className="PurchaseDate">
      <span className="PurchaseDate--icon">
        <img src="/img/calendar_icon.svg"></img>
      </span>

      <BaseDatePicker
        className="PurchaseDate__DatePicker long"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        filterDate={isWeekday}
        placeholderText="Data zakupu"
      />
    </div>
  );
}
