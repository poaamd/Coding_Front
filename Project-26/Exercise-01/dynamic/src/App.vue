<script setup>
import Item from "@/components/Item.vue";
const list = [
  {
    id: 1,
    name: "John ",
    email: "John@mail.com",
  },
  {
    id: 2,
    name: "Max ",
    email: "Max@mail.com",
  },
  {
    id: 3,
    name: "Alex ",
    email: "Alex@mail.com",
  },
];
</script>

<template>
  <div>App.vue</div>
  <ul>
    <Item v-for="item in list" :name="item.name" />
  </ul>
</template>
