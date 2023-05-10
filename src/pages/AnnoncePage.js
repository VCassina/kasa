/* CODE REACT DE LA GENERATION DE PAGE "ANNONCE" ! */
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../datas/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import AnnonceUpperArticle from "../components/AnnonceUpperArticle";
import CollapseArticle from "../components/CollapseArticle";
import "../styles/AnnoncePage.css";

function AnnoncePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie si l'ID renseigné pour cette annonce est dans la dataBase afin de rediriger OU NON vers la notFoundPage.
    const annonceExist = logements.some((annonce) => annonce.id === id);
    if (!annonceExist) {
      navigate("/not-found");
    }
  }, [id, navigate]);

  const annonce = logements.find((annonce) => annonce.id === id);

  return (
    <div className="annoncePage_wrapper">
      <Header />
      {annonce && ( // On a besoin de connaitre l'état d'annonce pour continuer OU NON la compilation du code.
        <main>
          <Carrousel pictures={annonce.pictures} />
          <AnnonceUpperArticle
            title={annonce.title}
            location={annonce.location}
            tags={annonce.tags}
            host={annonce.host}
            rating={annonce.rating}
          />
          <div className="annoncePage_collapseManager">
            <CollapseArticle title="Description" content={annonce.description} />
            <CollapseArticle title="Équipements" content={annonce.equipments} />
          </div>
        </main>
      )}
      <Footer />
    </div>
  ); 
}

export default AnnoncePage;
