const firstArr = [1, 4, 9, 16];

const secondArr = firstArr.map((value, index, arr) => {
    console.log(value); // each element
    console.log(index); // each index
    console.log(arr); // the firstArr (logged 4 times)
    return value * index;
});

console.log(secondArr);
//expected output : [ 0, 4, 18, 48 ]



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
// array passed : words
// test passed : word.length > 6

console.log(result);
// expected output: ["exuberant", "destruction", "present"]



const party = [
  { desert: 'Chocolate Mousse', calories: 30 },
  { desert: 'Apple Pie',        calories: 15 },
  { desert: 'Croissant',        calories: 50 },
  { desert: 'Strawberry Icecream', calories: 5 },
];

const totalCalories = party.reduce((acc, item) => {
  if (item.desert === 'Apple Pie') {
    return acc;                 // דילוג
  } else {
    return acc + item.calories; // הוספה
  }
}, 0);

console.log(totalCalories); // 85




let a = 10;
let b = 20
let rest = [30,40,50]

const iterable = [a, b, ...rest] 
console.log(iterable);

let [c, d, ...restt] = [10, 20, 30, 40, 50];
console.log('c: ',c); // c: 10
console.log('d: ',d); // d: 20
console.log('rest: ',restt); // [30, 40, 50]



const rainbow = ['red', 'orange', 'yellow'];
const rainbowClone = rainbow;

// Both rainbow and rainbowClone point to the same
// array reference in memory, hence it logs (true)
console.log(rainbow === rainbowClone); // true

rainbow.push("violet");
console.log(rainbow); //['red', 'orange', 'yellow', 'violet']
console.log(rainbowClone); // ['red', 'orange', 'yellow', 'violet']



const rainboww = ['red', 'orange', 'yellow'];

// Cloning with array destructuring and spread operator
const [...rainbowwClone] = rainboww;

console.log(rainboww === rainbowwClone); // false
console.log(rainbowwClone); // ['red', 'orange', 'yellow']

rainbow.push("violet");
console.log(rainboww); //['red', 'orange', 'yellow', 'violet']
console.log(rainbowwClone); // ['red', 'orange', 'yellow']