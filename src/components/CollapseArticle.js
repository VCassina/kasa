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
        className={`collapseArticle_element-texte ${showText ? "" : "hidden"}`}
      >
        {Array.isArray(props.content) && props.content.length > 0 && props.content[0] !== "" ? ( // Est-ce un tableau NON vide ?
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
        ) : Array.isArray(props.content) &&
          (props.content.length === 0 || props.content[0] === "") ? (
          <p>- Texte manquant -</p>
        ) : props.content && !Array.isArray(props.content) ? (
          <p>{props.content}</p>
        ) : (
          <p>- Texte manquant -</p>
        )}
      </div>
    </article>
  );
}

export default CollapseArticle;
