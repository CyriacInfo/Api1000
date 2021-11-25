import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [playList, setPlayListList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLNxOe-buLm6cz8UQ-hyG1nm3RTNBUBv3K&key=AIzaSyD-FWZXxe1RVKRUZRouRY2zVM3a9u_MeXY&playListId=PLNxOe-buLm6cz8UQ-hyG1nm3RTNBUBv3K&maxResults=50`
      )
      .then((res) => setPlayListList(res.data))
      .then(setIsLoading(!isLoading));
  }, []);
  console.log(playList);
  return (
    <div className="App">{isLoading ? "Hello la team !" : "...loading"}</div>
  );
}

export default App;
