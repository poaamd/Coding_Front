<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();
const movie = ref(null);
const loading = ref(true);
const error = ref(null);
const isFavorite = ref(false);

onMounted(async () => {
  const movieId = route.params.id;

  if (!movieId) {
    error.value = "Movie ID not found!";
    loading.value = false;
    return;
  }

  console.log("Fetching details for movie ID:", movieId);

  try {
    const response = await fetch(
      `https://moviesapi.codingfront.dev/api/v1/movies/${movieId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    movie.value = await response.json();
    console.log("Movie details fetched:", movie.value);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

const goBack = () => {
  router.replace("/");
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
</script>

<template>
  <div v-if="movie">
    <div
      class="poster_container"
      :style="{ backgroundImage: 'url(' + movie.images[0] + ')' }"
    >
      <div class="overlay"></div>
    </div>
    <div class="container" v-if="movie">
      <button class="back_btn" @click="goBack">
        <img class="left_angle" src="/icons/back.svg" alt="left_angle" />
      </button>
      <div class="desc_wrap">
        <h1 class="title">{{ movie.title }}</h1>
        <h2 class="genre">{{ movie.genres.join(", ") }}</h2>
        <p class="description">
          {{ movie.plot }}
        </p>
        <div class="metadata">
          <div class="metadata_tag">{{ movie.rated }}</div>
          <div class="metadata_tag">{{ movie.year }}</div>
          <div class="metadata_tag">
            <img src="/icons/clock.svg" alt="clock icon" class="clock" />
            <div>{{ movie.runtime }}</div>
          </div>
        </div>
      </div>
      <div class="ratings">
        <div class="imdb">
          <div class="rating_range">
            <img src="/Group 14.png" alt="" />
          </div>
          <div class="rate_wrap">
            <div class="rate">{{ movie.imdb_rating }}</div>
            <div class="rate_text">Ratings on IMDB</div>
          </div>
        </div>
        <div class="other_rates">
          94% on Rotten Tomatoes <br />
          84/100 on Metacritic
        </div>
      </div>
      <div class="banner_container">
        <img :src="movie.poster" alt="A banner of movie" class="banner" />
      </div>

      <div class="details-container">
        <h2>Details</h2>
        <div class="detail-row">
          <span class="label">Directors:</span>
          <span class="value">{{ movie.director }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Writers:</span>
          <span class="value">J{{ movie.writers || "N/A" }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Actors:</span>
          <span class="value">{{ movie.actors }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Country:</span>
          <span class="value">{{ movie.country }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Language:</span>
          <span class="value">{{ movie.language || "English" }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Awards:</span>
          <span class="value">{{ movie.awards || "N/A" }}</span>
        </div>
      </div>
      <transition name="fade">
        <button v-if="!isFavorite" class="add-btn" @click="toggleFavorite">
          Add to Favorite
        </button>
      </transition>

      <transition name="fade">
        <button v-if="isFavorite" class="remove-btn" @click="toggleFavorite">
          Remove from Favorite
        </button>
      </transition>
    </div>
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
  height: 350px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
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
  font-size: clamp(24px, 12vw, 48px);

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
  margin-bottom: 18px;
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
  width: 100%;
  max-width: 406px;
  position: relative;
}
.banner {
  border-radius: 18px;
  width: 100%;
  max-width: 406px;
  height: 100%;
}
.add-btn {
  position: sticky;
  width: 100%;
  bottom: 12px;
  left: 0;
  padding: 12px 24px;

  border-radius: 12px;
  background: var(--Accent, rgba(114, 76, 249, 1));
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
}
.add-btn:hover {
  opacity: 0.9;
}

.remove-btn {
  position: sticky;
  width: 100%;
  bottom: 12px;
  left: 0;
  padding: 12px 24px;

  border-radius: 12px;
  background: var(--Primary, rgba(34, 44, 79, 1));
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
}
.remove-btn:hover {
  opacity: 0.9;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.details-container {
  color: white;
  border-radius: 8px;
  width: 100%;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
  border-bottom: 1px solid rgba(34, 44, 79, 1);
}
.detail-row:last-child {
  border-bottom: none;
}

.label {
  font-weight: bold;
  width: 45%;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
}

.value {
  font-family: Inter;
  text-align: left;
  width: 55%;
  font-family: Inter;
  font-weight: 200;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}
</style>
