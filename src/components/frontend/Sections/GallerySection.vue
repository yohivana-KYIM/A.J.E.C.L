<template>
  <section class="entrepreneurs-gallery section bg-light py-5">
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
          class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
        >
          <div
            class="entrepreneur-card position-relative"
            @mouseenter="hoverCard(index)"
            @mouseleave="leaveCard(index)"
          >
            <div class="entrepreneur-image-container">
              <img
                :src="`/assets/img/gallery/gallery-${index + 1}.jpg`"
                :alt="entrepreneur.name"
                class="img-fluid rounded-circle entrepreneur-image"
              />
              <div
                class="overlay"
                :class="{ 'overlay-active': entrepreneur.isHovered }"
              >
                <button
                  class="btn btn-primary info-button"
                  @click="openBioModal(index)"
                >
                  <i class="fas fa-info-circle me-2"></i>En savoir plus
                </button>
              </div>
            </div>

            <div class="entrepreneur-info mt-3 text-center">
              <h5 class="mb-2">{{ entrepreneur.name }}</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Biography Modal -->
      <div
        v-if="selectedEntrepreneur"
        class="bio-modal"
        @click.self="closeBioModal"
      >
        <div class="bio-modal-content">
          <div class="bio-modal-header">
            <img
              :src="`/assets/img/gallery/gallery-${
                selectedEntrepreneurIndex + 1
              }.jpg`"
              :alt="selectedEntrepreneur.name"
              class="modal-profile-image"
            />
            <h3>{{ selectedEntrepreneur.name }}</h3>
            <button class="btn-close" @click="closeBioModal">&times;</button>
          </div>
          <div class="bio-modal-body">
            <p>{{ selectedEntrepreneur.biography }}</p>
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
          isHovered: false,
        },
        {
          name: "Armel Ngando",
          biography:
            "Ingénieur systèmes et réseaux avec 11 ans d'expérience. Fondateur de TeachMeMore, une plateforme de formation en ligne pour consultants IT. Certifié Cisco et 3CX, il a formé plus de 2 000 professionnels. Originaire de Yaoundé, Cameroun, il contribue à l'insertion professionnelle des jeunes Africains dans le numérique.",
          isHovered: false,
        },
        {
          name: "Kevin Dango",
          biography:
            "Un entrepreneur et formateur passionné par le management, l'agilité et la gestion des talents. Il est le fondateur et PDG de Moavis, une entreprise spécialisée dans les métiers du numérique et du digital, et cofondateur de Eazytraining, un centre de formation en agilité, Scrum, DevOps et Lean. Kevin s'est donné pour mission d'aider un million de personnes à adopter des pratiques agiles pour optimiser leur collaboration et leur efficacité.",
          isHovered: false,
        },
        {
          name: "Pelzer Nyatt",
          biography:
            "Ingénieur cloud chez Alteca basé à Lyon. Fondateur de Mixtebio, une marque de bijoux modernes. Musicien et producteur sous le pseudonyme mr_swagg_official. Travaille sur des projets stratégiques pour des clients comme le Crédit Agricole, combinant innovation technologique et créativité artistique.",
          isHovered: false,
        },
      ],
      selectedEntrepreneur: null,
      selectedEntrepreneurIndex: null,
    };
  },
  methods: {
    hoverCard(index) {
      this.entrepreneurs[index].isHovered = true;
    },
    leaveCard(index) {
      this.entrepreneurs[index].isHovered = false;
    },
    openBioModal(index) {
      this.selectedEntrepreneur = this.entrepreneurs[index];
      this.selectedEntrepreneurIndex = index;
    },
    closeBioModal() {
      this.selectedEntrepreneur = null;
      this.selectedEntrepreneurIndex = null;
    },
  },
};
</script>

<style scoped>
.entrepreneur-card {
  transition: transform 0.3s ease;
}

.entrepreneur-image-container {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
}

.entrepreneur-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.overlay-active {
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.overlay .info-button {
  transform: scale(0);
  transition: transform 0.3s ease;
}

.overlay-active .info-button {
  transform: scale(1);
}

.bio-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.bio-modal-content {
  background: white;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bio-modal-header {
  position: relative;
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.modal-profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.bio-modal-body {
  padding: 20px;
}

@media (max-width: 768px) {
  .entrepreneur-image-container {
    width: 200px;
    height: 200px;
  }

  .modal-profile-image {
    width: 120px;
    height: 120px;
  }
}
</style>
