// src/reponses/contact.js
const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

export function addContact(contactData) {
  contacts.push({
    ...contactData,
    timestamp: new Date().toISOString()
  });
  
  // Save to localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));
  
  return contacts;
}

export function getContacts() {
  return contacts;
}

export default contacts;