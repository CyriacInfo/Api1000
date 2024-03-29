import React from "react";
import "./RechercheStyle.css";

export default function RechercheStyle({ setPlayListId, setGoToGame }) {
  return (
    <div className="Titre_Stylerecherche">
      <h2 className="Titre_Style">Rechercher un style</h2>
      <div className="section_Recherche_Style">
        <img
          src="https://www.webstickersmuraux.com/fr/img/asmu272-jpg/folder/products-listado-merchant/autocollants-rock-and-roll-homer-.jpg"
          alt="styleRock"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLOds7NNqmx4n1SA599PbsgB3UIez9zRXK");
            setGoToGame(false);
          }}
        />
        <img
          src="https://lh3.googleusercontent.com/proxy/OxAbzsvjBfmoxGiwQ32e0CiME19666Zj9eo38h5C_vOX9shdjIpIV9uEHCcLvNyIWxmqCrHZbRON_Nl6JZKrY_Pgw78ccTeBufNLBHPsGuVq-7l29FlXsRO_dWOWfMzXUGXGyyizgMP1YvtehD10yltyOp1N8Apc4NKQnB4o8lw0"
          alt="stylePop"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj");
            setGoToGame(false);
          }}
        />
        <img
          src="https://img1.picmix.com/output/stamp/normal/0/3/2/6/1526230_acf0e.png"
          alt="styleJazz"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PL8F6B0753B2CCA128");
            setGoToGame(false);
          }}
        />
        <img
          src="https://www.ambiance-sticker.com/images/Image/sticker-musique-rap-et-casque-de-music-ambiance-sticker-KC10981.png"
          alt="styleRap"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLnQUNM-n9wu4zpp8rYcchKH5Qa31gp0wE");
            setGoToGame(false);
          }}
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/208/216/non_2x/music-genre-punk-png.png"
          alt="stylePunk"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLvP_6uwiamDS23WxoCfqY4LBOXF_yF1l9");
            setGoToGame(false);
          }}
        />
        <img
          src="https://i.pinimg.com/236x/ac/78/47/ac78470a638dbb100ef4b60207acf8ae--music-rock-music-music.jpg"
          alt="styleMetal"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLhQCJTkrHOwSX8LUnIMgaTq3chP1tiTut");
            setGoToGame(false);
          }}
        />
        <img
          src="https://www.radio.fr/images/broadcasts/c9/62/106718/1/c300.png"
          alt="styleHiphop"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLetgZKHHaF-Zq1Abh-ZGC4liPd_CV3Uo4");
            setGoToGame(false);
          }}
        />
        <img
          src="https://m.media-amazon.com/images/I/41kaFbzlXxL.jpg"
          alt="styleRnb"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLplXQ2cg9B_phh5cj3tEPibzumbF5hWh5");
            setGoToGame(false);
          }}
        />
      </div>
    </div>
  );
}
