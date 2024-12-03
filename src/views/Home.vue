<template>
  <div>
    <br />
    <br />

    <HeroSection />
    <AboutSection />
    <StatsSection />

    <ClientsSection />
    <GallerySection />

    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <TeamSection />

    <ContactSection />
  </div>
</template>

<script>
// Importation des composants avec des chemins relatifs

import HeroSection from "../components/frontend/Sections/HeroSection.vue";
import AboutSection from "../components/frontend/Sections/AboutSection.vue";
import StatsSection from "../components/frontend/Sections/StatsSection.vue";
import ClientsSection from "../components/frontend/Sections/ClientsSection.vue";
import ServicesSection from "../components/frontend/Sections/ServicesSection.vue";
import PortfolioSection from "../components/frontend/Sections/PortfolioSection.vue";
import TestimonialsSection from "../components/frontend/Sections/TestimonialsSection.vue";
import TeamSection from "../components/frontend/Sections/TeamSection.vue";
import GallerySection from "../components/frontend/Sections/GallerySection.vue";
import ContactSection from "../components/frontend/Sections/ContactSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    AboutSection,
    StatsSection,
    ClientsSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    TeamSection,
    GallerySection,
    ContactSection,
  },
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles ici pour Home.vue */
</style>
