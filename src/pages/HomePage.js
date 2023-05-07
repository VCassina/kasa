/* CODE REACT DE LA GENERATION DE PAGE "ACCUEIL" ! */
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil (cette page)</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
      <h1>Bienvenue sur notre site</h1>
      {/* Content. */}
      <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "10px",
}}>
<div><Link to="/annonce">Annonce 1</Link></div><div><Link to="/annonce">Annonce 2</Link></div>
<div><Link to="/annonce">Annonce 3</Link></div><div><Link to="/annonce">Annonce 4</Link></div>
</div>
    </div>
  );
};

export default HomePage;
