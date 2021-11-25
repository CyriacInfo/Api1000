import React from "react";
import "./pagePrincipale.css";
import RechercheStyle from "./RechercheStyle";
import Slider from "./Slider";
import RechercheAnnee from "./RechercheAnnee";

export default function PagePrincipale() {
  return (
    <div>
    <div>
    <div className="HeadMain">
      <img className="LogoMain" src="assets/Logo.png" alt="logo" />
      <div className="ContainerSearch">
        <img className="ContainerSearchImg" src="assets/search.png" alt="logo" />
        <input className="RechargeBar" type="search" id="site-search" name="q"
          aria-label="Search through site content" placeholder="Rechercher" />
      </div>
    </div>
    <div className="NavButton">
      <button className="ButtonMain"><img className="ButtonMainImg" src="assets/chevron-left.png" alt="logo" /></button>
      <button className="ButtonMain"><img className="ButtonMainImg" src="assets/chevron-right.png" alt="logo" /></button>
    </div>
  </div>

      <div className="header">
      <input className="searchbar" type="text"
        name="search" placeholder="Search.."/>
      </div>

      <Slider />
      <RechercheStyle />
      <button className="button-aleatoir" type="button">Aléatoire</button>
      <RechercheAnnee />
    </div>
  );
}