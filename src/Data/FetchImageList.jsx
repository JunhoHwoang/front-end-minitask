import FetchImages from "./FetchImages";

const URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q='painting'";

export default async function FetchImageList(numArtworks) {
  const artworks = await getImageIDs(numArtworks);
  let artworksData = await Promise.all(
    artworks.map((item) => FetchImages(item))
  );
  artworksData = artworksData
    .filter((obj) => obj.imageUrl !== "")
    .slice(0, numArtworks);
  return artworksData;
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

async function getImageIDs(numArtworks) {
  const response = await fetch(URL);
  const data = await response.json();
  const artworks = data.objectIDs;
  shuffle(artworks);
  return artworks.slice(0, numArtworks + 10);
}
