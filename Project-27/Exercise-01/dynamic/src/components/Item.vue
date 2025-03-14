<script setup>
// Define props to accept a "name" property from the parent component
const props = defineProps(["name"]);

// Define events that this component can emit
const emit = defineEmits(["congrats"]);

// Function to emit a "congrats" event when called
const onCongrats = () => {
  emit("congrats");
};

// Function to show an alert when "Remove" button is clicked
const onRemove = () => {
  alert("remove");
};

// Log the received name prop to the console for debugging purposes
console.log(props.name);
</script>

<template>
  <li>
    <!-- Display the name prop -->
    {{ name }}

    <!-- Button to trigger the "congrats" event -->
    <button @click="onCongrats">Congrats</button>

    <!-- Button to trigger the "onRemove" function -->
    <button @click="onRemove">Remove</button>
  </li>
</template>
