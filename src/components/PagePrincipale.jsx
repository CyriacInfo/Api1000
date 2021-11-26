import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pagePrincipale.css";
import "./Animation.css"
import RechercheStyle from "./RechercheStyle";
import Slider from "./Slider";
import RechercheAnnee from "./RechercheAnnee";
import Jeu from "./Jeu";

export default function PagePrincipale() {
  const [playList, setPlayListList] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [playListID, setPlayListId] = useState("");
  const [myItem, setMyItem] = useState({});
  const [goToGame, setGoToGame] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListID}&key=AIzaSyD-FWZXxe1RVKRUZRouRY2zVM3a9u_MeXY&maxResults=50`
      )
      .then((res) => {
        setPlayListList(res.data);
        setMyItem(randomId(res.data.items));
      });
  }, [playListID]);

  const randomId = (element) => {
    const numberResults = element[Math.floor(Math.random() * element.length)];
    return numberResults;
  };
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
      {goToGame ? (
        <>
          <div className="BodyMain">
            <div className="TextMain">
              <h1>Bienvenue sur <span className="SpanAnimationMain1">Apiquiz.</span></h1>
              <h3><span className="SpanAnimationMain2">Reprenez goût à la musique.</span></h3>
              
              
              <button
                className="ButtonBodyMain"
                type="button"
                onClick={() => {
                  setPlayListId("PLjwbNj9NASKNvYvRJruAA_IxAHLdbYVmN");
                  setGoToGame(false);
                }}
              >
                Commmencer
              </button>
              </div>
              <div className="CarrousselMain">
              <Slider />
              </div>
            </div>
            <RechercheStyle
              setGoToGame={setGoToGame}
              setPlayListId={setPlayListId}
            />
            
            <RechercheAnnee
              setGoToGame={setGoToGame}
              setPlayListId={setPlayListId}
            />
          <div/>
          
          
</>
         
        
      ) : (
        <Jeu setGoToGame={setGoToGame} myItem={myItem} />
      )}
        </div>
      );
}
