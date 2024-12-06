<template>
  <h1>Calendriers Mensuels (Décembre 2024 - Décembre 2025)</h1>
  <div class="controls">
    <div class="custom-events-container">
      <h2>Gérer les événements personnalisés</h2>
      <form id="custom-event-form">
        <input type="date" id="custom-event-date" required />
        <input
          type="text"
          id="custom-event-description"
          placeholder="Description de l'événement"
          required
        />
        <select id="custom-event-frequency-type">
          <option value="weekly">Tous les X semaines</option>
          <option value="nth-month-day">Chaque X-ème jour du mois</option>
          <option value="nth-weekday">Chaque X-ème lundi, mardi...</option>
          <option value="last-day-of-month">Chaque dernier jour du mois</option>
          <option value="last-weekday">Chaque dernier lundi, mardi...</option>
        </select>
        <input
          type="number"
          id="custom-event-frequency"
          placeholder="Fréquence (en semaines, facultatif)"
          min="1"
        />
        <input
          type="tel"
          id="responsible1-phone"
          placeholder="WhatsApp Responsable 1 (facultatif)"
        />
        <input
          type="tel"
          id="responsible2-phone"
          placeholder="WhatsApp Responsable 2 (facultatif)"
        />
        <button type="button" id="add-custom-event">Ajouter</button>
      </form>
      <button id="notify-responsibles">Notifier les Responsables</button>
      <ul id="custom-events-list">
        <!-- Liste dynamique des événements -->
      </ul>
    </div>
    <div class="events-filter">
      <h2>Filtrer les événements</h2>
      <form id="event-filter-form">
        <label><input type="checkbox" name="eventType" value="holidays" checked /> Jours Fériés</label>
        <label><input type="checkbox" name="eventType" value="optimalDays" checked /> Jours à Poser</label>
        <label><input type="checkbox" name="eventType" value="worldDays" checked /> Journées Mondiales</label>
        <label><input type="checkbox" name="eventType" value="cameroonDays" checked /> Fêtes Camerounaises</label>
        <label><input type="checkbox" name="eventType" value="lyonDays" checked /> Fêtes Lyonnaises</label>
        <label><input type="checkbox" name="eventType" value="culturalDays" checked /> Journées Culturelles</label>
        <label><input type="checkbox" name="eventType" value="africanDays" checked /> Journées Africaines</label>
        <label><input type="checkbox" name="eventType" value="sportsDays" checked /> Compétitions Sportives</label>
        <label><input type="checkbox" name="eventType" value="userCustomDays" checked /> Événements Personnalisés</label>
        <button type="button" id="apply-filters">Appliquer</button>
      </form>
    </div>
    <button id="print-pdf">Imprimer le PDF</button>
    <button id="save-dates">Sauvegarder les Dates</button>
    <button id="load-dates">Charger les Dates</button>
    <input type="file" id="file-input" style="display: none" accept=".json" />
  </div>

  <div class="legend">
    <h2>Légende des Événements</h2>
    <ul>
      <li><span class="legend-color holiday"></span> Jours fériés : Noël, Nouvel An, Lundi de Pâques, etc.</li>
      <li><span class="legend-color optimal"></span> Jours optimaux (Ponts) : Pont après le 1er mai, 8 mai, etc.</li>
      <li><span class="legend-color world-day"></span> Journées Mondiales : Journée Mondiale de la Santé, Journée du Diabète, etc.</li>
      <li><span class="legend-color cameroon-day"></span> Journées Camerounaises : Fête de la Jeunesse, Fête Nationale, etc.</li>
      <li><span class="legend-color lyon-day"></span> Festivals Lyonnais : Nuits de Fourvière, Fête des Lumières, etc.</li>
      <li><span class="legend-color cultural-day"></span> Journées Culturelles : Journée de la Francophonie, Fête de la Musique, etc.</li>
      <li><span class="legend-color african-day"></span> Journées Africaines : Journée de l'Afrique, Journée de l'Éducation, etc.</li>
      <li><span class="legend-color sports-day"></span> Compétitions Sportives : Jeux Olympiques, CAN, Coupe du Monde, etc.</li>
      <li><span class="legend-color user-custom-day"></span> Jours de l'association</li>
    </ul>
  </div>

  <div class="calendar-container"></div>

  <section id="readme">
    <h2>README - Gestionnaire de Calendrier et Événements</h2>
    <p>
      Bienvenue dans l'application interactive de gestion de calendriers et d'événements. Ce projet permet de visualiser des calendriers mensuels, d'ajouter des événements personnalisés, de filtrer les événements par catégories et de gérer des récurrences complexes.
    </p>

    <h3>Fonctionnalités principales</h3>
    <ul>
      <li><strong>Affichage des calendriers :</strong> Calendriers mensuels de décembre 2024 à décembre 2025 avec des événements marqués par catégories.</li>
      <li><strong>Gestion des événements personnalisés :</strong> Ajoutez des événements uniques ou récurrents avec des options flexibles.</li>
      <li><strong>Types de récurrences :</strong>
        <ul>
          <li>Chaque X semaines.</li>
          <li>Chaque X-ème jour du mois.</li>
          <li>Chaque X-ème jour de la semaine (e.g., 2ᵉ lundi).</li>
          <li>Chaque dernier jour du mois.</li>
          <li>Chaque dernier lundi, mardi, etc. du mois.</li>
        </ul>
      </li>
      <li><strong>Filtres d'événements :</strong> Affichez uniquement les catégories d'événements qui vous intéressent.</li>
      <li><strong>Notifications WhatsApp :</strong> Envoyez des rappels automatiques aux responsables d'événements.</li>
      <li><strong>Exportation et importation :</strong> Sauvegardez ou chargez des événements via des fichiers JSON.</li>
      <li><strong>Impression PDF :</strong> Exportez les calendriers et événements sous forme de fichier PDF.</li>
    </ul>

    <h3>Instructions d'utilisation</h3>
    <ol>
      <li>Ouvrez le fichier dans un navigateur web.</li>
      <li>Utilisez les boutons et formulaires pour gérer les calendriers et événements :</li>
      <ul>
        <li><strong>Ajouter un événement :</strong> Entrez une date, une description et sélectionnez un type de récurrence (facultatif).</li>
        <li><strong>Notifier les responsables :</strong> Cliquez sur "Notifier les Responsables" pour envoyer des rappels via WhatsApp (si les contacts sont renseignés).</li>
        <li><strong>Appliquer des filtres :</strong> Sélectionnez ou désélectionnez des catégories pour afficher uniquement les événements pertinents.</li>
        <li><strong>Sauvegarder/Charger :</strong> Sauvegardez les données sous forme de fichier JSON ou chargez un fichier pour restaurer des événements précédents.</li>
        <li><strong>Imprimer en PDF :</strong> Cliquez sur "Imprimer le PDF" pour exporter les calendriers et événements.</li>
      </ul>
    </ol>

    <h3>Types d'événements pris en charge</h3>
    <ul>
      <li><strong>Jours fériés :</strong> Noël, Nouvel An, etc.</li>
      <li><strong>Jours à poser :</strong> Ponts et jours optimaux.</li>
      <li><strong>Journées mondiales :</strong> Journée mondiale de la santé, journée du diabète, etc.</li>
      <li><strong>Événements locaux :</strong> Fêtes lyonnaises, fêtes nationales camerounaises.</li>
      <li><strong>Événements sportifs :</strong> Jeux Olympiques, Coupe du Monde, etc.</li>
      <li><strong>Événements personnalisés :</strong> Ajoutez vos propres événements avec des options flexibles.</li>
    </ul>

    <h3>Notes importantes</h3>
    <ul>
      <li>Les événements récurrents sont calculés automatiquement selon les règles choisies.</li>
      <li>Les notifications WhatsApp nécessitent une connexion Internet et un compte WhatsApp actif.</li>
      <li>Les fichiers JSON doivent être correctement formatés pour être chargés sans erreur.</li>
    </ul>

    <h3>Contributions</h3>
    <p>
      Ce projet est open-source. N'hésitez pas à contribuer en proposant des améliorations ou en signalant des problèmes.
    </p>

    <h3>Contact</h3>
    <p>
      Pour toute question ou demande d'assistance, contactez l'administrateur via email ou WhatsApp.
    </p>
  </section>
</template>

<script>
const dayAbbreviations = ["Ln", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
let userCustomDays = {};

let holidays = {
  "2024-12-25": "<span class='white-text'>Noël</span>",
  "2025-01-01": "<span class='white-text'>Nouvel An</span>",
  "2025-04-21": "<span class='white-text'>Lundi de Pâques</span>",
  "2025-05-01": "<span class='white-text'>Fête du Travail</span>",
  "2025-05-08": "<span class='white-text'>Victoire 1945</span>",
  "2025-05-29": "<span class='white-text'>Ascension</span>",
  "2025-06-09": "<span class='white-text'>Lundi de Pentecôte</span>",
  "2025-07-14": "<span class='white-text'>Fête Nationale</span>",
  "2025-08-15": "<span class='white-text'>Assomption</span>",
  "2025-11-01": "<span class='white-text'>Toussaint</span>",
  "2025-11-11": "<span class='white-text'>Armistice 1918</span>",
  "2025-12-25": "<span class='white-text'>Noël</span>",
};

let optimalDays = {
  "2025-05-02": "<span class='white-text'>Pont après le 1er mai</span>",
  "2025-05-09": "<span class='white-text'>Pont après le 8 mai</span>",
  "2025-05-30": "<span class='white-text'>Pont après l'Ascension</span>",
  "2025-11-10": "<span class='white-text'>Pont avant l'Armistice</span>",
  "2024-12-26": "<span class='white-text'>Pont après Noël</span>",
  "2025-12-26": "<span class='white-text'>Pont après Noël</span>",
};

let worldDays = {
  "2024-12-01": "<span class='white-text'>Journée Mondiale de Lutte contre le SIDA</span>",
  "2025-02-04": "<span class='white-text'>Journée Mondiale contre le Cancer</span>",
  "2025-02-11": "<span class='white-text'>Journée Mondiale des Maladies Rares</span>",
  "2025-03-24": "<span class='white-text'>Journée Mondiale de la Tuberculose</span>",
  "2025-04-07": "<span class='white-text'>Journée Mondiale de la Santé</span>",
  "2025-05-17": "<span class='white-text'>Journée Mondiale de l’Hypertension</span>",
  "2025-05-31": "<span class='white-text'>Journée Mondiale sans Tabac</span>",
  "2025-06-14": "<span class='white-text'>Journée Mondiale des Donneurs de Sang</span>",
  "2025-07-28": "<span class='white-text'>Journée Mondiale contre l’Hépatite</span>",
  "2025-09-29": "<span class='white-text'>Journée Mondiale du Cœur</span>",
  "2025-10-10": "<span class='white-text'>Journée Mondiale de la Santé Mentale</span>",
  "2025-11-14": "<span class='white-text'>Journée Mondiale du Diabète</span>",
  "2025-12-01": "<span class='white-text'>Journée Mondiale de Lutte contre le SIDA</span>",
  "2025-01-20": "<span class='white-text'>Journée Mondiale du Bilinguisme</span>",
  "2025-03-14": "<span class='white-text'>Journée Mondiale du Commonwealth</span>",
  "2025-10-05": "<span class='white-text'>Journée Mondiale des Enseignants (UNESCO)</span>",
};

let cameroonDays = {
  "2025-05-20": "Fête Nationale du Cameroun",
  "2025-02-11": "Fête de la Jeunesse (Cameroun)",
};

let lyonDays = {
  "2025-09-12": "Festival Lumière (Lyon)",
  "2025-06-21": "Journée de la Musique (Lyon)",
  "2025-12-06": "Téléthon (France)",
  "2025-01-29": "Début du Festival Sport, Littérature et Cinéma",
  "2025-02-01": "Fin du Festival Sport, Littérature et Cinéma",
  "2025-02-08": "Début du Yggdrasil Festival",
  "2025-02-09": "Fin du Yggdrasil Festival",
  "2025-03-05": "Début du Festival Écrans Mixtes",
  "2025-03-13": "Fin du Festival Écrans Mixtes",
  "2025-03-14": "Début du Festival Les Chants de Mars",
  "2025-03-29": "Fin du Festival Les Chants de Mars",
  "2025-03-11": "Début du Festival Chaos Danse",
  "2025-04-04": "Fin du Festival Chaos Danse",
  "2025-04-05": "Début du Festival Quais du Polar",
  "2025-04-06": "Fin du Festival Quais du Polar",
  "2025-04-12": "Début du Lyon Bière Festival",
  "2025-04-13": "Fin du Lyon Bière Festival",
  "2025-04-18": "Début du Festival Reperkusound",
  "2025-04-20": "Fin du Festival Reperkusound",
  "2025-04-23": "Début du Concours International de Musique de Chambre de Lyon",
  "2025-04-26": "Fin du Concours International de Musique de Chambre de Lyon",
  "2025-04-30": "Jazz Day à Lyon",
  "2025-05-19": "Début du Littérature Live Festival",
  "2025-05-25": "Fin du Littérature Live Festival",
  "2025-05-28": "Début des Nuits Sonores",
  "2025-06-01": "Fin des Nuits Sonores",
  "2025-05-30": "Début des Rendez-vous aux Jardins",
  "2025-06-01": "Fin des Rendez-vous aux Jardins",
  "2025-06-26": "Début du Lyon Street Food Festival",
  "2025-06-29": "Fin du Lyon Street Food Festival",
  "2025-06-27": "Début du Festival Entre Rhône et Saône",
  "2025-06-29": "Fin du Festival Entre Rhône et Saône",
  "2025-05-29": "Début des Nuits de Fourvière",
  "2025-07-24": "Fin des Nuits de Fourvière",
  "2025-07-08": "Début de Tout l’Monde Dehors !",
  "2025-08-31": "Fin de Tout l’Monde Dehors !",
  "2025-10-10": "Début du Lyon Braderie Festival",
  "2025-10-12": "Fin du Lyon Braderie Festival",
  "2025-10-11": "Début du Peinture Fraîche Festival",
  "2025-10-20": "Fin du Peinture Fraîche Festival",
  "2025-11-20": "Début du Silk in Lyon - Festival de la Soie",
  "2025-11-23": "Fin du Silk in Lyon - Festival de la Soie",
  "2025-12-05": "Début de la Fête des Lumières",
  "2025-12-08": "Fin de la Fête des Lumières",
};

let africanDays = {
  "2025-01-24": "Journée Internationale de l'Éducation en Afrique",
  "2025-03-25": "Journée de Commémoration de l'Abolition de l'Esclavage (Afrique)",
  "2025-05-25": "Journée de l'Afrique",
  "2025-06-16": "Journée de l'Enfant Africain",
  "2025-09-30": "Journée de la Traduction en Afrique",
};

let culturalDays = {
  "2025-02-21": "Journée Internationale de la Langue Maternelle",
  "2025-03-20": "Journée Internationale de la Francophonie",
  "2025-04-23": "Journée Mondiale du Livre et du Droit d’Auteur",
  "2025-05-08": "Journée Internationale de la femme et de la famille",
  "2025-05-18": "Journée Internationale des Musées",
  "2025-06-21": "Fête de la Musique",
  "2025-09-08": "Journée Internationale de l’Alphabétisation",
  "2025-11-16": "Journée Internationale de la Tolérance",
  "2025-12-05": "Journée Internationale du Volontariat",
  "2025-11-20": "Journée Internationale de l’Enfant",
};

let sportsDays = {
  "2024-12-20": "Lancement des Jeux Olympiques de la Jeunesse (Dakar)",
  "2024-12-28": "Clôture des Jeux Olympiques de la Jeunesse (Dakar)",
  "2025-06-14": "Lancement de la Coupe du Monde Féminine (FIFA)",
  "2025-07-20": "Clôture de la Coupe du Monde Féminine (FIFA)",
  "2025-09-07": "Lancement de la Coupe du Monde de Rugby",
  "2025-10-20": "Clôture de la Coupe du Monde de Rugby",
  "2025-01-13": "Lancement de la CAN 2025",
  "2025-02-11": "Clôture de la CAN 2025",
  "2025-06-12": "Lancement de la Coupe d’Europe de Football",
  "2025-07-12": "Clôture de la Coupe d’Europe de Football",
  "2026-06-08": "Lancement de la Coupe du Monde de Football (FIFA)",
  "2026-07-08": "Clôture de la Coupe du Monde de Football (FIFA)",
  "2025-08-28": "Début de la Ligue des Champions de l'UEFA",
  "2025-11-11": "Finale de la Ligue des Champions de l'UEFA",
  "2025-09-10": "Début de la Ligue des Champions de la CAF",
  "2025-12-12": "Finale de la Ligue des Champions de la CAF",
};

const eventCategories = {
  holidays,
  optimalDays,
  worldDays,
  cameroonDays,
  lyonDays,
  culturalDays,
  africanDays,
  sportsDays,
  userCustomDays,
};

function calculateOccurrencesByMonth(startDate, frequencyType, frequencyValue) {
  const occurrences = [];
  const start = new Date(startDate);
  const year = start.getFullYear();

  for (let month = start.getMonth(); month <= 12; month++) {
    let date;

    if (frequencyType === "nth-month-day") {
      date = new Date(year, month, frequencyValue);
      if (date.getMonth() !== month) continue;
    } else if (frequencyType === "nth-weekday") {
      const weekday = start.getDay();
      date = findNthWeekday(year, month, weekday, frequencyValue);
    } else if (frequencyType === "last-day-of-month") {
      date = new Date(year, month + 1, 0);
    } else if (frequencyType === "last-weekday") {
      const weekday = start.getDay();
      date = findLastWeekday(year, month, weekday);
    }

    if (date) {
      occurrences.push(date.toISOString().split("T")[0]);
    }
  }

  return occurrences;
}

function findLastWeekday(year, month, weekday) {
  for (let day = 31; day >= 1; day--) {
    const date 
 = new Date(year, month, day);
    if (date.getMonth() !== month) continue;
    if (date.getDay() === weekday) {
      return date;
    }
  }
  return null;
}

function findNthWeekday(year, month, weekday, nth) {
  let count = 0;
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break;
    if (date.getDay() === weekday) {
      count++;
      if (count === nth) return date;
    }
  }
  return null;
}

function notifyResponsibles() {
  const today = new Date();
  const dayInMillis = 24 * 60 * 60 * 1000;

  for (const [date, details] of Object.entries(userCustomDays)) {
    const eventDate = new Date(date);
    const diffDays = Math.ceil((eventDate - today) / dayInMillis);

    let message = null;
    if (diffDays === 30) {
      message = `Bonjour, votre événement "${details.description}" est prévu dans 30 jours (${date}). Commencez à vous organiser !`;
    } else if (diffDays === 7) {
      message = `Bonjour, votre événement "${details.description}" est prévu dans 7 jours (${date}). Tout est prêt ?`;
    } else if (diffDays === 1) {
      message = `Bonjour, votre événement "${details.description}" est prévu demain (${date}). Êtes-vous prêt(e) ?`;
    }

    if (message) {
      if (details.responsible1)
        sendWhatsAppNotification(details.responsible1, message);
      if (details.responsible2)
        sendWhatsAppNotification(details.responsible2, message);
    }
  }
}

function sendWhatsAppNotification(phone, message) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

$("#notify-responsibles").on("click", function () {
  notifyResponsibles();
});

function calculateOccurrencesByWeeks(startDate, frequencyInWeeks) {
  const occurrences = [];
  const start = new Date(startDate);
  const dayInMillis = 7 * 24 * 60 * 60 * 1000;
  const maxOccurrences = 57;

  for (let i = 0; i < maxOccurrences; i += parseInt(frequencyInWeeks, 10)) {
    const nextDate = new Date(start.getTime() + i * dayInMillis);
    occurrences.push(nextDate.toISOString().split("T")[0]);
  }
  return occurrences;
}

function updateCustomEventsList() {
  const list = $("#custom-events-list");
  list.empty();

  Object.entries(userCustomDays).forEach(([date, details]) => {
    const description =
      typeof details === "object" ? details.description : details;

    const listItem = $(`
          <li>
              <span>${date} : ${description}</span>
              <button data-date="${date}" class="delete-custom-event">Supprimer</button>
          </li>
        `);
    list.append(listItem);
  });
}

function addCustomEvent(
  date,
  description,
  frequencyType,
  frequencyValue,
  responsible1,
  responsible2
) {
  const occurrences =
    frequencyType === "weekly"
      ? calculateOccurrencesByWeeks(date, frequencyValue)
      : calculateOccurrencesByMonth(date, frequencyType, frequencyValue);

  occurrences.forEach((occurrence) => {
    userCustomDays[occurrence] = {
      description: `${description} (toutes les ${frequencyValue || 1} ${
        frequencyType === "weekly" ? "semaine(s)" : "mois"
      })`,
      frequencyType: frequencyType || null,
      frequencyValue: frequencyValue || 1,
      responsible1: responsible1 || null,
      responsible2: responsible2 || null,
    };
  });

  updateCustomEventsList();
  generateCalendars();
}

function removeCustomEvent(date) {
  delete userCustomDays[date];
  updateCustomEventsList();
  generateCalendars();
}

function getTooltip(date) {
  let tooltipe = [];

  for (const [category, events] of Object.entries(eventCategories)) {
    if (events[date]) {
      const description =
        typeof events[date] === "object"
          ? events[date].description
          : events[date];
      tooltipe.push(description);
    }
  }

  return tooltipe.length > 0 ? tooltipe.join(" | ") : null;
}

function createCalendar(year, month) {
  const container = $(".calendar-container");
  const monthName = new Date(year, month - 1).toLocaleString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();

  const calendar = $(`<div class="calendar"></div>`);
  const header = $(`<div class="calendar-header">${monthName}</div>`);
  const dayNames = $('<div class="day-names"></div>').append(
    dayAbbreviations.map((day) => `<div>${day}</div>`)
  );

  const days = $('<div class="days"></div>');
  let currentDay = 1;

  for (let i = 1; i < firstDay.getDay(); i++) {
    days.append("<div></div>");
  }

  while (currentDay <= daysInMonth) {
    const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(
      currentDay
    ).padStart(2, "0")}`;
    let dayClasses = [];
    let tooltipe = getTooltip(dateStr);

    if (holidays[dateStr]) dayClasses.push("holiday");
    if (optimalDays[dateStr]) dayClasses.push("optimal");
    if (worldDays[dateStr]) dayClasses.push("world-day");
    if (cameroonDays[dateStr]) dayClasses.push("cameroon-day");
    if (lyonDays[dateStr]) dayClasses.push("lyon-day");
    if (africanDays[dateStr]) dayClasses.push("african-day");
    if (culturalDays[dateStr]) dayClasses.push("cultural-day");
    if (sportsDays[dateStr]) dayClasses.push("sports-day");
    if (userCustomDays[dateStr]) dayClasses.push("user-custom-day");

    const dayElement = $(
      `<div class="${dayClasses.join(" ")}">${currentDay}</div>`
    );
    if (tooltipe) {
      dayElement.append(`<div class="tooltipe">${tooltipe}</div>`);
    }
    days.append(dayElement);
    currentDay++;
  }

  calendar.append(header, dayNames, days);
  container.append(calendar);
}

function generateCalendars() {
  $(".calendar-container").empty();
  createCalendar(2024, 12);
  for (let i = 1; i <= 12; i++) {
    createCalendar(2025, i);
  }
}

function generateEventsTable() {
  const events = [];
  for (const [date, description] of Object.entries(holidays)) {
    events.push({ date, type: "Jour Férié", description });
  }
  for (const [date, description] of Object.entries(optimalDays)) {
    events.push({ date, type: "Jour à Poser", description });
  }
  for (const [date, description] of Object.entries(worldDays)) {
    events.push({ date, type: "Journée Mondiale", description });
  }
  for (const [date, description] of Object.entries(cameroonDays)) {
    events.push({ date, type: "Fête Nationale Camerounaise", description });
  }
  for (const [date, description] of Object.entries(lyonDays)) {
    events.push({ date, type: "Fête Lyonnaise", description });
  }
  for (const [date, description] of Object.entries(culturalDays)) {
    events.push({ date, type: "Journée culturelle", description });
  }
  for (const [date, description] of Object.entries(africanDays)) {
    events.push({ date, type: "Journée africaine", description });
  }
  for (const [date, description] of Object.entries(sportsDays)) {
    events.push({ date, type: "Événement sportif", description });
  }
  for (const [date, description] of Object.entries(userCustomDays)) {
    events.push({ date, type: "Événement personnalisé", description });
  }
  return events;
}

const legend = [
  { color: "yellow", label: "Jours Fériés" },
  { color: "red", label: "Jours à Poser" },
  { color: "blue", label: "Journées Mondiales" },
  { color: "green", label: "Fêtes Nationales Camerounaises" },
  { color: "orange", label: "Fêtes Lyonnaises" },
  { color: "brown", label: "Journées Culturelles" },
  { color: "purple", label: "Journées Afr icaines" },
  { color: "darkblue", label: "Compétitions Sportives" },
  { color: "hotpink", label: "Événements de l'association" },
];

const originalEvents = {
  holidays: { ...holidays },
  optimalDays: { ...optimalDays },
  worldDays: { ...worldDays },
  cameroonDays: { ...cameroonDays },
  lyonDays: { ...lyonDays },
  culturalDays: { ...culturalDays },
  africanDays: { ...africanDays },
  sportsDays: { ...sportsDays },
  userCustomDays: { ...userCustomDays },
};

let selectedEventTypes = [
  "holidays",
  "optimalDays",
  "worldDays",
  "cameroonDays",
  "lyonDays",
  "culturalDays",
  "africanDays",
  "sportsDays",
  "userCustomDays",
];

function filterEvents(eventTypes) {
  const filtered = {
    holidays: {},
    optimalDays: {},
    worldDays: {},
    cameroonDays: {},
    lyonDays: {},
    culturalDays: {},
    africanDays: {},
    sportsDays: {},
    userCustomDays: {},
  };

  eventTypes.forEach((type) => {
    filtered[type] = { ...originalEvents[type] };
  });

  return filtered;
}

function updateCalendar() {
  const filteredEvents = filterEvents(selectedEventTypes);

  holidays = filteredEvents.holidays;
  optimalDays = filteredEvents.optimalDays;
  worldDays = filteredEvents.worldDays;
  cameroonDays = filteredEvents.cameroonDays;
  lyonDays = filteredEvents.lyonDays;
  culturalDays = filteredEvents.culturalDays;
  africanDays = filteredEvents.africanDays;
  sportsDays = filteredEvents.sportsDays;
  userCustomDays = filteredEvents.userCustomDays;

  generateCalendars();
}

$("#apply-filters").on("click", function () {
  selectedEventTypes = $("#event-filter-form input:checked")
    .map(function () {
      return $(this).val();
    })
    .get();

  updateCalendar();
});

$(document).ready(function () {
  $("#add-custom-event").on("click", function () {
    const date = $("#custom-event-date").val();
    const description = $("#custom-event-description").val();
    const frequencyType = $("#custom-event-frequency-type").val();
    const frequencyValue = $("#custom-event-frequency").val();
    const responsible1 = $("#responsible1-phone").val();
    const responsible2 = $("#responsible2-phone").val();
	
	  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
	  if (responsible1) {
		if (!phoneRegex.test(responsible1)) {
		  alert("Veuillez entrer des numéros de téléphone valides.");
		  return;
		}
	  }
	  
	  if (responsible2) {
		if (!phoneRegex.test(responsible2)) {
		  alert("Veuillez entrer des numéros de téléphone valides.");
		  return;
		}
	  }

    if (date && description && frequencyType) {
      addCustomEvent(
        date,
        description,
        frequencyType,
        frequencyValue,
        responsible1,
        responsible2
      );
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  });

  $("#custom-events-list").on("click", ".delete-custom-event", function () {
    const date = $(this).data("date");
    removeCustomEvent(date);
  });

  $("#save-dates").on("click", function () {
    const data = {
      holidays,
      optimalDays,
      worldDays,
      cameroonDays,
      lyonDays,
      culturalDays,
      africanDays,
      sportsDays,
      userCustomDays: {},
    };

    for (const [date, details] of Object.entries(userCustomDays)) {
      const groupKey = details.description;

      if (!data.userCustomDays[groupKey]) {
        data.userCustomDays[groupKey] = {
          description: details.description,
          frequencyType: details.frequencyType || null,
          frequencyValue: details.frequencyValue || 1,
          startDate: date,
          occurrences: [],
          responsible1: details.responsible1 || null,
          responsible2: details.responsible2 || null,
        };
      }

      data.userCustomDays[groupKey].occurrences.push(date);
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dates.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  $("#load-dates").on("click", function () {
    $("#file-input").click();
  });

  function validateJson(data) {
    const requiredKeys = [
      "holidays",
      "optimalDays",
      "worldDays",
      "cameroonDays",
      "lyonDays",
      "culturalDays",
      "africanDays",
      "sportsDays",
      "userCustomDays",
    ];
    return requiredKeys.every((key) => key in data);
  }

  $("#file-input"). on("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const data = JSON.parse(e.target.result);

          if (validateJson(data)) {
            holidays = data.holidays || {};
            optimalDays = data.optimalDays || {};
            worldDays = data.worldDays || {};
            cameroonDays = data.cameroonDays || {};
            lyonDays = data.lyonDays || {};
            culturalDays = data.culturalDays || {};
            africanDays = data.africanDays || {};
            sportsDays = data.sportsDays || {};

            userCustomDays = {};
            for (const [groupKey, groupDetails] of Object.entries(
              data.userCustomDays
            )) {
              for (const date of groupDetails.occurrences) {
                userCustomDays[date] = {
                  description: groupDetails.description,
                  frequencyType: groupDetails.frequencyType,
                  frequencyValue: groupDetails.frequencyValue,
                  responsible1: groupDetails.responsible1,
                  responsible2: groupDetails.responsible2,
                };
              }
            }

            generateCalendars();
            updateCustomEventsList();
          } else {
            throw new Error("Invalid JSON format.");
          }
        } catch (error) {
          alert("Error loading file: " + error.message);
        }
      };
      reader.readAsText(file);
    }
  });

  updateCustomEventsList();
  generateCalendars();
});

$("#print-pdf").on("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 10;

  doc.setFontSize(16);
  doc.text("Calendriers et Événements Importants (2024-2025)", 10, y);

  y += 10;
  doc.setFontSize(12);
  doc.text("Légende :", 10, y);
  legend.forEach((item) => {
    if (y > 280) {
      doc.addPage();
      y = 10;
    }
    doc.setFillColor(item.color);
    doc.rect(10, y + 5, 5, 5, "F");
    doc.text(`${item.label}`, 20, y + 10);
    y += 10;
  });

  y += 10;
  doc.text("Liste des Événements :", 10, y);
  y += 10;
  const events = generateEventsTable();
  events.forEach((event) => {
    if (y > 280) {
      doc.addPage();
      y = 10;
    }
    doc.text(`${event.date} - ${event.type}: ${event.description}`, 10, y);
    y += 7;
  });

  y += 10;
  html2canvas(document.querySelector(".calendar-container"), {
  scale: 0.8
})
  .then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    if (y + pdfHeight > 280) {
      doc.addPage();
      y = 10;
    }
    doc.addImage(imgData, "PNG", 0, y, pdfWidth, pdfHeight);
    doc.save("Calendriers_Evenements_2024_2025.pdf");
  });
});
</script>
<style>
#readme {
  margin: 30px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

#readme h2 {
  text-align: center;
  font-size: 24px;
  color: #444;
  margin-bottom: 20px;
}
.white-text {
  color: white; /* Changez la couleur selon vos besoins */
}
#readme h3 {
  font-size: 18px;
  margin-top: 20px;
  color: #555;
}

#readme p {
  margin: 10px 0;
}

#readme ul {
  list-style-type: none;
  margin-left: 20px;
}

#readme ol {
  list-style-type: none;
  margin-left: 20px;
}

#readme ul ul,
#readme ol ul {
  list-style-type: circle;
  margin-left: 20px;
}

#readme li {
  margin: 5px 0 }

#readme a {
  color: #0066cc;
  text-decoration: none;
}

#readme a:hover {
  text-decoration: underline;
}

body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

.calendar-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.calendar {
  border: 1px solid #ccc;
  width: 300px;
  margin-bottom: 20px;
}

.calendar-header {
  text-align: center;
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 10px;
}

.day-names,
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
}

.day-names div,
.days div {
  padding: 10px;
  position: relative;
}

.holiday {
  background-color: yellow;
}

.optimal {
  background-color: red;
  color: white;
}

.world-day {
  background-color: blue;
  color: white;
}

.cameroon-day {
  background-color: green;
  color: white;
}

.lyon-day {
  background-color: orange;
  color: white;
}

.african-day {
  background-color: purple;
  color: white;
}

.cultural-day {
  background-color: brown;
  color: white;
}

.sports-day {
  background-color: darkblue;
  color: white;
}

.user-custom-day {
  background-color: hotpink;
  color: white;
}

.hotpink {
  background-color: hotpink;
}
.darkblue {
  background-color: darkblue;
}

.tooltipe {
  display: none;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
}

.days div:hover .tooltipe {
  display: block;
}

.controls {
  margin: 20px;
}

.controls button {
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
}

.legend {
  margin-bottom: 20px;
  text-align: left;
}

.legend h2 {
  text-align: center;
}

.legend ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.legend li {
  margin: 5px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.legend-color {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .calendar-container {
    flex-direction: column;
    align-items: center;
  }

  .calendar {
    width: 100%;
    max-width: 300px;
  }
  
  #custom-event-form input,
  #custom-event-form select,
  #custom-event-form button {
    flex: 1 1 100%;
  }

  #notify-responsibles {
    font-size: 14px;
  }
}

#event-filter-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

#event-filter-form label {
  display: flex;
  align-items: center;
  gap: 5px;
}

#apply-filters {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
}

.custom-events-container {
  margin: 30px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-events-container h2 {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

#custom-event-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
}

#custom-event-form input,
#custom-event-form select,
#custom-event-form button {
  flex: 1 1 calc(50% - 10px);
  padding : 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#custom-event-form select {
  cursor: pointer;
}

#custom-event-form input:focus,
#custom-event-form select:focus,
#custom-event-form button:focus {
  outline: none;
}

#custom-event-form button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#custom-event-form button:hover {
  background-color: #0056b3;
}

#notify-responsibles:hover {
  background-color: #218838;
}

#custom-events-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#custom-events-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

#custom-events-list li button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#custom-events-list li button:hover {
  background-color: #c82333;
}


</style>