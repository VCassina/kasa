import "../styles/Header.css";
import '../styles/fonts.css';
// import kkasaImage from "../images/kkasa.png";
// import logokasa from "../images/logokasa.png";
// import skasa from "../images/skasa.png";
// import akasa from "../images/akasa.png";
import kasalogo from "../images/fulllogokasa.png";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      {/* <div className="header_logo">
                <img src={kkasaImage} alt="K de Kasa" />
                <img src={logokasa} alt="Logo de Kasa" />
                <img src={skasa} alt="S de Kasa" />
                <img src={akasa} alt="A de Kasa" />
            </div> */}
      <img src={kasalogo} alt="Logo Kasa" className="header_logo"/>
      <nav className="header_nav">
        <ul className="header_ul">
          <li className="header_homepage-link">
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
