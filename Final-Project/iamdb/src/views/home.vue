<script setup>
import SearchBar from "@/components/SearchBar.vue";

const genres = ["Crime", "Drama", "Action", "Biography"];
</script>

<template>
  <div class="container">
    <div class="empty"></div>
    <div class="logo">IAMDb</div>
    <SearchBar />
    <div class="genres" v-for="genre in genres">
      <button class="genres_btn">{{ genre }}</button>
      <!-- <button class="genres_btn">Drama</button>
      <button class="genres_btn">Action</button>
      <button class="genres_btn">Biography</button>
      <button class="genres_btn">Show more ></button> -->
    </div>
  </div>
</template>
<style></style>
