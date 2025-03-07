<script setup></script>

<template>
  <div class="container">
    <RouterLink to="/Search-Results" style="color: aliceblue"
      >Search Results</RouterLink
    >
    <br />
    <RouterLink to="/Movie-Details" style="color: aliceblue"
      >Movie Details</RouterLink
    >

    <hr />
    <br />
    <hr />
    <RouterView />
  </div>
</template>
