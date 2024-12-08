import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Blog from "../views/SingleBlog.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: Blog,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});