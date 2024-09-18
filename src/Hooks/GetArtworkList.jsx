import { useEffect, useState } from "react";
import FetchImageList from "../Data/FetchImageList";

const GetArtworkList = (numArtworks) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const setArtworkData = async () => {
      const postData = await FetchImageList(numArtworks);
      setData(postData);
    };
    setArtworkData();
  }, [numArtworks]);

  return data;
};

export default GetArtworkList;
