<template>
  <section id="gallery" class="gallery section bg-light py-5">
    <div class="container">
      <!-- Section Title -->
      <div class="section-title text-center mb-5" data-aos="fade-up">
        <h2 class="mb-3">Nos Entrepreneurs</h2>
        <div class="title-underline d-flex justify-content-center mb-3">
          <div class="green-line me-2 line-animated"></div>
          <div class="red-line me-2 line-animated"></div>
          <div class="yellow-line line-animated"></div>
        </div>
        <p class="text-muted">
          Découvrez les entrepreneurs innovants qui transforment le paysage
          numérique
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="row g-4 justify-content-center">
        <div
          v-for="(entrepreneur, index) in entrepreneurs"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-12"
        >
          <div class="entrepreneur-card position-relative">
            <div class="entrepreneur-image-container">
              <img
                :src="`/assets/img/gallery/gallery-${index + 1}.jpg`"
                :alt="entrepreneur.name"
                class="img-fluid rounded-circle entrepreneur-image"
              />
              <div v-if="entrepreneur.showBio" class="biography-popup">
                <h5 class="text-white">{{ entrepreneur.name }}</h5>
                <p class="text-white">{{ entrepreneur.biography }}</p>
                <button class="btn btn-light btn-sm" @click="toggleBio(index)">
                  Fermer
                </button>
              </div>
            </div>

            <div class="entrepreneur-info mt-3 text-center">
              <h5 class="mb-2">{{ entrepreneur.name }}</h5>
              <button
                class="btn btn-info btn-sm info-button"
                @click="toggleBio(index)"
              >
                <i class="fas fa-info-circle"></i> En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EntrepreneursGallery",
  data() {
    return {
      entrepreneurs: [
        {
          name: "Francklin Ngassa",
          biography:
            "Dirigeant du Salon Mahéna et cofondateur de Malité Ansamm Networking. Entrepreneur français de 34 ans né à Paris, spécialisé en coiffure afro-européenne. Passionné par l'écriture, il partage des anecdotes de vie à travers des chroniques publiées sur le site du salon.",
          showBio: false,
        },
        {
          name: "Armel Ngando",
          biography:
            "Ingénieur systèmes et réseaux avec 11 ans d'expérience. Fondateur de TeachMeMore, une plateforme de formation en ligne pour consultants IT. Certifié Cisco et 3CX, il a formé plus de 2 000 professionnels. Originaire de Yaoundé, Cameroun, il contribue à l'insertion professionnelle des jeunes Africains dans le numérique.",
          showBio: false,
        },
        {
          name: "Dirane Willy Tafen",
          biography:
            "Ingénieur en informatique, consultant et formateur spécialisé en Cloud et DevOps. Diplômé de SUPINFO International University, il a fondé EAZYTraining. Il a formé près de 20 000 apprenants et enseigne dans des institutions comme SUPINFO et YNOV. Contributeur actif de la communauté IT francophone.",
          showBio: false,
        },
        {
          name: "Pelzer Nyatt",
          biography:
            "Ingénieur cloud chez Alteca basé à Lyon. Fondateur de Mixtebio, une marque de bijoux modernes. Musicien et producteur sous le pseudonyme mr_swagg_official. Travaille sur des projets stratégiques pour des clients comme le Crédit Agricole, combinant innovation technologique et créativité artistique.",
          showBio: false,
        },
      ],
    };
  },
  methods: {
    toggleBio(index) {
      // Ferme toute biographie actuellement ouverte
      this.entrepreneurs.forEach((entrepreneur, i) => {
        if (i !== index) {
          entrepreneur.showBio = false;
        }
      });

      // Bascule l'affichage de la biographie de l'entrepreneur cliqué
      this.entrepreneurs[index].showBio = !this.entrepreneurs[index].showBio;
    },
  },
};
</script>

<style scoped>
.entrepreneur-image-container {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  position: relative; /* Ajouté pour positionner l'overlay */
}

.entrepreneur-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.biography-popup {
  position: absolute;
  top: -100px; /* Positionne le popup au-dessus de l'image */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7); /* Couleur de fond sombre */
  color: white;
  padding: 10px;
  border-radius: 5px;
  width: 200px; /* Largeur du popup */
  text-align: center;
  z-index: 10; /* Assure que le popup est au-dessus de l'image */
}

.info-button {
  margin-top: 10px;
}

.title-underline {
  margin-bottom: 0.5rem;
}

.green-line,
.red-line,
.yellow-line {
  height: 4px;
  width: 40px;
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
