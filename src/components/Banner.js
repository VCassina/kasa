import React from 'react';
import "../styles/Banner.css";
import "../styles/fonts.css";

function Banner({ image, title }) {

  const currentPath = window.location.pathname;   // Selon l'URL, on va redimensionner ou non l'IMG.
  const isAboutPage = currentPath.endsWith("/about");

  return (
    <article className="banner_wrapper">
      <img src={image} alt="Côté boisée" className={`banner_img ${isAboutPage ? 'resize_img--specialBehave' : ''}`} />
      <div className="banner_text">
        <h2>{title}</h2>
      </div>
    </article>
  );
}

export default Banner;
