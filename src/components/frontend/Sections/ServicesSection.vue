<template>
  <section id="services" class="services section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <div class="title-underline d-flex justify-content-center">
        <div class="green-line me-2 line-animated"></div>
        <div class="red-line me-2 line-animated"></div>
        <div class="yellow-line line-animated"></div>
      </div>
      <p>Quelques Services de l'A.E.J.C</p>
    </div>
    <div class="container">
      <div class="row gy-4">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="service-item position-relative">
            <div class="icon">
              <i
                class="fas fa-info-circle"
                style="color: #28a745; font-size: 2rem"
              ></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Centre d’information et d’accueil</h3>
            </a>
            <p>
              Fournir un espace dédié à l’orientation des nouveaux arrivants,
              avec des ressources sur la vie lyonnaise et les services locaux.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="service-item position-relative">
            <div class="icon">
              <i
                class="fas fa-chalkboard-teacher"
                style="color: #fd7e14; font-size: 2rem"
              ></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Ateliers de formation</h3>
            </a>
            <p>
              Proposer des sessions pratiques sur des thèmes variés (emploi,
              entrepreneuriat, gestion de projet) pour renforcer les compétences
              des membres.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="service-item position-relative">
            <div class="icon">
              <i
                class="fas fa-theater-masks"
                style="color: #20c997; font-size: 2rem"
              ></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Organisation d’événements culturels</h3>
            </a>
            <p>
              Mettre en place des activités pour promouvoir la culture
              camerounaise auprès de la communauté et du grand public.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="service-item position-relative">
            <div class="icon">
              <i
                class="fas fa-user-friends"
                style="color: #df1529; font-size: 2rem"
              ></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Réseau de mentorat</h3>
            </a>
            <p>
              Faciliter l’accompagnement des jeunes Camerounais par des
              professionnels expérimentés pour les guider dans leur insertion
              sociale et professionnelle.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="service-item position-relative">
            <div class="icon">
              <i
                class="fas fa-hands-helping"
                style="color: #6610f2; font-size: 2rem"
              ></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Programme de solidarité et d’entraide</h3>
            </a>
            <p>
              Mettre en œuvre des initiatives caritatives et des actions de
              soutien aux membres ou à des causes locales et internationales.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-up "
          data-aos-delay="600"
        >
          <div class="service-item position-relative">
            <div class="icon">
              <i
                class="fas fa-globe"
                style="color: #17a2b8; font-size: 2rem"
              ></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Échanges interculturels</h3>
            </a>
            <p>
              Organiser des rencontres et des échanges entre différentes
              cultures pour favoriser la compréhension et l'intégration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
};
</script>

<style scoped>
/* Ajoutez vos styles ici */

.title-underline {
  margin-bottom: 0.5rem;
}

.green-line,
.red-line,
.yellow-line {
  height: 4px;
  width: 40px;
  background-color: #28a745;
}

.red-line {
  background-color: #dc3545;
}

.yellow-line {
  background-color: #ffc107;
}

.services {
  padding: 60px 0;
}

.service-item {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.service-item:hover {
  transform: translateY(-5px);
}

.icon {
  text-align: center;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  color: #666;
}
</style>
