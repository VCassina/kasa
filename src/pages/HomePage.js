/* CODE REACT DE LA GENERATION DE PAGE "ACCUEIL" ! */
import React from "react";
import Banner from "../components/Banner";
import Annonce from "../components/Annonce";
import bannerCover from "../images/bannerhomepage.png";

function HomePage() {
  return (
    <div className="homepage_div">
      <Banner image={bannerCover} title="Chez vous, partout et ailleurs" />
      <Annonce />
    </div>
  );
}

export default HomePage;
