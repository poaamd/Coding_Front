<script setup>
import Item from "@/components/Item.vue";
import { ref } from "vue";
import AsyncComp from "./components/AsyncComp.vue";
import Fetch from "./components/fetch.vue";
// const list = [
//   {
//     id: 1,
//     name: "John ",
//     email: "John@mail.com",
//   },
//   {
//     id: 2,
//     name: "Max ",
//     email: "Max@mail.com",
//   },
//   {
//     id: 3,
//     name: "Alex ",
//     email: "Alex@mail.com",
//   },
// ];
// const Jay = "Dynamic Jay";

// Define a reactive list of items
const list = ref([
  {
    id: 1,
    name: "John ",
  },
]);

// Define a reactive variable for input name
const name = ref("");

// Function to add a new name to the list
const addName = () => {
  list.value.push({
    id: 1,
    name: name.value,
  });
  console.log(name.value);
};

// Function to show an alert when a "congrats" event is emitted
const sayCongrats = (item) => {
  alert(`Congrats ${item.name}`);
};
</script>

<template>
  <!-- <div>App.vue</div> -->
  <!-- <ul>
    <Item v-for="item in list" :name="item.name" />
    <Item name="Pouya" />
    <Item :name="Jay" />
  </ul> -->
  <!-- <input type="text" v-model="name" /> -->
  <!-- <button @click="addName">Add</button> -->

  <!-- Display the list of items using the Item component -->
  <!-- <ul>
    <Item
      v-for="item in list"
      :name="item.name"
      @congrats="sayCongrats(item)"
    />
  </ul> -->
  <!-- <AsyncComp /> -->
  <Fetch />
</template>
