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
  color: aliceblue;
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
  font-family: Inter;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
}

.search {
  font-family: Inter;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  opacity: 0.4;
}
</style>
