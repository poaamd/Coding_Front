<script setup>
import Header from "@/components/LayOut/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import MovieCard from "@/components/MovieCard.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { moviesStore } from "@/store/moviesStore.js";

const store = moviesStore();
const movies = ref([]);
const searchQuery = ref("");
const noResults = ref(false);
const route = useRoute();

const searchMoviesByGenre = async (genre) => {
  if (genre) {
    await store.getMovieGenre(genre);
    movies.value = store.moviesList;
    noResults.value = movies.value.length === 0;
  } else {
    movies.value = [];
    noResults.value = false;
  }
};

watch(
  () => route.query.search,
  (newSearch) => {
    searchQuery.value = newSearch || "";
    searchMoviesByGenre(searchQuery.value);
  }
);

onMounted(() => {
  const genreFromRoute = route.query.search;
  if (genreFromRoute) {
    searchQuery.value = genreFromRoute;
    searchMoviesByGenre(genreFromRoute);
  }
});
const searchMovies = async () => {
  if (searchQuery.value.trim() !== "") {
    try {
      await store.getMovies(searchQuery.value);

      movies.value = store.moviesList;
      noResults.value = movies.value.length === 0;
    } catch (error) {
      console.error("Error fetching movies:", error);
      movies.value = [];
      noResults.value = true;
    }
  } else {
    movies.value = [];
    noResults.value = false;
  }
};

watch(searchQuery, searchMovies);
watch(
  () => route.query.search,
  (newSearch) => {
    searchQuery.value = newSearch || "";
    searchMovies();
  }
);
onMounted(() => {
  searchMoviesByGenre();
  searchQuery.value = route.query.search || "";
  if (searchQuery.value) {
  }
});
</script>

<template>
  <div class="container">
    <Header />
    <SearchBar />
    <div v-if="noResults" style="color: aliceblue">
      No movies found for "{{ searchQuery }}".<br />
      Please try a different search.
    </div>

    <div v-if="movies.length > 0">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
