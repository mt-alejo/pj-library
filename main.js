const library = [];

class CardBook {
  constructor(title, author, pages, language, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.language = language),
      (this.read = read);
  }
}

const firstbook = new CardBook(
  "Harry Potter",
  "Authory",
  200,
  "English",
  false
);
const secondBook = new CardBook("Merlina", "Authory", 100, "Spanish", true);

const addBookToLibrary = (book) => {
  library.push(book);
};
addBookToLibrary(firstbook);
addBookToLibrary(secondBook);

const showNewCard = (book) => {
  const cardsContainer = document.querySelector(".cards-container");

  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const bookCardText = document.createElement("div");
  bookCardText.classList.add("book-card-text");
  const bookTitle = document.createElement("h1");
  bookTitle.textContent = book.title;
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `By: ${book.author}`;
  const bookPages = document.createElement("p");
  bookPages.textContent = `Pages: ${book.pages}`;
  const bookLanguage = document.createElement("p");
  bookLanguage.textContent = `${book.language}`;
  const bookCardInputs = document.createElement("div");
  bookCardInputs.classList.add("book-card-inputs");
  const btnClose = document.createElement("button");
  btnClose.textContent = "x";
  btnClose.setAttribute("type", "button");
  btnClose.classList.add("btn-close");
  const switchContainer = document.createElement("label");
  switchContainer.classList.add("switch");
  const switchInput = document.createElement("input");
  switchInput.setAttribute("type", "checkbox");
  if (book.read) {
    switchInput.checked = true;
  }
  const switchSpan = document.createElement("span");
  switchSpan.classList.add("slider");
  switchSpan.classList.add("round");

  switchContainer.append(switchInput, switchSpan);
  bookCardInputs.append(btnClose, switchContainer);
  bookCardText.append(bookTitle, bookAuthor, bookPages, bookLanguage);
  bookCard.append(bookCardText, bookCardInputs);
  cardsContainer.append(bookCard);
};

library.map((book) => {
  showNewCard(book);
});

//CLOSE _ OPEN
const formContainer = document.querySelector("#form-container");
const btnCloseForm = document.querySelector("#form-close");
btnCloseForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});
const btnOpenForm = document.querySelector("#form-open");
btnOpenForm.addEventListener("click", () => {
  formContainer.style.display = "block";
});
