import './Header.scss';
import '../../App.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__text">
        <img className="header__text--logo" src='/img/ERPATECH_logo.svg'/>
        <h2 className="header__text--title">Formularz serwisowy</h2>
        <h3 className="header__text--description">Zgłoś swoje narzędzie do profesjonalnej naprawy</h3>
      </div>
      <img src='/img/drill.jpg' alt='drill drawing' className="header__image"/>
    </div>
  );
};

export default Header;
