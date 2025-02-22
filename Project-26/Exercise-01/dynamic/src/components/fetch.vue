<script setup>
import { ref } from "vue"; // Importing `ref` from Vue, which allows us to create reactive variables

const fact = ref({}); // Creating a reactive variable to store the random fact

// This function fetches a random fact from an API
const getRanodmFact = async () => {
  const response = await fetch(
    // Sending a request to the API to get a random fact
    "https://uselessfacts.jsph.pl/api/v2/facts/random"
  );
  const result = await response.json(); // Converting the API response to JSON format
  fact.value = result; // Storing the fetched fact in the `fact` variable
};
</script>

<template>
  <div>
    <h1>Random Fact</h1>

    <!-- Button to fetch a new random fact when clicked -->
    <button @click="getRanodmFact">Get Random Fact</button>
    <hr />

    <!-- Displaying the fetched fact -->
    <div>
      {{ fact.text }} ---
      <a :href="fact.permalink" title="take a look to the source">
        {{ fact.source }}
      </a>
    </div>
  </div>
</template>

<!-- 
Explanation:
1. We define a reactive variable `fact` using `ref({})` to store the fetched fact.
2. The `getRanodmFact` function fetches a random fact from an external API.
3. When the button is clicked, `getRanodmFact` is executed, retrieving a new fact.
4. The fetched fact is displayed on the page, along with a link to the source.

Issues:
- There's a typo in `getRanodmFact` (should be `getRandomFact`).
- If the API call fails, the code doesn't handle errors (e.g., no fact displayed).

Execution Flow:
1. User clicks the button.
2. `getRanodmFact` fetches a random fact.
3. The fetched data is stored in `fact.value`.
4. The UI updates automatically to display the new fact.
-->
