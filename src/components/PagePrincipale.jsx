import React from "react";
import "./pagePrincipale.css";
import RechercheStyle from "./RechercheStyle";
import Slider from "./Slider";

export default function PagePrincipale() {
  return (
    <div>
      <div>
        <div className="HeadMain">
          <img
            className="LogoMain"
            src="assets/Logo.png"
            alt="logo"
            width="250px"
          />
          <div className="ContainerSearch">
            <img
              className="ContainerSearchImg"
              src="assets/search.png"
              alt="logo"
            />
            <input
              className="RechargeBar"
              type="search"
              id="site-search"
              name="q"
              aria-label="Search through site content"
              placeholder="Rechercher"
            />
          </div>
        </div>
      </div>
      <div className="BodyMain">
        <div className="TextMain">
          <h1>Bienvenue sur Apiquiz.</h1>
          <h3>Reprenez goût à la musique.</h3>
          <button className="ButtonBodyMain" type="button">
            Commmencer
          </button>
        </div>
        <div className= "CarrousselMain">
        <Slider />
        </div>
      </div>
      <RechercheStyle />
      <button type="button">Aléatoire</button>
      <div>PlayList par année</div>
    </div>
  );
}
