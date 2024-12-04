// Header.vue
<template>
  <header :class="['main-header', { scrolled: isScrolled }]">
    <!-- Le reste du template reste identique à votre code original -->
    <div class="header-container">
      <div class="logo-container">
        <a href="/" class="logo-link">
          <img
            src="/assets/img/lyon.png"
            alt="AEJC Lyon Logo"
            class="logo-image"
          />
        </a>
      </div>

      <!-- Navigation Desktop -->
      <nav class="nav-desktop" :class="{ 'nav-visible': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
            <template v-if="!item.children">
              <a
                :href="item.href"
                :class="['nav-link', { active: activeSection === item.href }]"
                @click.prevent="scrollToSection(item.href)"
              >
                {{ item.label }}
              </a>
            </template>

            <template v-else>
              <div
                class="dropdown-trigger"
                @mouseenter="handleDropdownHover(index)"
                @mouseleave="handleDropdownLeave(index)"
              >
                <span>{{ item.label }}</span>
                <i
                  :class="[
                    'dropdown-icon',
                    { rotated: openDropdowns.includes(index) },
                  ]"
                >
                  <svg width="10" height="6" viewBox="0 0 10 6">
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                    />
                  </svg>
                </i>

                <ul
                  :class="[
                    'dropdown-menu',
                    { show: openDropdowns.includes(index) },
                  ]"
                >
                  <li
                    v-for="(child, childIndex) in item.children"
                    :key="childIndex"
                  >
                    <a 
                      :href="child.href" 
                      class="dropdown-link"
                      @click.prevent="scrollToSection(child.href)"
                    >
                      {{ child.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </template>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button
        class="mobile-toggle"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile Navigation -->
      <div :class="['nav-mobile', { show: isMenuOpen }]">
        <div class="mobile-menu-container">
          <ul class="mobile-nav-list">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="mobile-nav-item"
            >
              <template v-if="!item.children">
                <a
                  :href="item.href"
                  class="mobile-nav-link"
                  @click.prevent="handleMobileNavClick(item.href)"
                >
                  {{ item.label }}
                </a>
              </template>

              <template v-else>
                <div class="mobile-dropdown">
                  <button
                    class="mobile-dropdown-trigger"
                    @click="toggleMobileDropdown(index)"
                  >
                    {{ item.label }}
                    <i
                      :class="[
                        'dropdown-icon',
                        { rotated: openMobileDropdowns.includes(index) },
                      ]"
                    >
                      <svg width="10" height="6" viewBox="0 0 10 6">
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                        />
                      </svg>
                    </i>
                  </button>

                  <transition name="slide">
                    <ul
                      v-if="openMobileDropdowns.includes(index)"
                      class="mobile-dropdown-menu"
                    >
                      <li
                        v-for="(child, childIndex) in item.children"
                        :key="childIndex"
                      >
                        <a
                          :href="child.href"
                          class="mobile-dropdown-link"
                          @click.prevent="handleMobileNavClick(child.href)"
                        >
                          {{ child.label }}
                        </a>
                      </li>
                    </ul>
                  </transition>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lanes-container">
      <div class="lane green"></div>
      <div class="lane red">
        <span class="star">★</span>
      </div>
      <div class="lane yellow"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      activeSection: "#hero",
      openDropdowns: [],
      openMobileDropdowns: [],
      lastScrollPosition: 0,
      menuItems: [
        { label: "Accueil", href: "#hero" },
        { label: "À propos", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Evenements", href: "#portfolio" },
        { label: "Équipe", href: "#team" },
        { label: "Contact", href: "#contact" },
        { label: "Calendrier des activités", href: "/calendrier" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.updateActiveSection);
    this.handleScroll();
    
    // Set initial active section based on URL hash
    const hash = window.location.hash;
    if (hash) {
      this.activeSection = hash;
      this.$nextTick(() => {
        this.scrollToSection(hash);
      });
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.updateActiveSection);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.pageYOffset > 50;
    },
    scrollToSection(href) {
      // Handle special case for /calendrier route
      if (href === '/calendrier') {
        this.$router.push('/calendrier');
        return;
      }

      const elementId = href.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        const headerOffset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        this.activeSection = href;
        if (this.isMenuOpen) {
          this.toggleMenu();
        }
      }
    },
    updateActiveSection() {
      const sections = this.menuItems.map(item => item.href.replace('#', ''));
      const headerOffset = 100; // Adjust based on your header height

      for (const section of sections) {
        if (section === 'calendrier') continue;
        
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            this.activeSection = `#${section}`;
            break;
          }
        }
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
    },
    handleDropdownHover(index) {
      if (!this.openDropdowns.includes(index)) {
        this.openDropdowns.push(index);
      }
    },
    handleDropdownLeave(index) {
      this.openDropdowns = this.openDropdowns.filter((i) => i !== index);
    },
    toggleMobileDropdown(index) {
      if (this.openMobileDropdowns.includes(index)) {
        this.openMobileDropdowns = this.openMobileDropdowns.filter(
          (i) => i !== index
        );
      } else {
        this.openMobileDropdowns.push(index);
      }
    },
    handleNavClick(href) {
      this.scrollToSection(href);
    },
    handleMobileNavClick(href) {
      this.scrollToSection(href);
      this.openMobileDropdowns = [];
    },
  },
};
</script>











<style scoped>
body {
  padding-top: 80px;
}

.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  /* Ensure header is always visible */
  transform: translateY(0) !important;
}

.main-header.scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Styles du logo */
.logo-container {
  flex-shrink: 0;
}

.logo-link {
  display: block;
}

.logo-image {
  width: auto;
  height: 80px;
  transition: height 0.3s ease;
}

.scrolled .logo-image {
  height: 70px;
}

/* Autres styles de navigation inchangés */

/* Desktop Navigation */
.nav-desktop {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-link {
  color: #1a365d;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #22c55e;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* Dropdown Styles */
.dropdown-trigger {
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0;
}

.dropdown-icon {
  display: inline-block;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: -1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  min-width: 200px;
  padding: 0.5rem 0;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #1a365d;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-link:hover {
  background-color: #f7fafc;
  color: #22c55e;
}

/* Mobile Menu Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-toggle span {
  width: 100%;
  height: 2px;
  background-color: #1a365d;
  transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Modifiez uniquement la partie des styles du menu mobile dans le <style> */

/* Mobile Navigation */
.nav-mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8); /* Fond transparent */
  backdrop-filter: blur(10px); /* Effet de flou */
  -webkit-backdrop-filter: blur(10px); /* Support Safari */
  padding-top: 100px;
  transform: translateX(100%);
  transition: all 0.3s ease;
  overflow-y: auto;
  z-index: 999;
}

.nav-mobile.show {
  transform: translateX(0);
}

.mobile-menu-container {
  padding: 2rem;
  background: transparent;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-item {
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.mobile-nav-link {
  display: block;
  padding: 1rem;
  color: #1a365d;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.mobile-nav-link:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateX(5px);
}

.mobile-dropdown-trigger {
  width: 100%;
  text-align: left;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 500;
  color: #1a365d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-dropdown-trigger:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateX(5px);
}

.mobile-dropdown-menu {
  padding-left: 1rem;
  list-style: none;
  margin-top: 0.5rem;
}

.mobile-dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #1a365d;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  margin-bottom: 0.5rem;
}

.mobile-dropdown-link:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: translateX(5px);
}

/* Animation pour le menu déroulant mobile */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 400px;
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateX(-10px);
}

/* Ajustements pour le bouton toggle */
.mobile-toggle {
  position: relative;
  z-index: 1000;
}

.mobile-toggle span {
  transition: all 0.3s ease;
}

.mobile-toggle.active span {
  background-color: #1a365d; /* Couleur des traits quand le menu est ouvert */
}
/* Responsive Design */
@media (max-width: 1024px) {
  .nav-desktop {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-mobile {
    display: block;
  }

  .header-container {
    padding: 0.5rem 1rem;
  }

  .logo-image {
    height: 60px;
  }

  .scrolled .logo-image {
    height: 50px;
  }
}

@media (max-width: 640px) {
  .logo-image {
    height: 50px;
  }

  .scrolled .logo-image {
    height: 40px;
  }

  .mobile-nav-link,
  .mobile-dropdown-trigger {
    font-size: 1rem;
    padding: 0.75rem;
  }
}

.lanes-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  width: 100%;
  height: 10px; /* Réduit pour avoir des rectangles plus fins */
}

.lane {
  height: 100%;
  position: relative;
}

.green {
  background-color: #007a5e; /* Vert camerounais */
}

.red {
  background-color: #ce1126; /* Rouge camerounais */
}

.yellow {
  background-color: #fcd116; /* Jaune camerounais */
}

.star {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fcd116; /* Étoile en jaune camerounais */
  font-size: 8px; /* Taille réduite pour l'étoile */
}
</style>
