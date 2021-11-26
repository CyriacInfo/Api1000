import React from "react";
import "./Jeu.css";

export default function Jeu() {
  return (
    <div className="mario">
      <div className="Timer"></div>
      <div className="Indice"></div>
      <div className="Carre"></div>
      <h2>Artist</h2>
      <input className="InputReponse" type="text"></input>
      <button className="ButtonReponse" type="button"></button>
    </div>
  );
}
