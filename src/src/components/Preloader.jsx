import React, { useEffect, useState } from "react";
import "../preloader.css"; // Nous allons mettre à jour ce fichier CSS

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulez un temps de chargement (ou utilisez un vrai chargement de données)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // 3 secondes pour l'exemple

    return () => clearTimeout(timer); // Nettoyez le timer
  }, []);

  if (!isLoading) return null; // Cachez le preloader une fois le chargement terminé

  return (
    <div className="preloader">
      <div className="logo-container">
        <img src="./logo.png" alt="Logo" className="logo" />
      </div>
      <p className="loading-text">Chargement en cours...</p>
    </div>
  );
};

export default Preloader;