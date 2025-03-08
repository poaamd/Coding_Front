<script setup>
import SearchBar from "@/components/SearchBar.vue";
import Buttons from "@/components/Buttons.vue";
</script>

<template>
  <div class="container">
    <div class="empty"></div>
    <RouterLink to="/list" style="color: aliceblue">Search Results</RouterLink>
    <div class="logo">IAMDb</div>
    <SearchBar />
    <Buttons />
  </div>
</template>
