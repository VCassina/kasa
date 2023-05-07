import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import AnnoncePage from "../AnnoncePage";
import NotFoundPage from "../NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/annonce" element={<AnnoncePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

/* L'annonce redirigera plus tard sur un ID de la page de données correspondant à l'élément cliqué !! */

export default AppRoutes;