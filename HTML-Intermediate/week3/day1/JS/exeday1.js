/******************************
 * 🌟 Exercise 1 : Divisible
 ******************************/
function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  const numbers = [];

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers.push(i);
      sum += i;
    }
  }

  console.log(`Numbers divisible by ${divisor}:`);
  console.log(numbers.join(" "));
  console.log("Sum :", sum);
}

// קריאה לפי ההוראות - 23
displayNumbersDivisible();
// אפשר לבדוק גם אחרים:
// displayNumbersDivisible(3);
// displayNumbersDivisible(45);


/******************************
 * 🌟 Exercise 2 : Shopping List
 ******************************/
const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};  

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
}; 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (const item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      // בונוס: להוריד מהמלאי
      stock[item] -= 1;
    }
  }
  return total;
}

console.log("Total shopping bill:", myBill());
console.log("Stock after shopping:", stock);


/******************************
 * 🌟 Exercise 3 : What's in my wallet ?
 ******************************/
function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickels, pennies] = amountOfChange;

  const total =
    quarters * 0.25 +
    dimes * 0.1 +
    nickels * 0.05 +
    pennies * 0.01;

  return total >= itemPrice;
}

// דוגמאות מהתרגיל
console.log(changeEnough(4.25, [25, 20, 5, 0]));    // true
console.log(changeEnough(14.11, [2, 100, 0, 0]));   // false
console.log(changeEnough(0.75, [0, 0, 20, 5]));     // true


/******************************
 * 🌟 Exercise 4 : Vacation Costs
 ******************************/

function hotelCost(nights) {
  const PRICE_PER_NIGHT = 140;
  return nights * PRICE_PER_NIGHT;
}

function planeRideCost(destination) {
  if (!destination) return 300;

  const dest = destination.toLowerCase();

  if (dest === "london") return 183;
  if (dest === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  const PRICE_PER_DAY = 40;
  let cost = days * PRICE_PER_DAY;

  if (days > 10) {
    cost *= 0.95; // 5% הנחה
  }
  return cost;
}

// בונוס: רק כאן יש prompt, ושולחים פרמטרים לפונקציות האחרות
function totalVacationCost() {
  let nights;
  do {
    nights = Number(prompt("How many nights would you like to stay in the hotel?"));
  } while (isNaN(nights) || nights <= 0);

  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!destination);

  let days;
  do {
    days = Number(prompt("How many days would you like to rent the car?"));
  } while (isNaN(days) || days <= 0);

  const hotelPrice = hotelCost(nights);
  const planePrice = planeRideCost(destination);
  const carPrice = rentalCarCost(days);

  const total = hotelPrice + planePrice + carPrice;

  console.log(
    `The car cost: $${carPrice}, the hotel cost: $${hotelPrice}, the plane tickets cost: $${planePrice}.`
  );
  console.log(`Total vacation cost: $${total}`);

  return total;
}

// קריאה לפונקציה (תופיע חלונות prompt כשתריץ את ה-html)
totalVacationCost();


/******************************
 * 🌟 Exercise 5 : Users (DOM)
 ******************************/

window.addEventListener("DOMContentLoaded", function () {
  // 1. Retrieve the div and console.log it
  const containerDiv = document.getElementById("container");
  console.log(containerDiv);

  const lists = document.querySelectorAll("ul.list");

  // 2. Change "Pete" to "Richard"
  lists[0].children[1].textContent = "Richard";

  // 3. Delete the second <li> of the second <ul> ("Sarah")
  lists[1].children[1].remove();

  // 4. Change first <li> of each <ul> to your name
  lists.forEach((ul) => {
    ul.firstElementChild.textContent = "Or"; // תחליף לשם שלך אם אתה רוצה
  });

  // 5. Add class student_list to both <ul>'s
  lists.forEach((ul) => ul.classList.add("student_list"));

  // 6. Add classes university and attendance to the first <ul>
  lists[0].classList.add("university", "attendance");

  // 7. Style: light blue background + padding to the div
  containerDiv.style.backgroundColor = "lightblue";
  containerDiv.style.padding = "20px";

  // 8. Do not display the <li> with "Dan" (last <li> of second <ul>)
  const secondUl = lists[1];
  const danLi = secondUl.lastElementChild;
  danLi.style.display = "none";

  // 9. Add a border to the <li> "Richard"
  const allLis = document.querySelectorAll("ul.list li");
  allLis.forEach((li) => {
    if (li.textContent === "Richard") {
      li.style.border = "1px solid black";
    }
  });

  // 10. Change font size of the whole body
  document.body.style.fontSize = "18px";

  // Bonus: if background color of the div is light blue, alert “Hello x and y”
  if (containerDiv.style.backgroundColor === "lightblue") {
    const userLis = document.querySelectorAll("ul.list:first-of-type li");
    if (userLis.length >= 2) {
      const x = userLis[0].textContent;
      const y = userLis[1].textContent;
      alert(`Hello ${x} and ${y}`);
    }
  }


  /******************************
   * 🌟 Exercise 6 : Change the navbar (DOM)
   ******************************/

  // Change id from navBar to socialNetworkNavigation
  const navBarDiv = document.getElementById("navBar");
  navBarDiv.setAttribute("id", "socialNetworkNavigation");

  const navBar = document.getElementById("socialNetworkNavigation");
  const ulNav = navBar.querySelector("ul");

  // Create new <li> with "Logout"
  const newLi = document.createElement("li");
  const logoutLink = document.createElement("a");
  logoutLink.href = "#";
  logoutLink.textContent = "Logout";
  newLi.appendChild(logoutLink);
  ulNav.appendChild(newLi);

  // firstElementChild & lastElementChild
  const firstLi = ulNav.firstElementChild;
  const lastLi = ulNav.lastElementChild;
  console.log("First link:", firstLi.textContent);
  console.log("Last link:", lastLi.textContent);


  /******************************
   * 🌟 Exercise 7 : My Book List (DOM)
   ******************************/

  const allBooks = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      image: "https://picsum.photos/100/150?random=1",
      alreadyRead: true
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      image: "https://picsum.photos/100/150?random=2",
      alreadyRead: false
    }
  ];

  const booksSection = document.querySelector(".listBooks");

  allBooks.forEach((book) => {
    const bookDiv = document.createElement("div");

    const details = document.createElement("p");
    details.textContent = `${book.title} written by ${book.author}`;

    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    bookDiv.appendChild(details);
    bookDiv.appendChild(img);

    if (book.alreadyRead) {
      bookDiv.style.color = "red";
    }

    booksSection.appendChild(bookDiv);
  });
});
