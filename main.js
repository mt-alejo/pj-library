{
  /* <div class="book-card">
    <div class="book-card-text">
        <h1>Puss in bots</h1>
        <p>By: Author</p>
        <p>Pages: 00</p>
        <p>ENGLISH</p>
    </div>
        <div class="book-card-inputs">
        <button type="button" class="btn-close">❌</button>
        <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
        </label>
</div> */
}

const cardsContainer = document.querySelector(".cards-container");

const showNewCard = () => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const bookCardText = document.createElement("div");
  bookCardText.classList.add("book-card-text");
  const bookTitle = document.createElement("h1");
  bookTitle.textContent = "Harry Potter y la orden del fenix";
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = "By: Author";
  const bookPages = document.createElement("p");
  bookPages.textContent = "Pages: 00";
  const bookLanguage = document.createElement("p");
  bookLanguage.textContent = "ENGLISH";
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
  const switchSpan = document.createElement("span");
  switchSpan.classList.add("slider");
  switchSpan.classList.add("round");

  switchContainer.append(switchInput, switchSpan);
  bookCardInputs.append(btnClose, switchContainer);
  bookCardText.append(bookTitle, bookAuthor, bookPages, bookLanguage);
  bookCard.append(bookCardText, bookCardInputs);
  cardsContainer.append(bookCard);
};

const formContainer = document.querySelector("#form-container");
const btnCloseForm = document.querySelector("#form-close");
btnCloseForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});
const btnOpenForm = document.querySelector("#form-open");
btnOpenForm.addEventListener("click", () => {
  formContainer.style.display = "block";
});
