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
    path: "/Details",
    name: "details",
    component: Details,
  },
];

export default routes;
