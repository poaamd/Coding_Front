<script setup>
import { ref } from "vue";
// const wait = () => {
//   return new Promise((resolve) => {
//     console.log("Start of wait");
//     setTimeout(() => {
//       console.log("waited");
//       resolve();
//     }, 2000);
//     console.log("end of wait");
//   });
// };

//call back function
// const run = (event) => {
//   console.log(event);

//   console.log("Start run");
//   wait().then(() => {
//     console.log("End of run");
//   });
// };

// const run = async () => {
//   console.log("Start run");
//   await wait();
//   console.log("End of run");
// };

const fact = ref({});

const getRandomFact = async () => {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/api/v2/facts/random"
  );
  const result = await response.json();
  fact.value = result;
};
</script>
<template>
  <div>
    Here
    <button @click="getRandomFact">Get</button>
    <div>
      {{ fact.text }} -
      <a href="fact.permalink" title="See the source">{{ fact.source }}</a>
    </div>
  </div>
  <!-- <button @click="run()">Run</button> -->
  <!-- <button @click="run">Run</button> -->
</template>
