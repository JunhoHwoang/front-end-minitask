import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GetArtwork from "../Hooks/GetArtwork";

const ShowArtPage = () => {
  const id = useParams().id.slice(1);
  const data = GetArtwork(id);
  return (
    <div
      className=""
      style={{
        height: "1000px",
        width: "40%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Link to="/">
        <p>Back to Homepage</p>
      </Link>
      <img
        src={data?.imageUrl}
        style={{
          height: "60%",
          top: "0",
        }}
      />
      <div style={{ textDecoration: "none", padding: "20px" }}>
        <p>
          Title:{" "}
          {data?.title === "" || data?.title == undefined
            ? "Unknown"
            : data?.title}
        </p>
        <p>
          Author:{" "}
          {data?.author === "" || data?.author == undefined
            ? "Unknown"
            : data?.author}
        </p>
        <p>
          Start Year:{" "}
          {data?.objectBeginDate === "" || data?.objectBeginData == undefined
            ? "Unknown"
            : data?.objectBeginDate}
        </p>
        <p>
          End Year:{" "}
          {data?.objectEndDate === "" || data?.objectEndDate == undefined
            ? "Unknown"
            : data?.objectEndDate}
        </p>
        <a href={data?.wikiLink}>
          <p>Here is more information about this piece</p>
        </a>
      </div>
    </div>
  );
};

export default ShowArtPage;
