<template>
  <footer class="bg-light py-5">
    <div class="container">
      <div class="row align-items-start mb-5">
        <div class="col-12 col-md-3 d-flex align-items-center mb-4">
          <router-link to="/" class="d-inline-block me-4">
            <img
              src="/public/assets/img/lyon.png"
              alt="Butterfly Logo"
              class="img-fluid logo"
              style="max-height: 100px"
            />
          </router-link>
        </div>

        <div
          v-for="(section, index) in footerSections"
          :key="index"
          class="col-12 col-md-3 col-sm-6 mb-4"
        >
          <h4 class="text-success border-bottom border-success pb-2 mb-3">
            {{ section.title }}
          </h4>
          <ul class="list-unstyled">
            <li
              v-for="item in section.items"
              :key="item"
              class="mb-2 d-flex align-items-center"
            >
              <i class="bi bi-chevron-right text-success me-2"></i>
              <a
                :href="getSectionLink(item)"
                class="text-decoration-none text-secondary footer-link"
                @click="scrollToSection(getSectionLink(item))"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-3 col-sm-6 mb-4">
          <h4 class="text-success border-bottom border-success pb-2 mb-3">
            Newsletter
          </h4>
          <form @submit.prevent="submitNewsletter">
            <div class="mb-3">
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Votre email"
                required
              />
            </div>
            <button
              type="submit"
              class="btn btn-success w-100 d-flex align-items-center justify-content-center"
            >
              S'abonner
              <i class="bi bi-send ms-2"></i>
            </button>
          </form>
        </div>
        <div class="col-12 col-md-3 col-sm-6 mb-4">
          <h4 class="text-success border-bottom border-success pb-2 mb-3">
            Contact
          </h4>
          <ul class="list-unstyled">
            <li class="mb-2 d-flex align-items-center">
              <i class="bi bi-envelope text-success me-2"></i>
              <a
                href="mailto:aejclyoncontact@gmail.com"
                class="text-decoration-none text-secondary hover-text-success"
              >
                aejclyoncontact@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mt-4 justify-content-center">
        <div class="col-12 text-center">
          <h4 class="text-success border-bottom border-success pb-2 mb-3">
            Suivez-nous
          </h4>
          <div class="d-flex justify-content-center social-icons">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary mx-3 fs-4 social-icon"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>

      <hr class="my-4" />
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center"
      >
        <p class="text-muted mb-3 mb-md-0">
          &copy; {{ currentYear }} A.E.J.C. Tous droits réservés.
        </p>
      </div>

      <!-- Universal scroll-to-top button -->
      <button
        v-show="showScrollButton"
        @click="scrollToTop"
        class="scroll-button"
        :class="{ 'scroll-button-visible': showScrollButton }"
        aria-label="Retour en haut"
      >
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

export default {
  name: "FooterComponent",
  setup() {
    const showScrollButton = ref(false);
    const email = ref("");
    const scrollThreshold = 300; // Pixels to scroll before showing button

    const footerSections = [
      {
        title: "Pages",
        items: [
          "Accueil",
          "À propos",
          "Services",
          "Portfolio",
          "Équipe",
          "Contact",
          "Calendrier des activités",
        ],
      },
      {
        title: "Services",
        items: ["Web Design", "Web Development", "Marketing", "Graphic Design"],
      },
      {
        title: "Légal",
        items: ["Conditions d'utilisation", "Politique de confidentialité"],
      },
    ];

    const socialMedia = [
      {
        name: "Facebook",
        icon: "bi bi-facebook",
        link: "https://www.facebook.com/Association-des-%C3%89tudiants-et-Jeunes-Camerounais-de-Lyon-AEJC-Lyon-449097125510730",
      },
      {
        name: "Instagram",
        icon: "bi bi-instagram",
        link: "https://www.instagram.com/asso_des_etudiants_kmer_lyon/",
      },
    ];

    const currentYear = computed(() => new Date().getFullYear());

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      showScrollButton.value = scrollTop > scrollThreshold;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const scrollToSection = (sectionId) => {
      if (sectionId === "/#") {
        scrollToTop();
      } else {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const submitNewsletter = () => {
      if (validateEmail(email.value)) {
        console.log("Newsletter signup:", email.value);
        alert("Merci de vous être abonné à notre newsletter !");
        email.value = "";
      } else {
        alert("Veuillez entrer une adresse email valide.");
      }
    };

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    const getSectionLink = (item) => {
      const sectionMap = {
        Accueil: "/",
        "À propos": "/#about",
        Services: "/#services",
        Portfolio: "/#portfolio",
        Équipe: "/#team",

        Contact: "/#contact",
        "Calendrier des activités": "/calendrier",
        "Web Design": "/#services",
        "Web Development": "/#services",
        Marketing: "/#services",
        "Graphic Design": "/#services",
        "Conditions d'utilisation": "/legal/terms",
        "Politique de confidentialité": "/legal/privacy",
      };
      return sectionMap[item] || "#";
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial scroll position
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      showScrollButton,
      scrollToTop,
      scrollToSection,
      submitNewsletter,
      currentYear,
      footerSections,
      socialMedia,
      email,
      getSectionLink,
    };
  },
};
</script>

<style scoped>
.footer-link {
  position: relative;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #198754 !important;
}

.footer-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #198754;
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

.logo {
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* Enhanced Scroll Button Styles */
.scroll-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #198754;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  z-index: 1000;
}

.scroll-button-visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-button:hover {
  background-color: #146c43;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-button:active {
  transform: translateY(-1px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .scroll-button {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
    font-size: 1.25rem;
  }
}

/* Animation for scroll button */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.scroll-button i {
  animation: bounce 2s infinite;
}

/* Social icons hover effect */
.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #198754 !important;
  transform: translateY(-3px);
}
</style>
