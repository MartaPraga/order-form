import './ClaimantPersonalDetails.scss';
import '../../App.scss';

const ClaimantPersonalDetails = () => {
  return (
    <div className="container">
      <div className="title">
        <img src="/img/person_icon.svg" alt="person icon" />
        <h2>Zgłaszający</h2>
      </div>
      <div className='title--description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac,
        mattis a quam. Integer vel egestas urna, quis blandit neque.
      </div>
      <div className="ClaimantPersonalDetails__form">
        <div className="ClaimantPersonalDetails__form--title">
          <span>Osoba prywatna / </span>
          <span>Firma</span>
        </div>
        <form className="ClaimantPersonalDetails__form__data">
          <div className='ClaimantPersonalDetails__form__data--line'>
            <input className='long' type='text' id='fname' name='fname' placeholder='Imię'></input>
            <input className='long' type='text' id='lname' name='lname' placeholder='Nazwisko'></input>
          </div>
          <div className='ClaimantPersonalDetails__form__data--line'>
          <input className='long' type='text' id='address' name='address' placeholder='Ulica'></input>
          <input className='short' type='text' id='hnumber' name='hnumber' placeholder='Nr domu'></input>
          <input className='short' type='text' id='fnumber' name='fnumber' placeholder='Nr lokalu'></input>
          </div>
          <div className='ClaimantPersonalDetails__form__data--line'>
          <input className='short' type='text' id='postalcode' name='postalcode' placeholder='Kod pocztowy'></input>
          <input className='verylong' type='text' id='city' name='city' placeholder='Miejcowość'></input>
          </div>
          <div className='ClaimantPersonalDetails__form__data--line'>
          <input className='long' type='text' id='phoneNumber' name='phoneNumber' placeholder='Teleton'></input>
          <input className='long' type='text' id='email' name='email' placeholder='E-mail'></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimantPersonalDetails;
