import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Timer from "./Timer";
import "./Jeu.css";

export default function Jeu({ setGoToGame, myItem }) {
  const [inputSolution, setInputSolution] = useState("");
  const [loadingGame, setLoadingGame] = useState(false);
  const [startBlindTest, setStartBlindTest] = useState(false);
  const [paramsGame, setParamsGame] = useState("start");
  const [myArtist, setMyArtist] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myLives, setMyLives] = useState(3);

  useEffect(() => {
    setTimeout(function () {
      setLoadingGame(true);
      setStartBlindTest(true);
      C(3);
    }, 3000);
    setTimeout(function () {
      setStartBlindTest(false);
    }, 33000);
  }, []);

  const askResult = () => {
    if(inputSolution === myTitle || inputSolution === myArtist || inputSolution === `${myArtist} ${myTitle}`|| inputSolution === `${myTitle} ${myArtist}` ){
      setParamsGame("winner");
    }else{
      setMyLives(myLives - 1)
    }
    if(myLives === 0) {
      setParamsGame("Looser")
    }
  }

  return (
    <div>
      {loadingGame ? (
        <>
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
              <div className="timer">
                <Timer number={30} />
              </div>
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
              <div className="inputFeild">
                <input
                  type="text"
                  value={inputSolution}
                  onChange={(e) => setInputSolution(e.target.value)}
                />
                <input type="button" className="inpute" value="valider" />
              </div>
            </div>
          </div>
          <ReactPlayer
            playing={startBlindTest ? true : false}
            width="0px"
            height="0px"
            url={`https://www.youtube.com/watch?v=${myItem.snippet.resourceId.videoId}`}
          />
        </>
      ) : (
        "...loading"
      )}
    </div>
  );
}
