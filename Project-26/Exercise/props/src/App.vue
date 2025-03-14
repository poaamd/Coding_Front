<script setup>
// import Item from "./components/Item.vue";
import AsyncComp from "./components/AsyncComp.vue";
// import { ref } from "vue";

// const list = ref([
//   {
//     id: 1,
//     title: "Jay",
//   },
// ]);
// const title = ref("");

// const submitItem = () => {
//   list.value.push({
//     id: 1,
//     title: title.value,
//   });
//   title.value = "";
// };

// const sayCongrats = (item) => {
//   alert(`Congrats ${item.title}`);
// };
</script>

<template>
  <!-- <input v-model="title" type="text" />
  <button @click="submitItem">Submit</button>
  <ul>
    <Item
      v-for="item in list"
      :title="item.title"
      @congrats="sayCongrats(item)"
    />
  </ul> -->
  <AsyncComp />
</template>
