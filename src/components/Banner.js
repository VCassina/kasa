import React from "react";
import PropTypes from "prop-types";
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

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
