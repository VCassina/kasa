/* CODE REACT DE LA GENERATION DE PAGE "ANNONCE" ! */
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../datas/logements.json";
import Carrousel from "../components/Carrousel";
import AnnonceUpperArticle from "../components/AnnonceUpperArticle";
import CollapseArticle from "../components/CollapseArticle";
import "../styles/AnnoncePage.css";

function AnnoncePage() {
  
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      const annonceExist = logements.some((annonce) => annonce.id === id);
      if (!annonceExist) {
        navigate("/not-found");
      }
    }, [id, navigate]);
  
    const annonce = logements.find((annonce) => annonce.id === id);
  
    if (!annonce) {
      return null;
    }

  return (
    <div className="annoncePage_wrapper">
        <main>
          <Carrousel pictures={annonce.pictures} />
          <AnnonceUpperArticle {...annonce}
          />
          <div className="annoncePage_collapseManager">
            <CollapseArticle title="Description" content={annonce.description} />
            <CollapseArticle title="Équipements" content={annonce.equipments} />
          </div>
        </main>
    </div>
  );
}

export default AnnoncePage;
