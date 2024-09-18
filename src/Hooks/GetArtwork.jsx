import { useEffect, useState } from "react";
import FetchImages from "../Data/FetchImages";

const GetArtworkList = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const setArtworkData = async () => {
      const postData = await FetchImages(id);
      setData(postData);
    };
    setArtworkData();
  }, [id]);

  return data;
};

export default GetArtworkList;
