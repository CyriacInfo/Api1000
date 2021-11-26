import React, { useState } from "react";
import "./Jeu.css";

export default function Jeu({ setGoToGame }) {
  const [inputSolution, setInputSolution] = useState("");
  return (
    <div>
      <div className="container_button">
        <button
          className="Fermer_le_jeu"
          type="button"
          onClick={() => setGoToGame(true)}
        >
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
          <div className="jeux"></div>
          <img
            className="img1"
            src="https://media.istockphoto.com/photos/question-mark-neon-lightning-on-brick-wall-picture-id1309966216?b=1&k=6&m=1309966216&s=170667a&w=0&h=n2F7RSe82kOFKnwa0IMsw9rJcrGFIS0mOspHHNRDWgo="
            alt=""
          />
          <div className="titre_jeu">Devine l'artiste</div>
          <input
            type="text"
            value={inputSolution}
            onChange={(e) => setInputSolution(e.target.value)}
          />
        </div>

        <div className="carre1"></div>
        <div className="carre2"></div>
        <div className="carre3"></div>
        <div className="carre4"></div>
      </div>
      <div className="block_reponse"></div>
    </div>
  );
}
