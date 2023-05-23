import "../styles/Header.css";
import '../styles/fonts.css';
import kasalogo from "../images/fulllogokasa.png";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Header() {
    const [activePage, setactivePage] = useState({}); // On va y stocker nos pages qui doivent être surlignées, on déclare activesPages comme étant vide.
    const location = useLocation(); // Notre URL actuelle.
  
    useEffect(() => { // Lors qu'on change d'URL (localtion.pathename), on vient réappliquer l'effet.
      const urls = ["/", "/about"]; // Toutes les URL où l'on souhaite appliquer un surlignage.
      const activePageConfig = {};  // Contiendra un état true // false de si la page doit être surlignée.
      urls.forEach(url => {         // Test pour / et /about si l'URL en cours (location.pathname) est égal à l'URL de la boucle (/ ou /about) :
        // - Si c'est le cas, activePageConfig est sur true, sinon false. ActivePageConfig contient donc la page qui doit être surlignée en ce moment précis dans le header.
        activePageConfig[url] = location.pathname === url;  
      });
  
      setactivePage(activePageConfig); // On défini le contenu de notre variable d'état activePage à travers setactivePage qui introduit le contenu du tableau activePageConfig.
      // On introduit donc comme contenu l'URL "vainqueur" en tant qu'activePage
    }, [location.pathname]); 

    /* Au onClick, on testera ensuite via un conditionnement ternaire si activePage contient l'URL associé à notre élément dans le JSX :
    - Si oui, la classe active est ajoutée et ajoutera un surlignage, sinon rien de particulier. */

  return (
    <header>
      <img src={kasalogo} alt="Logo Kasa" className="header_logo"/>
      <nav className="header_nav">
      <ul className="header_ul">
          <li className={activePage["/"] ? "header_homepage-link active" : "header_homepage-link"}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={activePage["/about"] ? "header_about-link active" : "header_about-link"}>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
