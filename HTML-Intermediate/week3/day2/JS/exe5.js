// 1) מערך ספרים: title, author, image (URL), alreadyRead (boolean)
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://via.placeholder.com/100x150?text=Harry+Potter",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://via.placeholder.com/100x150?text=The+Hobbit",
    alreadyRead: false
  }
];

// 2) רינדור ל-DOM לתוך ה-<section class="listBooks">
const container = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const card = document.createElement("div");
  const details = document.createElement("p");
  const img = document.createElement("img");

  details.textContent = `${book.title} written by ${book.author}.`;
  if (book.alreadyRead) details.style.color = "red";

  img.src = book.image;
  img.alt = book.title;
  img.style.width = "100px";

  card.appendChild(details);
  card.appendChild(img);
  card.style.marginBottom = "12px";

  container.appendChild(card);
});
