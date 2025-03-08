<script setup>
import Header from "@/components/LayOut/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import MovieCards from "@/components/MovieCards.vue";
</script>
<template>
  <RouterLink to="/Details" style="color: aliceblue">Movie Details</RouterLink>

  <Header />
  <SearchBar />
  <MovieCards />
  <MovieCards />
  <MovieCards />
  <MovieCards />
  <MovieCards />
</template>
