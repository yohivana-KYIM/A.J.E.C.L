<template>
  <footer class="bg-light py-5">
    <div class="container">
      <div class="row g-4">
        <!-- Sections de liens -->
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
              <router-link 
                :to="getRouteLink(item)" 
                class="text-decoration-none text-secondary hover-text-success"
              >
                {{ item }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Section Newsletter -->
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
      </div>

      <!-- Réseaux sociaux -->
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

      <!-- Copyright -->
      <hr class="my-4"/>
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
        <p class="text-muted mb-3 mb-md-0">
          &copy; {{ currentYear }} Butterfly. Tous droits réservés.
        </p>
      </div>

      <!-- Bouton Retour en haut -->
      <button 
        v-show="showBackToTop"
        @click="scrollToTop"
        class="btn btn-success rounded-circle position-fixed bottom-4 end-4 z-3 back-to-top"
      >
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default {
  name: 'FooterComponent',
  setup() {
    const showBackToTop = ref(false);
    const email = ref("");

    const footerSections = [
      {
        title: "Pages",
        items: [
          "Accueil", "À propos", "Services", 
          "Portfolio", "Équipe", "Contact"
        ],
      },
      { 
        title: "Services", 
        items: [
          "Web Design", 
          "Web Development", 
          "Marketing", 
          "Graphic Design"
        ] 
      },
      {
        title: "Légal",
        items: [
          "Conditions d'utilisation", 
          "Politique de confidentialité"
        ],
      },
    ];

    const socialMedia = [
      {
        name: "Facebook",
        icon: "bi bi-facebook",
        link: "https://facebook.com/votrepage",
      },
      {
        name: "Instagram",
        icon: "bi bi-instagram",
        link: "https://instagram.com/votrepage",
      },
      {
        name: "LinkedIn",
        icon: "bi bi-linkedin",
        link: "https://linkedin.com/company/votrepage",
      },
      {
        name: "Twitter/X",
        icon: "bi bi-twitter-x",
        link: "https://twitter.com/votrepage",
      },
      {
        name: "YouTube",
        icon: "bi bi-youtube",
        link: "https://youtube.com/votrechaine",
      }
    ];

    const currentYear = computed(() => new Date().getFullYear());

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      showBackToTop.value = scrollTop > 300;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const submitNewsletter = () => {
      // Logique d'abonnement à la newsletter
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

    // Mapping des routes
    const getRouteLink = (item) => {
      const routeMap = {
        'Accueil': '/',
        'À propos': '/#about',
        'Services': '/services',
        'Portfolio': '/portfolio',
        'Équipe': '/team',
        'Contact': '/contact'
      };
      return routeMap[item] || '#';
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      showBackToTop,
      scrollToTop,
      submitNewsletter,
      currentYear,
      footerSections,
      socialMedia,
      email,
      getRouteLink
    };
  },
};
</script>

<style scoped>
.hover-text-success:hover {
  color: #198754 !important;
}

.social-icons .social-icon {
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icons .social-icon:hover {
  color: #198754 !important;
  transform: scale(1.2);
}

.back-to-top {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .social-icons {
    flex-wrap: wrap;
    gap: 20px;
  }

  .social-icons .social-icon {
    margin: 0 10px 10px;
  }

  .back-to-top {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }
}
</style>