import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchMovies, fetchByGenre } from "@/composition/api";

export const moviesStore = defineStore("store", () => {
  const moviesList = ref([]);

  async function getMovies(query) {
    await fetchMovies(query).then((value) => (moviesList.value = value));
  }

  function getMovieDetails(id) {
    return moviesList.value.find((movie) => movie.id == id);
  }

  const getMovieGenre = async (genre) => {
    try {
      const movies = await fetchByGenre(genre);
      moviesList.value = movies;
    } catch (error) {
      console.error("Error fetching movies by genre", error);
    }
  };

  return {
    moviesList,
    getMovies,
    getMovieDetails,
    getMovieGenre,
  };
});
