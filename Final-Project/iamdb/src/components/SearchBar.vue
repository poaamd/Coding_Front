<script setup></script>

<template>
  <div class="search-bar">
    <input class="text_area" type="text" />
    <a href="#" title="Search"
      ><img
        src="@/assets/icons/search_icon.svg"
        alt="Search icon"
        class="search_icon"
    /></a>
    <a href="#" title="Use your voice for search">
      <img src="@/assets/icons/mic_icon.svg" alt="Mic icon" class="mic_icon" />
    </a>
  </div>
</template>
<style scoped>
.search-bar {
  background: rgba(34, 44, 79, 0.95);
  position: relative;
  margin: 32px auto;
  width: 920px;
  height: 48px;
  border-radius: 16px;
}
.text_area {
  background: rgba(34, 44, 79, 0.95);
  margin: 0 50px;
  width: 88%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 16px;
  color: aliceblue;
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
