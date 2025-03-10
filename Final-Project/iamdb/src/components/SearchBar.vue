<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const userInput = ref("");
const router = useRouter();

const searchMovies = async () => {
  if (userInput.value.trim()) {
    router.push({ name: "list", query: { search: userInput.value } });
  }
};

const handleKeyUp = (event) => {
  if (event.key === "Enter") {
    searchMovies();
  }
};
</script>

<template>
  <div class="search-bar">
    <input
      v-model="userInput"
      class="text_area"
      type="text"
      :placeholder="userInput || 'Search for a movie...'"
      @keyup="handleKeyUp"
    />
    <button @click="searchMovies">
      <img src="/icons/search_icon.svg" alt="Search icon" class="search_icon" />
    </button>
    <a href="#" title="Use your voice for search">
      <img src="/icons/Mic_icon.svg" alt="Mic icon" class="mic_icon" />
    </a>
  </div>
</template>
<style scoped>
.search-bar {
  background: var(--secondary-color);
  position: relative;
  margin: 32px auto;
  width: 100%;
  height: 48px;
  border-radius: 16px;
}
.text_area {
  background: var(--secondary-color);
  margin: 0 50px;
  width: 72%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 16px;
  color: var(--text-color);
  font-size: large;
}
.search_icon {
  position: absolute;
  top: 12px;
  left: 16px;
  width: 24px;
}

.search_icon:hover {
  opacity: 0.5;
}
.mic_icon:hover {
  opacity: 0.5;
}

.mic_icon {
  position: absolute;
  right: 12px;
  top: 12px;
  width: 40px;
  height: 24px;
}
</style>
