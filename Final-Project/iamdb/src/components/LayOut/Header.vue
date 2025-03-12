<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.replace("/");
};
</script>
<template>
  <div class="header">
    <button class="back_btn" @click="goHome">
      <img class="left_angle" src="/icons/back.svg" alt="left_angle" />
    </button>
    <div class="text_wrapper">
      <div class="result">Result</div>
      <div class="search">for Search Query</div>
    </div>
  </div>
</template>

<style scoped>
.header {
  color: var(--text-color);
  display: flex;
  justify-content: space-around;
  text-align: left;
  align-items: center;
  position: relative;
}
.left_angle {
  width: 20px;
}
.back_btn {
  position: absolute;
  left: 0;
  width: 40px;
  background: var(--secondary-color);
  border-radius: 16px;
  padding: 10px;
}
.back_btn:hover {
  background: var(--primary-color);
  scale: 1.2;
}

.result {
  font-weight: 700;
  font-size: 18px;
  text-align: center;
}

.search {
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  opacity: 0.4;
}
</style>
