import React from "react";
import "../styles/Annonce.css";
import "../styles/fonts.css";
import { Link } from "react-router-dom";
import annonces from "../datas/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Annonce() {
  return (
    <section className="annonce_wrapper">
      <article className="annonce_wrapper-content">
        {annonces.map((annonce) => (
          <div key={annonce.id} className="annonce_element">
            <Link to={`/annonce/${annonce.id}`}>
              <img src={annonce.cover} alt={annonce.title} />
              <h2>{annonce.title}</h2>
            </Link>
          </div>
        ))}

        <Link to="/voir-plus">
          <div className="annonce_element annonce_element-more plus_icon">
            <FontAwesomeIcon icon={faPlus} />
            <span>Voir plus</span>
          </div>
        </Link>
      </article>
    </section>
  );
}

export default Annonce;
