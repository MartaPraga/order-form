import React, {useState} from 'react';
import './DeliveryCompanyList.scss'
import SelectionDataAndTime from '../SelectionDataAndTime/SelectionDataAndTime'

const DeliveryCompanyList = () => {

  const [showDateAndTimePicker, setShowDateAndTimePicker] = useState(false)

const handleClick = () => {
  setShowDateAndTimePicker(true)
}

  return (
    <div className='DeliveryCompanyList'>
      <div className='DeliveryCompanyList__options'>
      <div className='DeliveryCompanyList__options__option' onClick={handleClick}>
      <img src="img/logo_DPD pickup.png" alt="logo DPD" />
      </div>
      <div className='DeliveryCompanyList__options__option'>
      <img src="img/logo_DHL_paczkomat.png" alt="logo DHL" />
      </div>
      </div>
      
      <div className='ChoosinsDateAndTime'>
      {showDateAndTimePicker && <SelectionDataAndTime />}
        </div>

      </div>
  )
}


export default DeliveryCompanyList;