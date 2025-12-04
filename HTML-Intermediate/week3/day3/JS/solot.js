/****************************************
 * 🌟 Exercise 1 : Change the article
 ****************************************/

// 1. Retrieve the h1
const h1 = document.querySelector("article h1");
console.log(h1);

// 2. Remove the last paragraph
const article = document.querySelector("article");
article.lastElementChild.remove();

// 3. h2 click → background turns red
const h2 = document.querySelector("article h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// 4. h3 click → hide it (display none)
const h3 = document.querySelector("article h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// 5. Add a button that makes all paragraphs bold
const btn = document.createElement("button");
btn.textContent = "Make paragraphs bold";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("article p");
  paragraphs.forEach((p) => (p.style.fontWeight = "bold"));
});

// BONUS 1 → random font size for h1 on hover
h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 100);
  h1.style.fontSize = randomSize + "px";
});

// BONUS 2 → fade out 2nd paragraph on hover
const secondP = document.querySelectorAll("article p")[1];
secondP.style.transition = "opacity 1s";

secondP.addEventListener("mouseover", () => {
  secondP.style.opacity = 0;
});

secondP.addEventListener("mouseout", () => {
  secondP.style.opacity = 1;
});


/****************************************
 * 🌟 Exercise 2 : Work with forms
 ****************************************/

const form = document.querySelector("form");
console.log(form);

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log(fnameInput, lnameInput);

const nameByAttr = document.getElementsByName("firstname");
const lnameByAttr = document.getElementsByName("lastname");
console.log(nameByAttr, lnameByAttr);

const usersAnswer = document.querySelector(".usersAnswer");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents page refresh

  const fname = fnameInput.value.trim();
  const lname = lnameInput.value.trim();

  if (fname === "" || lname === "") return;

  const li1 = document.createElement("li");
  li1.textContent = fname;

  const li2 = document.createElement("li");
  li2.textContent = lname;

  usersAnswer.appendChild(li1);
  usersAnswer.appendChild(li2);

  form.reset();
});


/****************************************
 * 🌟 Exercise 3 : Transform the sentence
 ****************************************/

let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
}
getBoldItems();

function highlight() {
  allBoldItems.forEach((item) => (item.style.color = "blue"));
}

function returnItemsToDefault() {
  allBoldItems.forEach((item) => (item.style.color = "black"));
}

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);


/****************************************
 * 🌟 Exercise 4 : Volume of a sphere
 ****************************************/

const sphereForm = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

sphereForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const radius = Number(radiusInput.value);
  if (isNaN(radius) || radius <= 0) {
    volumeInput.value = "";
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeInput.value = volume.toFixed(2);
});
