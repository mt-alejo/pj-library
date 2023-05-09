const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}
let libraryContainer = document.querySelector("#library-container");

const render = () => {
  // for (let i = 0; i < myLibrary.length; i++) {
  //   console.log("works");
  // }
  myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.innerHTML = `<div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h5 class="author">By: ${book.author}</h5>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read">${book.read ? "Read" : "Not read yet"}</p>
    </div>`;
    libraryContainer.append(bookCard);
  });
};

const addBookToLibrary = () => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  libraryContainer.innerHTML = "";
  render();
};

const formContainer = document.querySelector("#add-book-form");
const btnOpenForm = document.querySelector("#open-form-btn");
btnOpenForm.addEventListener("click", () => {
  formContainer.style.display = "block";
});

//The eventListener for the FORM, not for the submit-button:
formContainer.addEventListener("submit", function () {
  event.preventDefault(); //There are not backend, the data keeps local
  addBookToLibrary();
});
