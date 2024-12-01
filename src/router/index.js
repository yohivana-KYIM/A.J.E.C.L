import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Path to Home.vue

// Define your routes here
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  // Add more routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // Register the routes
});

export default router;
