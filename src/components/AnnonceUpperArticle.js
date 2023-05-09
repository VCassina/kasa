import React from "react";
import "../styles/AnnonceUpperArticle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStar);

function AnnonceUpperArticle(props) {
  const { title, location, tags, host, rating } = props; // Destructuration des props

  const renderStars = () => {
    const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
    const remainingStars = 5 - fullStars; // Nombre d'étoiles restantes

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon="star" className="full" />);
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesomeIcon key={fullStars + i} icon="star" className="empty" />
      );
    }

    return stars;
  };

  return (
    <article className="annonceUpperArticle_wrapper">
      <div className="annonceUpperArticle_leftContent">
        <div className="annonceUpperArticle_leftContent-titleSection">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>

        <div className="annonceUpperArticle_leftContent-keyWords">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="annonceUpperArticle_rightContent">
        <div className="annonceUpperArticle_rightContent-mainContent">
          <div className="annonceUpperArticle_rightContent-mainContent-label">
            <span>{host.name.split(" ")[0]}</span> {}
            <span>{host.name.split(" ")[1]}</span> {}
          </div>
          <img src={host.picture} alt="Profil de l'hôte" />
        </div>
        <div className="annonceUpperArticle_rightContent-stars">
          {renderStars()}
        </div>
      </div>
    </article>
  );
}

export default AnnonceUpperArticle;
