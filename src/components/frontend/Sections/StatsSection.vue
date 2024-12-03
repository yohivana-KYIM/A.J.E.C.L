<template>
  <section id="stats" class="stats section light-background">
    <img src="/assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />
    <div
      class="container position-relative"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span class="blue-counter">183</span>
            <p><strong>Sympathisants</strong></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span class="blue-counter">45</span>
            <p><strong>Membres Actifs</strong></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span class="blue-counter">22</span>
            <p><strong>Événements en Attente</strong></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span class="blue-counter">8</span>
            <p><strong>Partenaires</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatsSection",
};
</script>

<style scoped>
.blue-counter {
  color: blue;
  font-size: 2rem;
  font-weight: bold;
  transition: transform 0.3s ease, color 0.3s ease;
}

.blue-counter:hover {
  transform: scale(1.2); /* Augmente légèrement la taille */
  color: #3498db; /* Couleur bleue plus claire */
}
</style>
