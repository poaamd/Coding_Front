<script setup>
import { ref, defineProps, computed } from "vue";
import genres from "@/utils/genres.js";

const isExpanded = ref(false);

const displayGenres = computed(() => {
  return isExpanded.value ? genres : genres.slice(0, 4);
});
const showMore = () => {
  isExpanded.value = !isExpanded.value;
  console.log("Show More", isExpanded.value);
};
</script>

<template>
  <div class="container">
    <div class="genres" :key="isExpanded">
      <button v-for="genre in displayGenres" :key="genre.id">
        {{ genre.name }}
      </button>
    </div>
    <div class="toggle">
      <button @click="showMore">
        {{ isExpanded ? "Show Less  <-" : "Show More  ->" }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 604px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

button {
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--secondary-color);
  color: var(--text-color);
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.52px;
  letter-spacing: 0%;
}
button:hover {
  background: var(--primary-color);
  scale: 1.2;
}

.genres {
  width: 87%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.toggle {
  display: block;
  margin-top: 10px;
}
</style>
