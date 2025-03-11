<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const navigateToDetails = () => {
  if (!props.movie?.id) {
    console.error("Error: Movie ID is missing!");
    return;
  }
  router.push(`/movie/${props.movie.id}`);
};
const props = defineProps({
  movie: Object,
});
</script>
<template>
  <div class="movie_card" @click="navigateToDetails">
    <div class="poster">
      <img :src="movie.poster" alt="Movie Poster" class="movie_icon" />
    </div>
    <div class="detail">
      <div class="detail1">
        <div class="text_wrapp">
          <div class="movie_title">{{ movie.title }}</div>
          <div class="genre">
            {{ movie.genres.length ? movie.genres.join(", ") : "Unknown" }}
          </div>
        </div>
        <div class="icon">
          <img src="/icons/Favorite.svg" alt="Favorite icon" class="fav" />
        </div>
      </div>
      <div class="detail2">
        <div class="year">{{ movie.year }}</div>
        <div class="point"></div>
        <div class="country">{{ movie.country || "Unknown" }}</div>
        <div class="point"></div>
        <div class="score_wrapp">
          <img src="/icons/star.svg" alt="Star icon" class="star" />
          <span class="score">{{ movie.imdb_rating }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: aliceblue;
}

.movie_card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  border-bottom: 1px solid rgba(34, 44, 79, 1);
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.movie_card:last-child {
  border-bottom: none;
}
.movie_card:hover {
  cursor: pointer;
  scale: calc(1.02);
}

.poster {
  width: 30%;
}
.detail {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.movie_icon {
  width: 122px;
  height: 122px;
  border-radius: 18px;
  object-fit: fill;
}

.detail1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.icon {
  width: 10%;
}
.movie_title {
  font-family: Inter;
  font-weight: 700;
  font-size: clamp(10px, 5vw, 20px);
  color: rgba(255, 255, 255, 1);
}
.genre {
  font-family: Inter;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  opacity: 40%;
}

.fav {
  width: 24px;
  cursor: pointer;
}
.fav:hover {
  scale: 1.3;
  opacity: 0.7;
}
.star {
  width: 14px;
}
.point {
  width: 6px;
  height: 6px;
  background: rgba(34, 44, 79, 1);
  border-radius: 100%;
}
.detail2 {
  justify-content: space-evenly;
  text-align: left;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  opacity: 80%;
  align-items: center;
  display: flex;
  gap: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.score_wrapp {
  display: flex;
  gap: 6px;
}
.year {
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  opacity: 80%;
}
</style>
