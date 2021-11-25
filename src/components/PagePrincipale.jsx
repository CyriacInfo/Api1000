import React from "react";
import "./pagePrincipale.css";
import RechercheStyle from "./RechercheStyle";
import Slider from "./Slider";
import RechercheAnnee from "./RechercheAnnee";

export default function PagePrincipale() {
  return (
    <div>
      <div className="header">
      <input className="searchbar" type="text"
        name="search" placeholder="Search.."/>
      </div>

      <Slider />
      <RechercheStyle />
      <button type="button">Aléatoire</button>
      <RechercheAnnee />
    </div>
  );
}
