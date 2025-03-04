<script setup>
defineProps({
  genres: Array,
});
</script>
<template>
  <div class="genres">
    <button class="genres_btn" v-for="genre in genres" :key="genre.id">
      {{ genre.name }}
    </button>
  </div>
</template>
