/* CODE REACT DE LA GENERATION DE PAGE "ACCUEIL" ! */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function HomePage() {
  return (
    <div class="homepage_div">
        <Header />
      <h1>Bienvenue sur notre site</h1>
      {/* Content. */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        <div>
          <Link to="/annonce">Annonce 1</Link>
        </div>
        <div>
          <Link to="/annonce">Annonce 2</Link>
        </div>
        <div>
          <Link to="/annonce">Annonce 3</Link>
        </div>
        <div>
          <Link to="/annonce">Annonce 4</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
