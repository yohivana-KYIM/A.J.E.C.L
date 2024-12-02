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
        {
          name: "Fabliola Stediane MEKOUO",
          biography:
            "Ingénieure QHSE en alternance & Membre active de l'AEJC. Nouvelle recrue de l'AEJC en 2024, Fabliola Stediane MEKOUO s'est rapidement imposée comme un pilier actif et créatif de l'association. Elle a joué un rôle clé au sein des commissions cuisine et artistique lors de la soirée culturelle, marquant les esprits par son dynamisme et son implication. Assidue à toutes les réunions importantes, elle a également été une force de proposition déterminante pour une organisation des festivités du 20 mai, fête nationale camerounaise en 2025. Son engagement et son talent ont été reconnus lors de la soirée culturelle du 16 novembre 2024, où elle a remporté le prestigieux Prix Yann, célébrant sa contribution exceptionnelle à la vie associative. En parallèle, Fabliola poursuit une carrière prometteuse en tant qu'ingénieure QHSE chez EKIUM et prépare un Master QSE au CESI.",
          isHovered: false,
        },
        {
          name: "Joséphine Brenda Megnegue Tayo",
          biography:
            "Une jeune femme ambitieuse, alliant entrepreneuriat, élégance et expertise. Spécialisée dans la coiffure et l'esthétique à domicile, elle propose des services sur mesure, combinant son talent artistique et son souci du détail pour offrir une expérience unique à ses clientes. Lauréate du titre de Miss Défilé Traditionnel lors de la soirée culturelle 2024 organisée par son association, Joséphine incarne parfaitement la fusion entre tradition et modernité. Ce titre reflète son charisme et sa capacité à valoriser l'héritage culturel à travers son style et sa personnalité. En parallèle, elle excelle dans le domaine du QHSE (Sécurité, Qualité, Hygiène, Environnement), enrichissant son parcours académique et professionnel grâce à des expériences variées dans la gestion des risques et des normes. Résidant à Reims, elle est le parfait exemple d'une femme déterminée et polyvalente, poursuivant l'excellence dans tous les aspects de sa vie.",
          isHovered: false,
        },
        {
          name: "Damaris Arlette Nya Nana",
          biography:
            "Une communicatrice polyvalente, artiste musicienne et coiffeuse à domicile. Forte de 4 ans d'expérience en communication interne, digitale et audiovisuelle, elle allie créativité et sens de l'adaptation pour innover dans ses projets. Passionnée de musique, elle écrit et interprète ses propres compositions, captivant son public par son talent artistique. En parallèle, elle offre des services de coiffure personnalisés à domicile, mettant son savoir-faire au service de la beauté et du bien-être de ses clients. Damaris incarne un équilibre unique entre professionnalisme, créativité et engagement envers les autres.",
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
