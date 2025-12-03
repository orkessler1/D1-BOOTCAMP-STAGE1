// 🌟 Exercise 1 : List of people

let people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

// 1. Remove “Greg”
people.shift();

// 2. Replace “James” with “Jason”
const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
  people[jamesIndex] = "Jason";
}

// 3. Add your name to the end
people.push("Or"); // שימי כאן את השם שלך

// 4. Log Mary's index
console.log("Mary index:", people.indexOf("Mary"));

// 5. Make a copy without Mary and without your name
// people is now: ["Mary","Devon","Jason","Or"]
const peopleCopy = people.slice(1, people.length - 1);
console.log("Copy without Mary and me:", peopleCopy);

// 6. Index of "Foo"
console.log('Index of "Foo":', people.indexOf("Foo"));
// מחזיר -1 כי "Foo" לא קיים במערך

// 7. Variable last with last element
const last = people[people.length - 1];
console.log("Last element:", last);

// Part II - Loops

// 1. Loop through people and log each person
console.log("All people:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Loop and exit after logging "Devon"
console.log('People until "Devon":');
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break; // <- זה המתקן את ההערה של התרגיל
  }
}

// 🌟 Exercise 2 : Your favorite colors

const colors = ["blue", "red", "green", "purple", "black"];

// Basic version
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus: 1st, 2nd, 3rd...
function getSuffix(num) {
  if (num === 1) return "st";
  if (num === 2) return "nd";
  if (num === 3) return "rd";
  return "th";
}

for (let i = 0; i < colors.length; i++) {
  const position = i + 1;
  const suffix = getSuffix(position);
  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}

// 🌟 Exercise 3 : Repeat the question

// הערה: זה יעבוד רק בדפדפן (יש בו prompt)
let number;
do {
  number = Number(prompt("Please enter a number (at least 10):"));
} while (number < 10);
console.log("Final number:", number);

// 🌟 Exercise 4 : Building Management

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// 1. Number of floors
console.log("Number of floors:", building.numberOfFloors);

// 2. Apartments on floors 1 and 3
console.log(
  "Apartments on floor 1 and 3:",
  building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
);

// 3. Name of second tenant and number of rooms
const secondTenant = building.nameOfTenants[1]; // "Dan"
const secondTenantRooms =
  building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(
  "Second tenant and rooms:",
  secondTenant,
  "- rooms:",
  secondTenantRooms
);

// 4. Check rent
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
const davidRent = building.numberOfRoomsAndRent.david[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log("Updated rents:", building.numberOfRoomsAndRent);

// 🌟 Exercise 5 : Family

const family = {
  dad: "Avi",
  mom: "Dana",
  son: "Noam",
  daughter: "Lia",
};

// keys only
console.log("Family keys:");
for (let key in family) {
  console.log(key); // <-- מפתחות בלבד
}

// values only
console.log("Family values:");
for (let key in family) {
  console.log(family[key]); // <-- ערכים בלבד
}
// עכשיו הכל יוצא ל-console ולא לדף – זה מתקן את ההערה בתרגיל 5

// 🌟 Exercise 6 : Rudolf

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

let sentence = "";
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
sentence = sentence.trim();
console.log(sentence); // "my name is Rudolf the reindeer"

// 🌟 Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort(); // alphabetical
let societyName = "";
for (let i = 0; i < names.length; i++) {
  societyName += names[i][0];
}
console.log("Secret society name:", societyName); // "ABJKPS"
