import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Calendrier from "../components/frontend/calendrier/calendrier.vue";
import ContactList from "../components/ContactList.vue";
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
  {
    path: "/admin/contacts",
    name: "ContactList",
    component: ContactList,
  },
];

// Créer l'instance du routeur
const router = createRouter({
  history: createWebHistory(),
  routes, // Enregistrer les routes
});

export default router;
