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
  document.getElementById("launch-info2").innerHTML = launchInfo;
};
</script>

<template>
  <div class="container">
    <div class="text_wrapper">
      <h2>Space-X</h2>
      <h3>latest Launches</h3>
      <p id="launch-info">Click check button to see latest SpaceX launch1</p>
      <br />
      <button @click="getlatestlunch">Check</button>
    </div>
    <div class="earth">
      <video class="back_video" :src="backVideo" autoplay loop muted></video>
    </div>
    <p class="result_p" id="launch-info2">
      Click check button to see latest SpaceX launch2
    </p>
  </div>
</template>
