<script setup>
import backVideo from "@/assets/videos/back.mp4";
</script>

<template>
  <div class="container">
    <div class="text_wrapper">
      <h2>Latest</h2>
      <h3>Space-X Launches</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a href="#">Explore</a>
    </div>
    <video class="back_video" :src="backVideo" autoplay loop muted></video>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  transition: 0.5s;
  z-index: 2;
}

.back_video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.8;
}

.text_wrapper {
  position: relative;
  z-index: 10;
}

.text_wrapper h2 {
  font-size: 5em;
  font-weight: 800;
  color: #fff;
  line-height: 1em;
  text-transform: uppercase;
}
.text_wrapper h3 {
  font-size: 4em;
  font-weight: 700;
  color: #fff;
  line-height: 1em;
  text-transform: uppercase;
}
.text_wrapper p {
  font-size: 1.1em;
  color: #fff;
  margin: 20px 0;
  font-weight: 400;
  max-width: 700px;
}
.text_wrapper a {
  display: inline-block;
  font-size: 1em;
  background: #fff;
  padding: 10px 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  color: #111;
  letter-spacing: 2px;
  transition: 0.2s;
  border-radius: 100px;
}
.text_wrapper a:hover {
  transform: scale(1.1);
  background: #fdae37;
}
</style>
