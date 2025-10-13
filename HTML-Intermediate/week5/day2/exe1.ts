const name = "hello world";
console.log(name);

const name1: string = "or";
const age: number = 18;
console.log(`name: ${name1}, age: ${age}`);

if (age > 0) {
  console.log("pos");
} else if (age < 0) {
  console.log("min");
} else {
  console.log("zero");
}


// 1) מגדירים פונקציה שמחזירה טאפֶּל (Tuple) – סדר וטיפוס קבועים לכל מקום
function getDetails(name: string, age: number): [string, number, string] {
  const message = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, message];
}

// 2) קריאה לפונקציה
const details = getDetails("Alice", 25);

// 3) הדפסה
console.log(details);
// ['Alice', 25, 'Hello, Alice! You are 25 years old.']


type person = {name2 : string,age2 : number};
const p2: person = { name2: "Bob", age2: 30 };


function createPerson(name2: string, age2: number): person {
  return { name2, age2 };
}
const p = createPerson("Alice", 25);