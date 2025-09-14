// יצירת משתנים
let addressNumber = 55;
let addressStreet = "av Bosquet";
let country = "Paris";

// חיבור למשפט
let globalAddress = "I live in " + addressNumber + " " + addressStreet + ", in " + country;

// הדפסה לעמוד
document.getElementById("address").textContent = globalAddress;

// (לא חובה) לקונסול
console.log(globalAddress);

let birth = 2007 ;
let future = 2040 ;
let futureage = future - birth;
console.log("my age will be" + futureage) ; 
document.getElementById("age").textContent = futureage;

alert("Hello");

let age = prompt('How old are you?', 20);
alert(`You are ${age} years old!`); // You are 20 years old!

let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed

let colors = ["blue", "yellow", "green"]; 
colors.push("orange")
colors[0] = "pink"
colors.pop() // מוריד את הפריט האחרון
console.log(typeof(colors)) // object
document.getElementById("color").textContent = colors;

// 1) יצירת המערך
let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];

// 2) להציג את dog (אינדקס 1)
document.getElementById('dog').textContent = pets[1];  // "dog"

// 3) להוסיף horse
pets.push('horse');   // עכשיו: ['cat','dog','fish','rabbit','cow','horse']

// למחוק את rabbit (לא להשתמש ב-pop!):
// דרך א: אם יודעים שהאינדקס של 'rabbit' הוא 3
// pets.splice(3, 1);

// דרך ב: למצוא אינדקס בצורה כללית (עדיף):
const i = pets.indexOf('rabbit');
if (i !== -1) {
  pets.splice(i, 1);  // מוחק פריט אחד במקום i
}
// עכשיו: ['cat','dog','fish','cow','horse']

// 4) להציג את כל המערך ואת האורך שלו
document.getElementById('pet').textContent = pets.join(', ');
document.getElementById('length').textContent = 'length: ' + pets.length;

// (לא חובה) לקונסול
console.log(pets);
console.log('length:', pets.length);

// Keyless car - גרסה בסיסית
let agenew = prompt("How old are you?");   // מחזיר מחרוזת

agenew = Number(agenew); // המרה למספר (כדי שההשוואות יהיו תקינות)

if (agenew < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (agenew === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (agenew > 18) {
  alert("Powering On. Enjoy the ride!");
}
