// EX 1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}
funcOne();

let a = 0;
function funcTwo() {
  a = 5;
}
function funcThree() {
  alert(`inside the funcThree function ${a}`);
}
funcThree();
funcTwo();
funcThree();

function funcFour() {
  window.a = "hello";
}
function funcFive() {
  alert(`inside the funcFive function ${a}`);
}
funcFour();
funcFive();

let b = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}
funcSix();

let c = 2;
if (true) {
  let c = 5;
  alert(`in the if block ${c}`);
}
alert(`outside of the if block ${c}`);

// EX 2
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// EX 3
const isString = (value) => typeof value === "string";
console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

// EX 4
const sum = (x, y) => x + y;
console.log(sum(3, 7));

// EX 5
function kgToGramsDec(kg) {
  return kg * 1000;
}
console.log(kgToGramsDec(2));

const kgToGramsExp = function (kg) {
  return kg * 1000;
};
console.log(kgToGramsExp(2.5));

const kgToGramsArrow = (kg) => kg * 1000;
console.log(kgToGramsArrow(3));

// EX 6
(function (numChildren, partnerName, location, jobTitle) {
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  const p = document.createElement("p");
  p.textContent = sentence;
  document.body.appendChild(p);
})(3, "Sarah", "Paris", "Web Developer");

// EX 7
(function (userName) {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const userDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/40";
  img.alt = `${userName} profile picture`;

  const span = document.createElement("span");
  span.textContent = userName;

  userDiv.appendChild(img);
  userDiv.appendChild(span);
  navbar.appendChild(userDiv);
})("John");

// EX 8
function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    const p = document.createElement("p");
    p.textContent = sentence;
    document.body.appendChild(p);
  }

  addIngredients("apple", "banana", "orange");
  addIngredients("kiwi", "mango", "pineapple");

  displayJuice();
}

makeJuice("large");
