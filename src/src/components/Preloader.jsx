import React, { useEffect, useState } from "react";
import "../preloader.css"; // Nous allons mettre à jour ce fichier CSS

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quand la page est totalement chargée
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      // Si la page est déjà chargée
      handleLoad();
    } else {
      // Sinon on attend l'événement "load"
      window.addEventListener("load", handleLoad);
    }

    // Nettoyage
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null; // Cache le preloader une fois chargé

  return (
    <div className="preloader">
      <div className="logo-container">
        <img src="./logo.png" alt="Kouamé Esdras Jonathan" className="logo" />
      </div>
      <p className="loading-text">Chargement en cours...</p>
    </div>
  );
};

export default Preloader;
