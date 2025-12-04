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
// 🌟 Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

// 1. remove “Greg”
people.shift();

// 2. replace “James” with “Jason”
const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
  people[jamesIndex] = "Jason";
}

// 3. add your name at the end
people.push("Or");

// 4. log Mary's index
console.log(people.indexOf("Mary")); // 0

// 5. copy of array without Mary and without your name
// now: ["Mary","Devon","Jason","Or"]
const peopleCopy = people.slice(1, people.length - 1);
console.log(peopleCopy);

// 6. index of “Foo”
console.log(people.indexOf("Foo")); // -1 because "Foo" לא קיים במערך

// 7. variable "last" = last element
const last = people[people.length - 1];
console.log(last);


// 🌟 Exercise 2 : Your favorite colors
const colors = ["blue", "red", "green", "purple", "yellow"];

// basic version
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// bonus – with suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}


// 🌟 Exercise 3 : Repeat the question
let userNumber = Number(prompt("Please enter a number:"));

while (userNumber < 10) {
  userNumber = Number(prompt("Number is too small, enter a new number:"));
}


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

// 1. number of floors
console.log(building.numberOfFloors);

// 2. apartments on floors 1 and 3
console.log(
  building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
);

// 3. name of second tenant and number of rooms
const secondTenant = building.nameOfTenants[1]; // "Dan"
const secondTenantRooms = building.numberOfRoomsAndRent.dan[0];
console.log(secondTenant, secondTenantRooms);

// 4. check rents
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
const davidRent = building.numberOfRoomsAndRent.david[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan);


// 🌟 Exercise 5 : Family
const family = {
  mom: "Dana",
  dad: "Avi",
  child: "Noa",
};

// keys
for (let key in family) {
  console.log(key);
}

// values
for (let key in family) {
  console.log(family[key]);
}


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
console.log(sentence.trim()); // "my name is Rudolf the reindeer"


// 🌟 Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretName = names
  .map((name) => name[0]) // לוקח את האות הראשונה מכל שם
  .sort()                 // ממיין לפי אלף-בית
  .join("");              // מחבר למחרוזת אחת

console.log(secretName); // "ABJKPS"
