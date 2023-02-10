import './Header.scss';
import '../../App.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__text">
        <img src='/img/ERPATECH_logo.svg' alt='logo'/>
        <h3 className="header__text--title">Formularz serwisowy</h3>
        <p className="header__text--description">Zgłoś swoje narzędzie do naprawy</p>
      </div>
      <img src='/img/drill.jpg' alt='drill drawing' className="header__image"/>
    </div>
  );
};

export default Header;
