<template>
  <section id="hero" class="hero section light-background">
    <div class="container">
      <div class="row gy-4">
        <div
          class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-md-start"
          data-aos="fade-up"
        >
          <h2>Bienvenue à l'AEJC Lyon</h2>
          <p>Association des étudiants et des jeunes Camerounais de Lyon</p>
          <div
            class="d-flex mt-4 justify-content-center justify-content-md-start"
          >
            <a href="#about" class="cta-btn">Get Started</a>
          </div>
        </div>
        <div
          class="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <img
            src="/assets/img/hero-img.png"
            class="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
