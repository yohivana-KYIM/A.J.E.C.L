<template>
  <br />
  <br />
  <br />

  <div class="container admin-contact-list mt-5">
    <div class="card shadow-lg">
      <div
        class="card-header bg-success text-white d-flex flex-wrap justify-content-between align-items-center"
      >
        <h2 class="mb-0 me-2">
          <i class="bi bi-envelope-paper me-2"></i>Historique des Contacts
        </h2>
        <div class="btn-group mt-2 mt-md-0">
          <button
            @click="clearContacts"
            class="btn btn-danger btn-sm"
            :disabled="contacts.length === 0"
          >
            <i class="bi bi-trash me-1"></i>Tout Effacer
          </button>
          <button
            @click="exportContacts"
            class="btn btn-outline-light btn-sm ms-2"
            :disabled="contacts.length === 0"
          >
            <i class="bi bi-download me-1"></i>Exporter
          </button>
        </div>
      </div>

      <div class="card-body">
        <div v-if="contacts.length === 0" class="alert alert-info text-center">
          <i class="bi bi-inbox me-2"></i>Aucune soumission de contact pour le
          moment
        </div>

        <div v-else class="table-responsive-xl">
          <table class="table table-striped table-hover">
            <thead class="table-success">
              <tr>
                <th class="d-none d-md-table-cell">Nom</th>
                <th class="d-none d-lg-table-cell">Email</th>
                <th>Sujet</th>
                <th class="d-none d-md-table-cell">Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(contact, index) in paginatedContacts" :key="index">
                <td class="d-none d-md-table-cell">{{ contact.name }}</td>
                <td class="d-none d-lg-table-cell">{{ contact.email }}</td>
                <td>
                  <div class="d-md-none">
                    <strong>{{ contact.name }}</strong
                    ><br />
                    {{ truncateText(contact.subject) }}
                  </div>
                  <div class="d-none d-md-block">
                    {{ truncateText(contact.subject) }}
                  </div>
                </td>
                <td class="d-none d-md-table-cell">
                  {{ formatDate(contact.timestamp) }}
                </td>
                <td>
                  <button
                    @click="viewDetails(contact)"
                    class="btn btn-success btn-sm"
                  >
                    <i class="bi bi-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <nav aria-label="Page navigation" class="mt-3">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="changePage(currentPage - 1)">
                  Précédent
                </button>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
              >
                <button class="page-link" @click="changePage(page)">
                  {{ page }}
                </button>
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <button class="page-link" @click="changePage(currentPage + 1)">
                  Suivant
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Modal pour les détails du contact -->
    <div
      class="modal fade"
      id="contactDetailsModal"
      tabindex="-1"
      aria-labelledby="contactDetailsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" v-if="selectedContact">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title" id="contactDetailsModalLabel">
              Détails du Contact
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Nom:</strong> {{ selectedContact.name }}</p>
            <p><strong>Email:</strong> {{ selectedContact.email }}</p>
            <p><strong>Sujet:</strong> {{ selectedContact.subject }}</p>
            <p><strong>Message:</strong> {{ selectedContact.message }}</p>
            <p>
              <strong>Date:</strong>
              {{ formatFullDate(selectedContact.timestamp) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getContacts } from "@/reponses/contact";

// États réactifs
const contacts = ref([]);
const selectedContact = ref(null);
const currentPage = ref(1);
const itemsPerPage = ref(10);

// Initialisation des contacts
onMounted(() => {
  contacts.value = getContacts().sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
});

// Pagination
const paginatedContacts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return contacts.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(contacts.value.length / itemsPerPage.value)
);

// Méthodes utilitaires
const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const viewDetails = (contact) => {
  selectedContact.value = contact;
  // Utilisez Bootstrap Modal
  const modal = new bootstrap.Modal(
    document.getElementById("contactDetailsModal")
  );
  modal.show();
};

const clearContacts = () => {
  if (confirm("Voulez-vous vraiment supprimer tous les contacts ?")) {
    localStorage.removeItem("contacts");
    contacts.value = [];
  }
};

const exportContacts = () => {
  const csvContent = contacts.value
    .map(
      (contact) =>
        `${contact.name},${contact.email},${contact.subject},${contact.message},${contact.timestamp}`
    )
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "contacts_export.csv");
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const truncateText = (text, length = 30) =>
  text.length > length ? text.substring(0, length) + "..." : text;

const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const formatFullDate = (timestamp) =>
  new Date(timestamp).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
</script>

<style scoped>
.admin-contact-list {
  max-width: 1200px;
  width: 100%;
}

.table td {
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

@media (max-width: 768px) {
  .btn-group {
    flex-direction: column;
    width: 100%;
  }

  .btn-group > .btn {
    margin: 0.25rem 0;
    width: 100%;
  }
}
</style>
