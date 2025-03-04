<script setup>
import { ref } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import Buttons from "@/components/Buttons.vue";

import genres from "@/utils/genres.js";
const genresList = ref(genres);
</script>

<template>
  <div class="container">
    <div class="empty"></div>
    <div class="logo">IAMDb</div>
    <SearchBar />
    <Buttons :genres="genresList" />
  </div>
</template>
