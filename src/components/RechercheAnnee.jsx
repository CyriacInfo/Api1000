import React from "react";

export default function RechercheAnnee({ setPlayListId, setGoToGame }) {
  return (
    <div className="Titre_Stylerecherche">
      <h2 className="Titre_Style">Rechercher par année</h2>
      <div className="section_Recherche_Style">
        <img
          src="https://m.media-amazon.com/images/I/81DZAmAZFaL._SS500_.jpg"
          alt="styleRock"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLGBuKfnErZlAkaUUy57-mR97f8SBgMNHh");
            setGoToGame(false);
          }}
        />
        <img
          src="https://www.enmodebasque.com/wp-content/uploads/2018/07/Nostalgiques_des_ann%C3%A9es_80_o%C3%B9_aller_danser.jpg"
          alt="stylePop"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLaMJh6_LWsf8poV7aOZ3FfPLUMT6zqIXW");
            setGoToGame(false);
          }}
        />
        <img
          src="https://m.media-amazon.com/images/I/71tG+68TK4L._SS500_.jpg"
          alt="styleJazz"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLgmivzl58web0mZ71XRm3XKpDAQjC5v_4");
            setGoToGame(false);
          }}
        />
        <img
          src="https://passetoncasting.com/wp-content/uploads/2021/01/la_playlist_des_annees_2000-1.jpg"
          alt="styleRap"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLkqz3S84Tw-QD5OIrT9pUBWZlMGDuKI9K");
            setGoToGame(false);
          }}
        />
        <img
          src="https://data.topquizz.com/distant/quizz/big/8/8/4/1/131488_eb284748f0.jpg"
          alt="stylePunk"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PL5_78JU9eaAlRU7K7b66gWFPoYbUqb6u9");
            setGoToGame(false);
          }}
        />
        <img
          src="https://p7.storage.canalblog.com/70/07/715313/125592562.jpg"
          alt="styleMetal"
          className="img-recherche-style"
          onClick={() => {
            setPlayListId("PLkqz3S84Tw-Rb_bmEAODVvW2nlyO7NMB7");
            setGoToGame(false);
          }}
        />
        <img
          src="https://lh3.googleusercontent.com/proxy/Kag2efaHyZITCyxH5hJubfPPcbuCKkv1M5LIrgD4vUHey4XbpTCI7Cdc8LL3F4iCic83f_gwzCRP6tcwC4Tv2qs5ugare2DOUnsY8UlB"
          alt="styleMetal"
          className="img-recherche-style"
        />
        <img
          src="https://lh3.googleusercontent.com/proxy/Kag2efaHyZITCyxH5hJubfPPcbuCKkv1M5LIrgD4vUHey4XbpTCI7Cdc8LL3F4iCic83f_gwzCRP6tcwC4Tv2qs5ugare2DOUnsY8UlB"
          alt="styleMetal"
          className="img-recherche-style"
        />
      </div>
    </div>
  );
}
