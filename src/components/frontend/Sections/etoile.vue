<template>
  <section class="entrepreneurs-gallery section bg-light py-5">
    <div class="container">
      <!-- Section Title -->
      <div class="section-title text-center mb-5" data-aos="fade-up">
        <h2 class="mb-3">Nos étoiles montantes</h2>
        <div class="title-underline d-flex justify-content-center">
          <div class="green-line me-2 line-animated"></div>
          <div class="red-line me-2 line-animated"></div>
          <div class="yellow-line line-animated"></div>
        </div>
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
  name: "Etoile",
  data() {
    return {
      entrepreneurs: [
        {
          name: "Fabliola Stediane MEKOUO",
          biography:
            "Ingénieure QHSE en alternance & Membre active de l'AEJC\n\nNouvelle recrue de l'AEJC en 2024, Fabliola Stediane MEKOUO s'est rapidement imposée comme un pilier actif et créatif de l'association. Elle a joué un rôle clé au sein des commissions cuisine et artistique lors de la soirée culturelle, marquant les esprits par son dynamisme et son implication. Assidue à toutes les réunions importantes, elle a également été une force de proposition déterminante pour une organisation des festivités du 20 mai, fête nationale camerounaise en 2025.\n\nSon engagement et son talent ont été reconnus lors de la soirée culturelle du 16 novembre 2024, où elle a remporté le prestigieux Prix Yann, célébrant sa contribution exceptionnelle à la vie associative.\n\nEn parallèle, Fabliola poursuit une carrière prometteuse en tant qu’ingénieure QHSE chez EKIUM et prépare un Master QSE au CESI.",
          isHovered: false,
        },
        {
          name: "Serge Onana",
          biography:
            "Administrateur système chez Fiducial, Serge Onana a récemment rejoint l’AEJC et n’a pas tardé à devenir membre actif. Discret et sobre, il contribue avec intelligence et générosité, tant sur le plan intellectuel que financier, au développement de l’association. Reconnu pour son sens critique, son professionnalisme et son style élégant, Serge s’impose rapidement comme une étoile montante au sein de l’AEJC. Il est le vice-réalisateur du sketch sur la dot, présenté lors de la soirée culturelle 2024, et occupe également le rôle de chargé de communication de l’association sur Instagram.",
          isHovered: false,
        },
        {
          name: "Nemangou Arthur",
          biography:
            "En pleine préparation de notre grande soirée culturelle, Arthur s’est rapidement distingué par son engagement, sa créativité et son expertise.\n\nActuellement en Mastère en Intelligence Artificielle et Management à l’IA School à Lyon , il apporte avec lui une riche expérience associative acquise au Cameroun, notamment dans le domaine des arts visuels, du développement web, et de la gestion technique. Polyvalent et stratège, il a été un pilier essentiel dans l’organisation de notre événement, prenant également le rôle de DJ pour cette soirée.\n\nArthur incarne l’alliance parfaite entre innovation et action. Qu’il s’agisse de gestion technique, de graphisme ou encore d’animation, il excelle par sa capacité à comprendre les besoins et à apporter des solutions concrètes.\n\nNous sommes fiers de l’accueillir parmi nous et impatients de voir l’impact qu’il continuera d’avoir dans notre communauté. Un grand merci à toi, Arthur, pour ta contribution précieuse et ton dynamisme contagieux. 🌟🎶",
          isHovered: false,
        },
        {
          name: "Damaris Arlette Nya Nana",
          biography:
            "Étoile montante de l'association, Damaris Arlette Nya Nana est une communicatrice polyvalente, artiste musicienne et coiffeuse à domicile. Forte de 4 ans d'expérience en communication interne, digitale et audiovisuelle, elle se distingue par sa créativité et sa capacité à innover dans chacun de ses projets.\n\nPassionnée par la musique, Damaris est également une chanteuse à la tessiture riche et une auteure-compositrice talentueuse. Ses interprétations, portées par une maîtrise exceptionnelle de la modulation et du vibrato, séduisent et captivent son auditoire. Pressentie pour être l'impresario de la prochaine soirée culturelle, elle incarne à la fois éloquence, talent artistique et engagement, tout en offrant un service de coiffure à domicile qui allie soin et esthétisme.",
          isHovered: false,
        },
        {
          name: "Joséphine Brenda Megnegue Tayo",
          biography:
            "Étoile montante de l'association, Joséphine Brenda Megnegue Tayo est une jeune femme ambitieuse et talentueuse, incarnant élégance, charisme et expertise. Spécialisée dans la coiffure et l’esthétique à domicile, elle se distingue par son sens artistique et son souci du détail, offrant à ses clientes des services sur mesure et une expérience unique.\n\nLors de la soirée culturelle 2024 de l'association, elle a marqué les esprits en jouant le rôle de sosie de la fiancée dans un sketch, captivant le public par son charisme et sa finesse d’interprétation. Ce rôle, mêlant humour et subtilité, a révélé sa capacité à s'investir avec passion et authenticité, tout en démontrant un sens aigu de la collaboration et de l’organisation.\n\nAvec son dynamisme et son sens des responsabilités, Joséphine est pressentie pour jouer un rôle clé dans l'organisation de la prochaine soirée culturelle. Son caractère déterminé et sa capacité à fédérer les autres en font une candidate idéale pour superviser la coordination des équipes ou l'élaboration du programme artistique. Résidant à Lyon, elle incarne une femme polyvalente, créative et inspirante, poursuivant l’excellence dans tout ce qu’elle entreprend.",
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
/* Styles pour la galerie */
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
/* Styles pour le modal */
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
.bio-modal-body {
  padding: 20px;
}
/* Responsiveness */
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
</style>
