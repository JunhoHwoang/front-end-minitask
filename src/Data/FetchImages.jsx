async function FetchImages(id) {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
  );
  const data = await response.json();
  

  return {
    id: id,
    title: data.title,
    author: data.artistDisplayName,
    imageUrl: data.primaryImage,
    objectBeginDate: data.objectB3eginDate,
    objectEndDate: data.objectEndDate,
    wikiLink: data.objectWikidata_URL,
  };
}

export default FetchImages;
