import { Link } from "react-router-dom";

const ShowArtworks = (artwork) => {
  const data = artwork.artwork;
  return (
    <Link
      to={`/:${data.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        className="preview"
        style={{
          height: "500px",
          width: "300px",
          border: "1px",
        }}
      >
        <img
          src={data.imageUrl}
          style={{
            height: "60%",
          }}
        />
        <div style={{ textDecoration: "none" }}>
          <p>Title: {data?.title === "" ? "Unknown" : data?.title}</p>
          <p>Author: {data?.author === "" ? "Unknown" : data?.author}</p>
        </div>
      </div>
    </Link>
  );
};

export default ShowArtworks;
