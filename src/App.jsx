import React, { useEffect, useState } from "react";
import axios from "axios";
import PagePrincipale from "./components/PagePrincipale";

function App() {
  const [playList, setPlayListList] = useState([]);
  const [numberTab, setNumberTab] = useState(0);
  const [playListID, setPlayListId] = useState("");
  const [myItem, setMyItem] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListID}&key=AIzaSyD-FWZXxe1RVKRUZRouRY2zVM3a9u_MeXY&maxResults=50`
      )
      .then((res) => {
        //console.log("coucou",res.data, randomId(res.data.items));
        setPlayListList(res.data);
        setMyItem(randomId(res.data.items));
      });
  }, [playListID]);

  const randomId = (element) => {
    const numberResults = element[Math.floor(Math.random() * element.length)];
    console.log("number", numberResults);
    return numberResults;
  };
  return (
    <>
      {playList ? (
        <PagePrincipale setPlayListId={setPlayListId} />
      ) : (
        "...loading"
      )}
    </>
  );
}

export default App;
