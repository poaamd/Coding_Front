<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ year }}</h2>
    <!-- <img src={{ images[0] }} alt="" /> -->
    <p></p>
  </div>
</template>
