<template>
  <section class="entrepreneurs-gallery section bg-light py-5">
    <div class="container">
      <!-- Section Title -->
      <div class="section-title text-center mb-5" data-aos="fade-up">
        <h2 class="mb-3">Nos Entrepreneurs</h2>
        <div class="title-underline d-flex justify-content-center">
          <div class="green-line me-2 line-animated"></div>
          <div class="red-line me-2 line-animated"></div>
          <div class="yellow-line line-animated"></div>
        </div>
        <p class="text-muted">
          Découvrez les entrepreneurs innovants qui font rayonner notre
          association.
        </p>
        <p>
          <em
            >si vous avez créé une entreprise récemment et que vous êtes membre
            actif de l'association, contactez le bureau pour votre promotion
            dans cette section</em
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EntrepreneursGallery",
  data() {
    return {};
  },
};
</script>

<style scoped>
.title-underline {
  margin-bottom: 1rem;
}

.green-line,
.red-line,
.yellow-line {
  height: 4px;
  width: 40px;
  transition: width 0.3s ease;
}

.green-line {
  background-color: #28a745;
}
.red-line {
  background-color: #dc3545;
}
.yellow-line {
  background-color: #ffc107;
}
</style>
