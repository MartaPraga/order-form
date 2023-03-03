import './ClaimantPersonalDetails.scss';
import '../../App.scss';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import { useState } from 'react';


const ClaimantPersonalDetails = () => {

  const [showPersonalDetails, setShowPersonalDetails] =useState(true)
  const [showCompanyDetails, setShowCompanyDetails] = useState(false)
 

 const changeDataTypePersonalCompany = () => {
  setShowPersonalDetails(current => !current);
  setShowCompanyDetails(current => !current)
}
  
  return (
    <div className="container">
      <div className="title">
        <img src="/img/person_icon.svg" alt="person icon" />
        <h2 id='ClaimantPersonalDetails'>Zgłaszający</h2>
      </div>
      <div className="title--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac,
        mattis a quam. Integer vel egestas urna, quis blandit neque.
      </div>
      <div className="ClaimantPersonalDetails__form">
        <div className="ClaimantPersonalDetails__form--title" onClick={changeDataTypePersonalCompany}>
          <span>Osoba prywatna / </span>
          <span>Firma</span>
        </div>
        {showPersonalDetails && <PersonalDetails />}
        {showCompanyDetails && <CompanyDetails />}
       
        
      
      </div>
    </div>
  );
};

export default ClaimantPersonalDetails;
