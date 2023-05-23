/* CODE REACT DE LA GENERATION DE PAGE "A PROPOS" ! */
import React from "react";
import Banner from "../components/Banner";
import bannerCover from "../images/banneraboutpage.png"
import AboutArticleManager from "../components/AboutArticleManager";

function AboutPage() {
  return (
    <div>
      <Banner image={bannerCover} title=""/>
      <AboutArticleManager />
    </div>
  );
}

export default AboutPage;