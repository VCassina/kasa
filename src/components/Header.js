import "../styles/Header.css";
import '../styles/fonts.css';
// import kkasaImage from "../images/kkasa.png";
// import logokasa from "../images/logokasa.png";
// import skasa from "../images/skasa.png";
// import akasa from "../images/akasa.png";
import kasalogo from "../images/fulllogokasa.png";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Header() {
    const [isHomePageActive, setHomePageActive] = useState(false);          /* Variables d'états pour savoir qui sera surligné. */
    const [isAboutPageActive, setAboutPageActive] = useState(false);        /* Variables d'états pour savoir qui sera surligné. */
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
          setHomePageActive(true);
          setAboutPageActive(false);
        } else if (location.pathname === "/about") {
          setHomePageActive(false);
          setAboutPageActive(true);
        } else {
          setHomePageActive(false);
          setAboutPageActive(false);
        }
      }, [location.pathname]);

  return (
    <header>
      <img src={kasalogo} alt="Logo Kasa" className="header_logo"/>
      <nav className="header_nav">
        <ul className="header_ul">
          <li className={isHomePageActive ? "header_homepage-link active" : "header_homepage-link"}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={isAboutPageActive ? "header_about-link active" : "header_about-link"}>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
