<template>
  <section class="contact-list">
    <h2>Contact List</h2>
    <ul>
      <li v-for="(contact, index) in contacts" :key="index">
        <span>{{ contact.name }}</span>
        <span>{{ contact.email }}</span>
        <span>{{ contact.subject }}</span>
        <span>{{ contact.message }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import contactData from "../reponses/contact";

export default {
  data() {
    return {
      contacts: contactData,
    };
  },
};
</script>

<style scoped>
.contact-list {
  padding: 20px;
}

h2 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}

span {
  margin-right: 20px;
}
</style>
