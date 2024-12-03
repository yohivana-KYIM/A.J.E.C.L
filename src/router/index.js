import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Chemin vers Home.vue
import Calendrier from "../components/frontend/calendrier/calendrier.vue"; // Chemin vers Calendrier.vue

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calendrier",
    name: "Calendrier",
    component: Calendrier,
  },

  // Ajoutez d'autres routes si nécessaire
];

// Créer l'instance du routeur
const router = createRouter({
  history: createWebHistory(),
  routes, // Enregistrer les routes
});

export default router;
