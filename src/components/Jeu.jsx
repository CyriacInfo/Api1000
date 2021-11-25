import React from "react";
import "./Jeu.css";

export default function Jeu() {
  return (
    <div>
      <div className="container_button">
        <button className="Fermer_le_jeu" type="button">
          X
        </button>
        <h2 className="Nom_fermer_le_jeu">Quitter</h2>
      </div>
      <div className="block_jeu">
        <div className="info_jeu">
          <div className="timer"></div>
          <div className="points"></div>
        </div>
        <div className="container_jeu">
          <div className="titre_jeu">Devine l'artiste</div>
          <div className="carre1"></div>
          <div className="carre2"></div>
          <div className="carre3"></div>
          <div className="carre4"></div>
        </div>
      </div>
      <div className="block_reponse"></div>
    </div>
  );
}
