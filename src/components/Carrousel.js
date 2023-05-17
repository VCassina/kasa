import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Carrousel.css";

function Carrousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="carrousel_wrapper">
      {!props.pictures.length > 0 ? ( // Si tableau non vide...
        <div className="carrousel-content">
          <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevious} />
          <img
            src={props.pictures[currentIndex]}
            alt="Intérieur de l'appartement"
          />
          <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} />
        </div>
      ) : (
        <p className="errorImageTxt">- image manquante -</p>
      )}
      {props.pictures.length !== 0 && (
        <p className="carrousel-count">
          {`${currentIndex + 1} / ${props.pictures.length}`}
        </p>
      )}
    </section>
  );
}

export default Carrousel;
