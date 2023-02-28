import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">1</span>
          Zgłaszający
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">2</span>
          Typ naprawy
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">3</span>
          Narzędzie
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">4</span>
          Odbiór przesyłki
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">5</span>
          Potwierdzenie
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
