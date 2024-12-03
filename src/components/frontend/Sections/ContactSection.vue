<template>
  <section id="contact" class="contact-section">
    <div class="container section-title" v-aos="fade - up">
      <h2>Contact</h2>
      <div class="title-underline d-flex justify-content-center">
        <div class="green-line me-2 line-animated"></div>
        <div class="red-line me-2 line-animated"></div>
        <div class="yellow-line line-animated"></div>
      </div>
      <p>
        Association réunissant les étudiants camerounais habitants la ville de
        Lyon. Organisation à but non lucratif, ayant pour but principal de
        rassembler les jeunes camerounais de la ville de Lyon (France).
      </p>
    </div>

    <div class="container" v-aos="fade - up" v-aos-delay="100">
      <div class="map-container" v-aos="fade - up" v-aos-delay="200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.181593370107!2d4.835659315676267!3d45.74867967910044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e4e0c0d4f2af%3A0x9e0f1a0b98d9c0b3!2s90%20Rue%20de%20Marseille%2C%2069007%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1631806971230!5m2!1sen!2sfr"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="contact-grid">
        <div class="info-column">
          <div
            v-for="(item, index) in contactInfo"
            :key="index"
            class="info-card"
            v-aos="fade - right"
            v-aos-delay="300 + index * 100"
          >
            <div class="icon-wrapper">
              <i :class="item.icon"></i>
            </div>
            <div class="info-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.value }}</p>
            </div>
          </div>
        </div>

        <form
          @submit.prevent="handleSubmit"
          class="contact-form"
          v-aos="fade - up"
          v-aos-delay="200"
        >
          <div class="form-grid">
            <div class="input-group">
              <input
                v-model="formData.name"
                type="text"
                placeholder="Votre Nom"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
            <div class="input-group">
              <input
                v-model="formData.email"
                type="email"
                placeholder="Votre Email"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
            <div class="input-group full-width">
              <input
                v-model="formData.subject"
                type="text"
                placeholder="Sujet"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
            <div class="input-group full-width">
              <textarea
                v-model="formData.message"
                rows="6"
                placeholder="Message"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              ></textarea>
            </div>
          </div>

          <div class="form-status">
            <div v-if="loading" class="loading">Chargement...</div>
            <div v-if="error" class="error">{{ error }}</div>
            <div v-if="success" class="success">
              Message envoyé avec succès !
            </div>
          </div>

          <button type="submit" class="submit-button" :disabled="loading">
            <span>Envoyer le Message</span>
            <i class="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { addContact } from "@/reponses/contact";

const contactInfo = [
  {
    icon: "bi bi-geo-alt",
    title: "Adresse",
    value: "90 Rue de Marseille, 69007 Lyon, France",
  },
  {
    icon: "bi bi-telephone",
    title: "Nous Appeler",
    value: "+33 6 99 69 00 52",
  },
  {
    icon: "bi bi-envelope",
    title: "Nous Écrire",
    value: "aejclyoncontact(at)gmail.com",
  },
];

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const error = ref("");
const success = ref(false);

const handleFocus = (e) => {
  e.target.parentElement.classList.add("focused");
};

const handleBlur = (e) => {
  if (!e.target.value) {
    e.target.parentElement.classList.remove("focused");
  }
};

const handleSubmit = async () => {
  // Validation de base des champs du formulaire
  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    error.value = "Veuillez remplir tous les champs";
    return;
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    error.value = "Veuillez entrer une adresse email valide";
    return;
  }

  loading.value = true;
  error.value = "";
  success.value = false;

  try {
    // Ajout du contact dans localStorage
    addContact({
      ...formData,
      ipAddress: await fetchIPAddress(), // Optionnel : récupérer l'adresse IP
    });

    success.value = true;
    // Réinitialisation du formulaire
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
  } catch (err) {
    error.value = "Échec de l'envoi du message. Veuillez réessayer.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

// Fonction optionnelle pour récupérer l'adresse IP
const fetchIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn("Impossible de récupérer l'adresse IP");
    return null;
  }
};
</script>

<style scoped>
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

.contact-section {
  padding: 80px 0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url("/assets/bg-pattern.png");
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 20px;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
}

.map-container {
  margin-bottom: 40px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
  width: 100%;
  height: 400px;
  border: none;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.info-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper i {
  color: white;
  font-size: 1.5rem;
}

.info-content h3 {
  color: #28a745;
  margin-bottom: 5px;
  font-size: 1.2rem;
}

/* .contact-form {
  background: white padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
} */

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.input-group {
  position: relative;
}

.full-width {
  grid-column: 1 / -1;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);
}

.form-status {
  margin: 20px 0;
  text-align: center;
  min-height: 24px;
}

.loading,
.error,
.success {
  padding: 10px;
  border-radius: 5px;
  animation: fadeIn 0.3s ease;
}

.loading {
  background: #f8f9fa;
}

.error {
  background: #fee;
  color: #dc3545;
}

.success {
  background: #e8f5e9;
  color: #28a745;
}

.submit-button {
  width: 100%;
  padding: 15px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background: #218838;
  transform: translateY(-2px);
}

.submit-button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[v-aos] {
  transition-duration: 1000ms;
}
</style>
