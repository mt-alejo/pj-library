const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}

const addBookToLibrary = () => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
};

const formContainer = document.querySelector("#add-book-form");
const btnAddBook = document.querySelector("#add-book-btn");
btnAddBook.addEventListener("click", () => {
  formContainer.style.display = "block";
});
