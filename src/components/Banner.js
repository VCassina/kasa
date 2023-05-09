import React from "react";
import "../styles/Banner.css";
import "../styles/fonts.css";

function Banner({ image, title }) {
  return (
    <article className="banner_wrapper">
      <img src={image} alt="Côté boisée" className="banner_img" />
      <div className="banner_text">
        <h2>{title}</h2>
      </div>
    </article>
  );
}

export default Banner;
