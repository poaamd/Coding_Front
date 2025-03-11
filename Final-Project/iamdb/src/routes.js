import Home from "@/views/home.vue";
import List from "@/views/List.vue";
import Details from "@/views/Detail.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/list",
    name: "list",
    component: List,
  },
  {
    path: "/movie/:id",
    name: "details",
    component: Details,
    props: true, // Pass movie ID as a prop to Details.vue
  },
];

export default routes;
