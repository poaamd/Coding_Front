<script setup>
import { defineProps } from "vue";

// Define props passed from the parent component
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="movie_card">
    <img :src="movie.poster" alt="Movie Poster" class="movie_icon" />
    <div class="detail">
      <div class="detail1">
        <div class="text_wrapp">
          <div class="movie_title">{{ movie.title }}</div>
          <div class="genre">
            {{ movie.genres.length ? movie.genres.join(", ") : "Unknown" }}
          </div>
        </div>
        <img src="/icons/Favorite.svg" alt="Favorite icon" class="fav" />
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
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(34, 44, 79, 1);
  /*Margin_top Must be deleated Later*/
  margin-top: 20px;
  /*Margin_top Must be deleated Later*/
}
.movie_icon {
  width: 122px;
  height: 122px;
  border-radius: 18px;
}
.detail1 {
  display: flex;
  margin-bottom: 10px;
}

.movie_title {
  font-family: Inter;
  font-weight: 700;
  font-size: 24px;
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
  scale: 1.1;
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
  justify-content: center;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  opacity: 80%;
  align-items: center;
  display: flex;
  gap: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  gap: 12px;
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
