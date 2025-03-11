const apiEndPoint = "https://moviesapi.codingfront.dev/api/v1/movies?q=";

//call  API with a search query
export const fetchMovies = async (query) => {
  const response = await fetch(`${apiEndPoint}${query}`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  console.log(data);

  return data.data;
};
