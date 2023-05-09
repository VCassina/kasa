/* CODE REACT DE LA GENERATION DE PAGE "NOT FOUND" ! */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";

function NotFoundPage() {
  return (
    <div className="notFoundPage_wrapper">
      <Header />
      <NotFound />
      <Footer />
    </div>
  )
};

export default NotFoundPage;
