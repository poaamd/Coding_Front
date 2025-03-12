<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const isToggled = ref(false);
const toggleHeart = () => {
  isToggled.value = !isToggled.value;
};

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
  <div class="fav_container">
    <div class="icon">
      <svg
        @click="toggleHeart"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ fill: isToggled ? 'red' : 'white' }"
      >
        <path
          d="M17.5 1.916C16.374 1.934 15.272 2.249 14.307 2.828C13.341 3.408 12.545 4.232 12 5.217C11.455 4.232 10.659 3.408 9.693 2.828C8.728 2.249 7.626 1.934 6.5 1.917C4.705 1.995 3.014 2.78 1.796 4.101C0.578 5.422 -0.068 7.172 0 8.967C0 13.514 4.786 18.48 8.8 21.847C9.696 22.6 10.829 23.013 12 23.013C13.171 23.013 14.304 22.6 15.2 21.847C19.214 18.48 24 13.514 24 8.967C24.068 7.172 23.422 5.422 22.204 4.101C20.986 2.78 19.295 1.995 17.5 1.917ZM13.915 20.317C13.379 20.768 12.701 21.016 12 21.016C11.299 21.016 10.621 20.768 10.085 20.317C4.947 16.006 2 11.87 2 8.967C1.932 7.702 2.366 6.461 3.209 5.515C4.052 4.569 5.235 3.994 6.5 3.917C7.765 3.994 8.948 4.569 9.791 5.515C10.634 6.461 11.068 7.702 11 8.967C11 9.232 11.105 9.487 11.293 9.674C11.48 9.862 11.735 9.967 12 9.967C12.265 9.967 12.52 9.862 12.707 9.674C12.895 9.487 13 9.232 13 8.967C12.932 7.702 13.366 6.461 14.209 5.515C15.052 4.569 16.235 3.994 17.5 3.917C18.765 3.994 19.948 4.569 20.791 5.515C21.634 6.461 22.068 7.702 22 8.967C22 11.87 19.053 16.006 13.915 20.317Z"
        />
      </svg>
    </div>
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
  </div>
</template>

<style scoped>
.fav_container {
  position: relative;
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

.movie_icon {
  width: 122px;
  height: 122px;
  border-radius: 18px;
  object-fit: fill;
}

.detail1 {
  margin-bottom: 10px;
}
.icon {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  z-index: 10;
}
.icon:hover {
  scale: calc(1.1);
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
