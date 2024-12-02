const handleSubmit = async () => {
  loading.value = true;
  error.value = "";
  success.value = false;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store form data in contact.js file
    const formDataJson = JSON.stringify(formData);
    fs.writeFileSync(
      `src/reponses/contact.js`,
      `export default ${formDataJson};`
    );

    success.value = true;
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
  } catch (err) {
    error.value = "Failed to send message. Please try again.";
  } finally {
    loading.value = false;
  }
};
