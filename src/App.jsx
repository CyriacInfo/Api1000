import React, { useEffect, useState } from "react";
import axios from "axios";
import PagePrincipale from "./components/PagePrincipale";
import Jeu from "./components/Jeu";
import "./App.css";

function App() {
  const [playList, setPlayListList] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [playListID, setPlayListId] = useState("");
  const [myItem, setMyItem] = useState({});
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

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${searchId}&key=AIzaSyD-FWZXxe1RVKRUZRouRY2zVM3a9u_MeXY&maxResults=50`
  //     )
  //     .then((res) => {
  //       setPlayListList(res.data);
  //       setMyItem(randomId(res.data.items));
  //     });
  // }, [searchId]);

  const randomId = (element) => {
    const numberResults = element[Math.floor(Math.random() * element.length)];
    return numberResults;
  };
  return (
    <>
      {playList ? (
        <PagePrincipale myItem={myItem} setPlayListId={setPlayListId} />
      ) : (
        "...loading"
      )}
    </>
  );
}

export default App;
