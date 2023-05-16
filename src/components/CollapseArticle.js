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
          className={`arrow-icon downCase ${showText ? "hidden" : ""}`} // Selon l'état de showText (qui s'inverse lors du click), le statut change, la classe est présente ou non.
          onClick={toggleText}
        />
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`arrow-icon upCase ${!showText ? "hidden" : ""}`}
          onClick={toggleText}
        />
      </div>
      <div className={`collapseArticle_element-texte ${showText ? "" : "hidden"}`}>
      {Array.isArray(props.content) && props.content.length > 0 ? (
        <div>
          {props.content.map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </div>
      ) : props.content ? (
        <p>{props.content}</p>
      ) : (
        <p>- Texte manquant -</p>
      )}
    </div>
    </article>
  );
}

export default CollapseArticle;
