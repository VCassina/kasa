import React from "react";
import "../styles/AnnonceUpperArticle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStar);

function AnnonceUpperArticle(props) {
  const { title, location, tags, host, rating } = props;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon="star" className="full" />);
    }

    for (let i = 0; i < emptyStars; i++) {
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
          <h2>{title || "- Titre manquant -"}</h2>
          <p>{location || "- Localisation manquante -"}</p>
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
            <span>{host.name.split(" ")[0] || "- Prénom manquant -"}</span> {}
            <span>{host.name.split(" ")[1] || "- Nom manquant -"}</span> {}
          </div>
          {host.picture ? <img src={host.picture} alt="Profil de l'hôte" /> : <p className="errorProfilPictureTxt">- Photo manquante -</p>}   
        </div>
        <div className="annonceUpperArticle_rightContent-stars">
          {rating ? renderStars() : "- Etoiles manquantes -"}
        </div>
      </div>
    </article>
  );
}

export default AnnonceUpperArticle;
