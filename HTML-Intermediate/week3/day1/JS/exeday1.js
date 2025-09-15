const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0, 1);        // מסיר את Greg
people[2] = "Jason";        // עדיף אות גדולה
people.push("or");

const copy = people.slice(1, -1);
const i = people.length - 1;
const last = people[i];

// לוג של כל אדם
for (let a = 0; a < people.length; a++) {
  console.log(people[a]);
}

console.log(copy);                   // ["Devon", "Jason"]
console.log(people.indexOf("Mary")); // 0 או -1 תלוי בסדר אחרי השינויים
console.log(people.indexOf("Foo"));  // -1
console.log(people);
console.log(last);

// הצגה בעמוד
document.getElementById("peo").textContent = people;
document.getElementById("peoindex").textContent = people.indexOf("Mary");
document.getElementById("peoindex1").textContent = people.indexOf("Foo");
document.getElementById("cop").textContent = copy;
document.getElementById("las").textContent = last;

// ----- colors -----
const color = ["blue", "red", "green", "black", "white"];

// לקונסול – בלי $ ובלי טמפלטים, רק חיבור מחרוזות
for (let b = 0; b < color.length; b++) {
  console.log("my " + (b + 1) + " color is " + color[b]);
}

// להצגה בעמוד – כל צבע בשורה נפרדת
let colorsText = "";
for (let b = 0; b < color.length; b++) {
  colorsText += "my " + (b + 1) + " color is " + color[b] + "<br>";
}
document.getElementById("colo").innerHTML = colorsText;



// שואלים את המשתמש
let userInput;  // הצהרה פעם אחת

do {
  userInput = prompt("Please enter a number:");          // קלט מהמשתמש (string)
  console.log("value:", userInput, "type:", typeof userInput);
  userInput = Number(userInput);                          // המרה למספר
} while (userInput < 10);                                 // כל עוד קטן מ-10 – ממשיכים לשאול

document.getElementById("inp").textContent = userInput;   // מציגים את התוצאה בעמוד




const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
    sarah: [3, 990],
    dan:  [4, 1000],
    david: [1, 500],
  },
};

// 1) מספר הקומות
console.log("floors:", building.numberOfFloors);

// 2) כמה דירות בקומה 1 ובקומה 3
console.log("1st floor apts:", building.numberOfAptByFloor.firstFloor);
console.log("3rd floor apts:", building.numberOfAptByFloor.thirdFloor);

// 3) שם הדייר השני וכמה חדרים יש לו
const secondTenant = building.nameOfTenants[1];          // "Dan"
const secondTenantRooms = building.numberOfRoomsAndRent.dan[0]; // 4
console.log("second tenant:", secondTenant, "rooms:", secondTenantRooms);

// 4) אם שכר הדירה של Sarah + David גדול משל Dan – להעלות לדן ל-1200
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent   = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log("Dan rent now:", building.numberOfRoomsAndRent.dan[1]);


// 1) אובייקט בשם family עם כמה זוגות key:value
const family = {
  dad: "David",
  mom: "Efrat",
  son: "Or",
  daughter: "Noa"
};

const keys = [];
const values = [];

for (let key in family) {
  keys.push(key);          // המפתח
  values.push(family[key]); // הערך לפי המפתח
}

document.getElementById("val").textContent = keys.join(", ");
document.getElementById("inp").textContent = values.join(", ");
document.getElementById("val").textContent = keys.join(", ");
document.getElementById("inp").textContent = values.join(", ");


const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = "";

for (let key in details) {
  if (sentence !== "") {
    sentence += " ";           // מוסיף רווח בין זוגות
  }
  sentence += key + " " + details[key];
}

console.log(sentence); // my name is Rudolf the reindeer


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let letters = [];
for (let i = 0; i < names.length; i++) {
  letters.push(names[i][0].toUpperCase());
}
letters.sort();
let secret = letters.join("");

console.log(secret); // ABJKPS
