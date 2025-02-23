<script setup>
import backVideo from "@/assets/videos/back.mp4";
const getlatestlunch = async () => {
  const response = await fetch("https://api.spacexdata.com/v5/launches/latest");
  if (!response.ok) {
    return;
  }

  const result = await response.json();
  // console.log(`
  //     🚀 Mission Name: ${result.name}
  //     📅 Launch Date (UTC): ${result.date_utc}
  //     🚀 Rocket: ${result.rocket}
  //     📍 Launch Site: ${result.launchpad}
  //     👨‍🚀 Crew Members: ${result.crew.length}
  //     🎥 Watch Here: ${result.links.webcast}
  //     ✅ Success: ${result.success ? "Yes" : "No"}
  //   `);

  // Create HTML content
  const launchInfo = `
      <p>🚀 <strong>Mission Name:</strong> ${result.name}</p>
      <p>📅 <strong>Launch Date (UTC):</strong> ${result.date_utc}</p>
      <p>🚀 <strong>Rocket:</strong> ${result.rocket}</p>
      <p>📍 <strong>Launch Site:</strong> ${result.launchpad}</p>
      <p>👨‍🚀 <strong>Crew Members:</strong> ${result.crew.length}</p>
      <p>🎥 <strong>Watch Here:</strong> <a href="${
        result.links.webcast
      }" target="_blank">Live Stream</a></p>
      <p>✅ <strong>Success:</strong> ${result.success ? "Yes" : "No"}</p>
    `;

  // Append to the webpage
  document.getElementById("launch-info").innerHTML = launchInfo;
};
</script>

<template>
  <div class="container">
    <div class="text_wrapper">
      <h2>Space-X</h2>
      <h3>latest Launches</h3>
      <p id="launch-info">Click button to see latest SpaceX launch</p>
      <br />
      <button @click="getlatestlunch">Check</button>
    </div>
    <div class="earth">
      <video class="back_video" :src="backVideo" autoplay loop muted></video>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

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
  right: 0;
  width: 80%;
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
  font-size: 2em;
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
.text_wrapper button {
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
.text_wrapper button:hover {
  transform: scale(1.1);
  background: #fdae37;
  cursor: pointer;
}
</style>
