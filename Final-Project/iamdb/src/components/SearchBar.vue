<script setup>
import MovieCard from "@/components/MovieCard.vue";
import { ref } from "vue";
const apiEndPoint = "https://moviesapi.codingfront.dev/api/v1/movies?q";

const userInput = ref("");
const movies = ref([]);
const search = async () => {
  const response = await fetch(`${apiEndPoint}${userInput.value}`);
  const data = await response.json();
  if (!response.ok) {
    return;
  }
  console.log(data.data);
  movies.value = data.data;
};
</script>

<template>
  <div class="search-bar">
    <input v-model="userInput" class="text_area" type="text" />

    <button @click="search">
      <img
        src="@/assets/icons/search_icon.svg"
        alt="Search icon"
        class="search_icon"
      />
    </button>
    <a href="#" title="Use your voice for search">
      <img src="@/assets/icons/mic_icon.svg" alt="Mic icon" class="mic_icon" />
    </a>
  </div>
  <!-- <product-item
    v-for="prod in productsList"
    :key="prod.id"
    :id="prod.id"
    :title="prod.title"
    :image="prod.image"
    :description="prod.description"
    :price="prod.price"
  ></product-item> -->

  <MovieCard :title="movies[0]?.title" />
</template>
