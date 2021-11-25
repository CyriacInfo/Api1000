import React from "react";
import "./pagePrincipale.css";
import RechercheStyle from "./RechercheStyle";

export default function PagePrincipale() {
  return (
    <div>
      <div className="header">
      <input className="searchbar" type="text"
        name="search" placeholder="Search.."/>
      </div>

      <div>Carrousel</div>
      <RechercheStyle />
      <button type="button">Aléatoire</button>
      <div>PlayList par année</div>
    </div>
  );
}
