import Home from "@/views/home.vue";
import List from "@/views/List.vue";
import Details from "@/views/Detail.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Search-Results",
    component: List,
  },
  {
    path: "/Movie-Details",
    component: Details,
  },
];
export default routes;
