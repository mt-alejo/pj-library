const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}

const addBookToLibrary = () => {};

const formContainer = document.querySelector("#add-book-form");
const btnAddBook = document.querySelector("#add-book-btn");
btnAddBook.addEventListener("click", () => {
  formContainer.style.display = "block";
});
