import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Timer from "./Timer";
import Win from "./Win";
import Loose from "./Loose";
import "./Jeu.css";

export default function Jeu({ setGoToGame, myItem }) {
  const [inputSolution, setInputSolution] = useState("");
  const [loadingGame, setLoadingGame] = useState(false);
  const [startBlindTest, setStartBlindTest] = useState(false);
  const [paramsGame, setParamsGame] = useState("start");
  const [stringResult, setStringResult] = useState("");
  const [myLives, setMyLives] = useState(3);
  const [myImg, setMyImg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setLoadingGame(true);
      setStartBlindTest(true);
      setMyLives(3);

      if (myItem) {
        setStringResult(myItem.snippet.title);
      }
    }, 3000);

    setTimeout(function () {
      setStartBlindTest(false);
      if (myItem) {
        setMyImg(myItem.snippet.thumbnails.medium.url);
      }
    }, 33000);
  }, [myItem]);

  const askResult = () => {
    if (inputSolution !== " " && inputSolution !== "") {
      if (stringResult.toLowerCase().includes(inputSolution.toLowerCase())) {
        setParamsGame("winner");
      } else {
        setMyLives(myLives - 1);
        if (myLives - 1 === 0) {
          setParamsGame("Looser");
        }
      }
    }
  };

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
              <div className="points">PV: {myLives}</div>
            </div>
            <div className="container_jeu">
              <div className="jeux"></div>

              <img
                className="img1"
                src={
                  startBlindTest
                    ? "https://lh3.googleusercontent.com/proxy/KcrhzBIriRgW86g8VaEIHzab9YYkVmrsMVzG1XZtwnvw7w-QMj0ldT7lLQvSSeleUVwNZQxVVXpn4bEfNZdThBgqfBGFmXm1Dov_332yaGCKFg3-O6rNIiRcJlZNozuV-BcIGxmcEyChlB3njTKW5FIdCLtubYSGObhTPR58rYzvPy8r7hm5ODFzdUezFCj2njp3J9JiUjPLFxOpht-SqSxugqOI55z3MBFGmLqADDqHjY5-BA60QCg3fiBGNBApuy53LTTXDCVVoHW8Q-pHXbgvy_PDfg1IiZSOSlnelYKPMCC1dWTb4lKjwR8TIE4kgfN3NKeTGEJJNR_PB1fqcbZT7yuq4Ef1zb9oflXqLqYhwfXxr0URIsrEGrSqZX7N6cQdh25xWw"
                    : myImg
                }
                alt="coucou"
              />

              <div className="titre_jeu">
                {paramsGame === "winner" || paramsGame === "Looser"
                  ? stringResult
                  : "Devine l'artiste"}
              </div>
              <div className="inputFeild">
                <input
                  type="text"
                  value={inputSolution}
                  onChange={(e) => setInputSolution(e.target.value)}
                />
                <input
                  type="button"
                  className="inpute"
                  value="valider"
                  onClick={askResult}
                />
              </div>
            </div>
            {paramsGame === "winner" ? <Win /> : null}
            {paramsGame === "Looser" ? <Loose /> : null}
          </div>

          <ReactPlayer
            playing={startBlindTest ? true : false}
            width="0px"
            height="0px"
            url={
              myItem.snippet.resourceId.videoId !== ""
                ? `https://www.youtube.com/watch?v=${myItem.snippet.resourceId.videoId}`
                : `https://www.youtube.com/watch?v=${myItem.id.videoId}`
            }
          />
        </>
      ) : (
        "...loading"
      )}
    </div>
  );
}
