import "../styles/Header.css";
import '../styles/fonts.css';
import kasalogo from "../images/fulllogokasa.png";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Header() {
    const [activePages, setActivePages] = useState({}); // Un état pour stocker les pages concernées par le sous-lignage.
    const location = useLocation();
  
    useEffect(() => {
      const urls = ["/", "/about"]; // Tableau des URL à vérifier.
      const activePagesConfig = {}; // Configuration des pages "actives" qui déclanchent le surlignage, mis dynamiquement à jour par la boucle qui suit :
      urls.forEach(url => {         // Pour toutes nos URLs :
        activePagesConfig[url] = location.pathname === url; // Vérifie si l'URL correspond à la page actuelle.
      });
  
      setActivePages(activePagesConfig); // Met à jour l'état des pages concernées par le sous-lignage.
    }, [location.pathname]);  // Et ce uniquement lors qu'un changement d'URL est détecté.

  return (
    <header>
      <img src={kasalogo} alt="Logo Kasa" className="header_logo"/>
      <nav className="header_nav">
      <ul className="header_ul">
          <li className={activePages["/"] ? "header_homepage-link active" : "header_homepage-link"} /* "Si nous sommes sur l'élément stocké dans activePages correspondant à "/", alors ... */> 
            <Link to="/">Accueil</Link>
          </li>
          <li className={activePages["/about"] ? "header_about-link active" : "header_about-link"} /* "Si nous sommes sur l'élément stocké dans activePages correspondant à "/", alors ... */>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
