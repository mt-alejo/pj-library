const library = [];
class Book {
  constructor(title, author, pages, language, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.language = language),
      (this.read = read);
  }
}

const libraryElement = document.querySelector("#library-container");

const render = () => {
  /*<div class="book-card">
  <div class="book-card-text">
    <h1>Puss in bots</h1>
    <p>By: Author</p>
    <p>Pages: 00</p>
    <p>ENGLISH</p>
  </div>
  <div class="book-card-inputs">
    <button type="button" class="btn-close">x</button>
    <label class="switch">
      <input id="input-switch" type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>  */
};

const addBook = () => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let language = document.querySelector("#language").value;
  let read = document.querySelector("#read").value;

  const newBook = new Book(title, author, pages, language, read);
  library.push(newBook);
};

const formContainer = document.querySelector("#form-container");
formContainer.addEventListener("submit", () => {
  event.preventDefault();
  addBook();
  console.log(library);
});

const btnOpenForm = document
  .querySelector("#open-form-btn")
  .addEventListener("click", () => (formContainer.style.display = "block"));

const btnCloseForm = document
  .querySelector("#close-form-btn")
  .addEventListener("click", () => (formContainer.style.display = "none"));
