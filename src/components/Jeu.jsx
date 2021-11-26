import React, { useState } from "react";
import "./Jeu.css";

export default function Jeu({setGoToGame}) {
  const [inputSolution, setInputSolution] = useState("");
  return (
    <div>
      <div className="container_button">
        <button className="Fermer_le_jeu" type="button" onClick={()=>setGoToGame(true)}>
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
            src="https://lh3.googleusercontent.com/proxy/KcrhzBIriRgW86g8VaEIHzab9YYkVmrsMVzG1XZtwnvw7w-QMj0ldT7lLQvSSeleUVwNZQxVVXpn4bEfNZdThBgqfBGFmXm1Dov_332yaGCKFg3-O6rNIiRcJlZNozuV-BcIGxmcEyChlB3njTKW5FIdCLtubYSGObhTPR58rYzvPy8r7hm5ODFzdUezFCj2njp3J9JiUjPLFxOpht-SqSxugqOI55z3MBFGmLqADDqHjY5-BA60QCg3fiBGNBApuy53LTTXDCVVoHW8Q-pHXbgvy_PDfg1IiZSOSlnelYKPMCC1dWTb4lKjwR8TIE4kgfN3NKeTGEJJNR_PB1fqcbZT7yuq4Ef1zb9oflXqLqYhwfXxr0URIsrEGrSqZX7N6cQdh25xWw"
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
