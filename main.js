const formContainer = document.querySelector("#form-container");
const btnOpenForm = document
  .querySelector("#open-form-btn")
  .addEventListener("click", () => (formContainer.style.display = "block"));

const btnCloseForm = document
  .querySelector("#close-form-btn")
  .addEventListener("click", () => (formContainer.style.display = "none"));
