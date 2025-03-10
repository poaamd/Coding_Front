<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.replace("/list");
};
</script>
<template>
  <div class="poster_container">
    <img src="/Frame.png" alt="A Poster of Movie" class="movie_poster" />
    <div class="overlay"></div>
  </div>
  <button class="back_btn" @click="goBack">
    <img class="left_angle" src="/icons/back.svg" alt="left_angle" />
  </button>
  <div class="desc_wrap">
    <h1 class="title">The Dark Knight</h1>
    <h2 class="genre">Action, Crime, Drama</h2>
    <p class="description">
      When the menace known as the Joker wreaks havoc and chaos on the people of
      Gotham, Batman must accept one of the greatest psychological and physical
      tests of his ability to fight injustice.
    </p>
    <div class="metadata">
      <div class="metadata_tag">PG-13</div>
      <div class="metadata_tag">2008</div>
      <div class="metadata_tag">
        <img src="/icons/clock.svg" alt="clock icon" class="clock" />
        <div>152 min</div>
      </div>
    </div>
  </div>
  <div class="ratings">
    <div class="imdb">
      <div class="rating_range">
        <img src="/Group 14.png" alt="" />
      </div>
      <div class="rate_wrap">
        <div class="rate">2,528,462</div>
        <div class="rate_text">Ratings on IMDB</div>
      </div>
    </div>
    <div class="other_rates">
      94% on Rotten Tomatoes <br />
      84/100 on Metacritic
    </div>
  </div>
  <div class="banner_container">
    <img src="/banner.jpeg" alt="" class="banner" />
  </div>
</template>

<style scoped>
.left_angle {
  width: 20px;
}
.back_btn {
  position: absolute;
  left: 12px;
  top: 32px;
  width: 40px;
  background: var(--secondary-color);
  border-radius: 16px;
  padding: 10px;
  z-index: 2;
}
.back_btn:hover {
  background: var(--primary-color);
  scale: 1.2;
}
.poster_container {
  width: 100%;
  max-width: 430px;
  height: 350px;
  overflow: hidden;
  position: relative;
}
.movie_poster {
  margin-top: 50px;
  width: 100%;
  max-width: 430px;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.5);
  z-index: -10;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(
    180deg,
    rgba(7, 13, 35, 0) 0%,
    rgba(7, 13, 35, 0.7) 28.5%,
    rgba(7, 13, 35, 0.9) 60%,
    #070d23 99%
  );
  z-index: 1;
}
.desc_wrap {
  color: aliceblue;
  position: absolute;
  top: 172px;
  left: 12px;
  z-index: 2;
}
.title {
  font-family: Inter;
  font-weight: 700;
  font-size: 48px;

  vertical-align: middle;
  color: rgba(255, 255, 255, 1);
}
.genre {
  font-family: Inter;
  font-weight: 300;
  font-size: 12px;
  opacity: 40%;
}
.description {
  font-family: Inter;
  margin-top: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: justify;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 12px;
}
.metadata {
  display: flex;
  margin-top: 18px;
  gap: 12px;
}
.metadata_tag {
  display: flex;
  text-align: center;
  align-items: center;
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;

  padding-top: 6px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  border-radius: 8px;
  background: rgba(34, 44, 79, 1);
}
.clock {
  width: 12;
  margin-right: 6px;
}
.metadata_tag:hover {
  transform: scale(1.1);
}

.other_rates {
  font-family: Inter;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
}

.ratings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 78px;
}

.imdb {
  color: aliceblue;
  display: flex;
  align-items: center;
  gap: 18px;
}
.rate {
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  opacity: 80%;
  margin-bottom: 6px;
}
.rate_text {
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;

  opacity: 60%;
}
.other_rates {
  font-family: Inter;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0%;
  opacity: 50%;
}
.banner_container {
  margin: 18px 12px 0 12px;
  width: 406px;
  height: 390px;
}
.banner {
  border-radius: 18px;
  width: 406px;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  object-position: top;
}
</style>
