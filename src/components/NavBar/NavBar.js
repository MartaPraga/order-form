import './NavBar.scss';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">1</span>
          <Link to='ClaimantPersonalDetails' spy={true} smooth={true} offset={-100} duration={1000}>zgłaszający</Link>
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">2</span>
          <Link to='ComplaintType' spy={true} smooth={true} offset={-100} duration={1000}>typ naprawy </Link>
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">3</span>
          <Link to='ToolDetails' spy={true} smooth={true} offset={-100} duration={1000}>narzędzie</Link>
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">4</span>
          <Link to='PackageDetails' spy={true} smooth={true} offset={-100} duration={1000}>odbiór przesyłki</Link>
        </li>
        <li className="NavBar__list__element">
          <span className="NavBar__list__element--number">5</span>
          <Link to='Confirmation' spy={true} smooth={true} offset={-100} duration={1000}>potwierdzenie</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
