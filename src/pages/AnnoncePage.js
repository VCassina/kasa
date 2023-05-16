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
import ErrorDbArticle from '../components/ErrorDbArticle';


function AnnoncePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie si l'ID renseigné pour cette annonce est dans la dataBase afin de rediriger OU NON vers la notFoundPage.
    // Cette vérification sur cette page s'explique par le fait qu'elle utilise un ID pour être généré, donc "n'importe quelle instruction dans l'URL après annonce/ " pourrait être considéré comme un ID si on ne vérifie pas.
    
    const annonceExist = logements.some((annonce) => annonce.id === id);
    if (!annonceExist) {
      navigate("/not-found");
    }
  }, [id, navigate]);

  const annonce = logements.find((annonce) => annonce.id === id);

  return (
    <div className="annoncePage_wrapper">
      <Header />
      {annonce && annonce.title && annonce.location && annonce.tags && annonce.host && annonce.rating ? (  // Si les chants dont je vais avoir besoin sont existants et remplis !
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
      ) : (
        <main>
          <ErrorDbArticle />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default AnnoncePage;
