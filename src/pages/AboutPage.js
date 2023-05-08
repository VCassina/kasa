/* CODE REACT DE LA GENERATION DE PAGE "A PROPOS" ! */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import bannerCover from "../images/banneraboutpage.png"
import AboutArticleManager from "../components/AboutArticleManager";

function AboutPage() {
  return (
    <div>
      <Header />
      <Banner image={bannerCover} title="" />
      <AboutArticleManager />
      <Footer />
    </div>
  );
}

export default AboutPage;

