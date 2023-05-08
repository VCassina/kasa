import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/AboutArticle.css";
import "../styles/fonts.css";

function AboutArticle(props) {

    const [showText, setShowText] = useState(false);

    const toggleText = () => {
      setShowText(!showText);
    };

  return (
    <article className="AboutArticle_element-wrapper">
      <div className="AboutArticle_element-title">
        <h2>{props.title}</h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`arrow-icon downCase ${showText ? 'hidden' : ''}`}
          onClick={toggleText}
        />
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`arrow-icon upCase ${!showText ? 'hidden' : ''}`}
          onClick={toggleText}
        />
      </div>
      <div className={`AboutArticle_element-texte ${showText ? '' : 'hidden'}`}>
        <p>{props.content}</p>
      </div>
    </article>
  );
}

export default AboutArticle;
