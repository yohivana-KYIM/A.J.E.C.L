import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importation du routeur

// Importation des styles CSS

// import "/assets/css/bootstrap.min.css";
// import "/assets/css/bootstrap-icons.css";
// import "/assets/css/aos.css";
// import "/assets/css/glightbox.min.css";
// import "/assets/css/swiper-bundle.min.css";
// Importation des scripts JavaScript
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "../assets/js/glightbox.min.js";
// import "../assets/js/purecounter_vanilla.js";
// import "../assets/js/imagesloaded.pkgd.min.js";
// import "../assets/js/isotope.pkgd.min.js";

// Importer et configurer AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init(); // Initialisation d'AOS

// Création de l'application Vue
const app = createApp(App);

// Utilisation du routeur
app.use(router);

// Montage de l'application
app.mount("#app");
