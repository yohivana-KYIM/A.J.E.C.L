<template>
  <footer class="bg-light py-5">
    <div class="container">
      <div class="row align-items-start mb-5">
        <!-- Logo Section - Now on the same line with other sections -->
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
              <a
                :href="getSectionLink(item)"
                class="text-decoration-none text-secondary footer-link"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter and Contact Sections (unchanged) -->
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

      <!-- Rest of the footer remains the same -->
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

      <!-- Back to Top Button -->
      <button
        v-show="showBackToTop"
        @click="scrollToTop"
        class="btn btn-success rounded-circle position-fixed bottom-4 end-4 z-3 back-to-top d-none d-md-flex"
      >
        <i class="bi bi-arrow-up"></i>
      </button>

      <!-- Mobile Back to Top Button -->
      <router-link
        to="/"
        class="btn btn-success rounded-circle position-fixed bottom-4 end-4 z-3 back-to-top d-md-none"
      >
        <i class="bi bi-house"></i>
      </router-link>
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
        link: "https://www.facebook.com/Association-des-%C3%89tudiants-et-Jeunes-Camerounais-de-Lyon-AEJC-Lyon-449097125510730",
      },
      {
        name: "Instagram",
        icon: "bi bi-instagram",
        link: "https://www.instagram.com/asso_des_etudiants_kmer_lyon/",
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

    // New method to handle section navigation
    const getSectionLink = (item) => {
      const sectionMap = {
        'Accueil': '/',
        'À propos': '/#about',
        'Services': '/#services',
        'Portfolio': '/#portfolio',
        'Équipe': '/#team',
        'Contact': '/#contact',
        'Web Design': '/#services',
        'Web Development': '/#services',
        'Marketing': '/#services',
        'Graphic Design': '/#services',
        'Conditions d\'utilisation': '/legal/terms',
        'Politique de confidentialité': '/legal/privacy'
      };
      return sectionMap[item] || '#';
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
      getSectionLink
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

.back-to-top {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .back-to-top {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }
}
</style>
