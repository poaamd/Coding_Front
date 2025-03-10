<script setup>
import Header from "@/components/LayOut/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import MovieCard from "@/components/MovieCard.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { fetchMovies } from "@/utils/api.js";

const movies = ref([]);
const searchQuery = ref("");
const noResults = ref(false);
const route = useRoute();

// fetch movies by query
const searchMovies = async () => {
  if (searchQuery.value.trim() !== "") {
    try {
      const data = await fetchMovies(searchQuery.value);
      movies.value = data;
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

// Watch
watch(searchQuery, searchMovies);
watch(
  () => route.query.search,
  (newSearch) => {
    searchQuery.value = newSearch || "";
    searchMovies();
  }
);
//onMounted
onMounted(() => {
  searchQuery.value = route.query.search || "";
  if (searchQuery.value) {
  }
});
</script>

<template>
  <Header />
  <SearchBar />
  <div v-if="noResults" style="color: aliceblue">
    No movies found for "{{ searchQuery }}".<br />
    Please try a different search.
  </div>

  <div v-if="movies.length > 0">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>
