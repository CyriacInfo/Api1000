import React from "react";
import PagePrincipale from "./components/PagePrincipale";
import "./App.css";

function App() {
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
  return (
    <>
      <PagePrincipale />
    </>
  );
}

export default App;
