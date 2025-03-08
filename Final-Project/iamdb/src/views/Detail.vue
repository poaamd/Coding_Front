<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.replace("/list");
};
</script>
<template>
  <img src="/Frame.png" alt="" class="movie_poster" />
  <div class="container">
    <button class="back_btn" @click="goBack">
      <img class="left_angle" src="/icons/back.svg" alt="left_angle" />
    </button>
  </div>
</template>

<style scoped>
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

.movie_poster {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: unset;
  z-index: -1;
}
.container {
  width: 100%;

  background: linear-gradient(
    180deg,
    rgba(7, 13, 35, 0) 0%,
    rgba(7, 13, 35, 0.7) 28.5%,
    rgba(7, 13, 35, 0.9) 60%,
    #070d23 99%
  );
}
</style>
