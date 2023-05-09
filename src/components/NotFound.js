import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import fourHundredFour from "../images/404.png";

function NotFound() {
  return (
    <section className="notfound_wrapper">
      <article className="notfound_wrapper-content">
        <img src={fourHundredFour} alt="404" />
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </article>
      <Link to="/">Retourner à la page d'Accueil</Link>
    </section>
  );
}

export default NotFound;
