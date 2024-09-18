import ShowArtworks from "./ShowArtworks";
import { useState } from "react";
import GetArtworkList from "../Hooks/GetArtworkList";

const DEFAULT_VALUE = 10;

const MainPage = () => {
  const [numArtworks, setNumArtworks] = useState(DEFAULT_VALUE);
  const data = GetArtworkList(numArtworks);

  return (
    <div>
      <h4 className="display-4 text-center">Junho's Gallery</h4>
      <select
        className="form-select"
        aria-label="Default select example"
        style={{ textAlign: "center" }}
        onChange={(e) => setNumArtworks(Number(e.target.value))}
      >
        <option>Select Number of Artworks</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {data?.map((item) => (
          <ShowArtworks artwork={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
