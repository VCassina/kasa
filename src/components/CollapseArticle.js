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
    <div className={`collapseArticle_element-texte ${showText ? "" : "hidden"}`}>
    {Array.isArray(props.content) && props.content.length > 0 ? ( // Si c'est un tableau non vide :
    <div>
      {props.content.map((item, index) => (
        <span key={index}>
          {item}
          <br />
        </span>
      ))}
    </div>
  ) : props.content && !Array.isArray(props.content) ? (  // Si props.content est trouvé et qu'il ne s'agit pas d'un tableau.
    <p>{props.content}</p>
  ) : ( // Sinon (si props.content est trouvé mais est vide ou s'il s'agit d'un tableau(props.content) vide)...
    <p>- Texte manquant -</p> // 
  )}
</div>
  </article>
);

}

export default CollapseArticle;
