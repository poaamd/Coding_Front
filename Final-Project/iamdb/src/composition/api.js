const apiEndPoint = "https://moviesapi.codingfront.dev/api/v1/movies?q=";
const apiGenreEndPoint = "https://moviesapi.codingfront.dev/api/v1/genres/";

export const fetchMovies = async (query) => {
  const response = await fetch(`${apiEndPoint}${query}`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  console.log(data);

  return data.data;
};
export const fetchByGenre = async (genre) => {
  const response = await fetch(`${apiGenreEndPoint}${genre}/movies`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  return data.data;
};
