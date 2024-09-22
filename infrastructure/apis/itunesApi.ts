export const searchAlbums = async (term: string) => {
  const response = await fetch(`https://itunes.apple.com/search?term=${term}&media=music&entity=album`);
  const data = await response.json();
  return data.results;
};