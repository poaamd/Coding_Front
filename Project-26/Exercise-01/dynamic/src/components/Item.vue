<script setup>
const props = defineProps(["name"]);
console.log(props.name);
</script>
<template>
  <li>{{ name }}</li>
</template>
