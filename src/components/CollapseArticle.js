import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/CollapseArticle.css";
import "../styles/fonts.css";

function CollapseArticle(props) {
  const [showText, setShowText] = useState(false);
  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <article className="collapseArticle_element-wrapper">
      <div className="collapseArticle_element-title">
        <h2>{props.title}</h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`arrow-icon downCase ${showText ? "hidden" : ""}`}
          onClick={toggleText}
        />
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`arrow-icon upCase ${!showText ? "hidden" : ""}`}
          onClick={toggleText}
        />
      </div>
      <div
        className={`collapseArticle_element-texte ${!showText ? "hidden" : null}`}>

        {Array.isArray(props.content) && props.content.length > 0 && props.content[0] !== "" ? ( 
        // Pour soncontenu : 
        // Est-ce un tableau et est-ce un tableau NON vide (pour que les listes (comme équipements - annoncePage) s'affichent bien) ?
          <div>
            {props.content.map(
              (
                item,
                index // Génère moi une map.
              ) => (
                <span key={index}>
                  {item}
                  <br />
                </span>
              )
            )}
          </div>
        ) : Array.isArray(props.content) && // Si c'est un tableau mais vide -> Message d'erreur.
          (props.content.length === 0 || props.content[0] === "") ? (
          <p>- Equipement manquant -</p>
        ) : props.content && !Array.isArray(props.content) ? ( // Si ce n'est pas un tableau, on affiche simplement le contenu ou alors on marque "Texte manquant".
          <p>{props.content}</p>
        ) : (
          <p>- Texte manquant -</p>
        )}
      </div>
    </article>
  );
}

export default CollapseArticle;
