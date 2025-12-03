// ==============================
// 🌟 Exercise 1 : Find the numbers divisible by 23
// ==============================

function displayNumbersDivisible(divisor = 23) {
  let sum = 0;

  console.log(`Numbers divisible by ${divisor} between 0 and 500:`);

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log(`Sum of numbers divisible by ${divisor}: ${sum}`);
  return sum;
}

// גרסה לפי ההוראות – בלי ארגומנט (23 הוא ברירת המחדל)
displayNumbersDivisible();

// בונוס – דוגמאות
displayNumbersDivisible(3);
displayNumbersDivisible(45);

// ==============================
// 🌟 Exercise 2 : Shopping List
// ==============================

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (const item of shoppingList) {
    // לבדוק שהמוצר קיים במלאי ויש ממנו יותר מ־0
    if (stock[item] && stock[item] > 0) {
      total += prices[item];

      // Bonus: להוריד אחד מהמלאי
      stock[item]--;
    }
  }

  return total;
}

console.log("Total shopping bill:", myBill());
console.log("Updated stock after shopping:", stock);

// ==============================
// 🌟 Exercise 3 : What’s in my wallet ?
// ==============================

function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickels, pennies] = amountOfChange;

  const total =
    quarters * 0.25 +
    dimes * 0.1 +
    nickels * 0.05 +
    pennies * 0.01;

  return total >= itemPrice;
}

// דוגמאות מההוראות
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true

// ==============================
// 🌟 Exercise 4 : Vacations Costs
// ==============================

// פונקציות עזר לקריאת קלט תקין (עובד בדפדפן בלבד)
function askNumber(message) {
  let value;
  do {
    value = prompt(message);
  } while (value === null || value.trim() === "" || isNaN(value));
  return Number(value);
}

function askString(message) {
  let value;
  do {
    value = prompt(message);
  } while (!value || !isNaN(value));
  return value;
}

function hotelCost() {
  const nights = askNumber("How many nights would you like to stay in the hotel?");
  const costPerNight = 140;
  return nights * costPerNight;
}

function planeRideCost() {
  const destination = askString("What is your destination?").toLowerCase();

  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost() {
  const days = askNumber("For how many days would you like to rent the car?");
  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95; // 5% הנחה
  }

  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  const total = hotel + plane + car;

  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`
  );
  console.log(`Total vacation cost: $${total}`);

  return total;
}

// לקרוא לפונקציה הכללית
// שימי לב: זה יפתח כמה prompt-ים אם תפעילי בדפדפן
// אפשר להפעיל רק כשרוצים לבדוק
// totalVacationCost();

// ==============================
// 🌟 Exercise 5 : Users (DOM)
// צריך HTML כמו בדוגמה ולהכליל את הקובץ הזה עם <script>
// ==============================

function usersExercise() {
  const containerDiv = document.getElementById("container");
  console.log(containerDiv);

  const lists = document.querySelectorAll(".list");
  const firstList = lists[0];
  const secondList = lists[1];

  // Change “Pete” to “Richard”
  firstList.children[1].textContent = "Richard";

  // Delete the second <li> of the second <ul> (“Sarah”)
  secondList.children[1].remove();

  // Change the name of the first <li> of each <ul> to your name
  lists.forEach((ul) => {
    ul.firstElementChild.textContent = "Or"; // שימי כאן את השם שלך אם תרצי
  });

  // Add class student_list to both <ul>
  lists.forEach((ul) => ul.classList.add("student_list"));

  // Add university and attendance to the first <ul>
  firstList.classList.add("university", "attendance");

  // Style changes
  containerDiv.style.backgroundColor = "lightblue";
  containerDiv.style.padding = "20px";

  const allLi = document.querySelectorAll("li");

  // Hide the <li> that contains “Dan”
  allLi.forEach((li) => {
    if (li.textContent === "Dan") {
      li.style.display = "none";
    }
  });

  // Add border to the <li> that contains “Richard”
  allLi.forEach((li) => {
    if (li.textContent === "Richard") {
      li.style.border = "1px solid black";
    }
  });

  // Change font size of the whole body
  document.body.style.fontSize = "18px";

  // Bonus
  if (containerDiv.style.backgroundColor === "lightblue") {
    const users = firstList.querySelectorAll("li");
    if (users.length >= 2) {
      const x = users[0].textContent;
      const y = users[1].textContent;
      alert(`Hello ${x} and ${y}`);
    }
  }
}

// קראי לפונקציה רק בעמוד ה-Users המתאים
// usersExercise();

// ==============================
// 🌟 Exercise 6 : Change the navbar (DOM)
// ==============================

function navbarExercise() {
  const navBar = document.getElementById("navBar");
  navBar.setAttribute("id", "socialNetworkNavigation");

  const newNav = document.getElementById("socialNetworkNavigation");
  const ul = newNav.querySelector("ul");

  // create <li><a>Logout</a></li>
  const newLi = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.href = "#";
  newLink.textContent = "Logout";
  newLi.appendChild(newLink);
  ul.appendChild(newLi);

  const firstLiText = ul.firstElementChild.textContent;
  const lastLiText = ul.lastElementChild.textContent;

  console.log("First link:", firstLiText);
  console.log("Last link:", lastLiText);
}

// להפעיל בעמוד ה-navbar
// navbarExercise();

// ==============================
// 🌟 Exercise 7 : My Book List (DOM)
// ==============================

const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://via.placeholder.com/100x150?text=Hobbit",
    alreadyRead: true,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://via.placeholder.com/100x150?text=Harry+Potter",
    alreadyRead: false,
  },
];

function bookListExercise() {
  const section = document.querySelector(".listBooks");
  if (!section) return;

  allBooks.forEach((book) => {
    const bookDiv = document.createElement("div");

    const info = document.createElement("p");
    info.textContent = `${book.title} written by ${book.author}`;

    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    bookDiv.appendChild(info);
    bookDiv.appendChild(img);

    if (book.alreadyRead) {
      bookDiv.style.color = "red";
    }

    section.appendChild(bookDiv);
  });
}

// להפעיל בעמוד של ה-book list
// bookListExercise();
