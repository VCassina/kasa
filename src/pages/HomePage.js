/* CODE REACT DE LA GENERATION DE PAGE "ACCUEIL" ! */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Annonce from "../components/Annonce";

function HomePage() {
  return (
    <div className="homepage_div">
      <Header />
      <Banner />
      <Annonce />
      <Footer />
    </div>
  );
}

export default HomePage;
