let name: string = "John";
let age: number = 30;
console.log(`Name: ${name}, Age: ${age}`);



function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // Output: Hello, John!
console.log(greet("Jane")); // Output: Hello, Jane!

let greeting = "Hello, World!";
function subtract(a: number, b: number): number {
    return a - b;
}
// Usage
let result = subtract(10, 4); 


let firstName: string = "John";
let title: string = "Web Developer";

let introduction = `Hello, my name is ${firstName} and I am a ${title}.`;
console.log(introduction);

let flag: boolean = true;
let invertedFlag = !flag;
console.log(invertedFlag); // Output: false

let isSunny: boolean = true;
let isRainy: boolean = false;

let goodWeather = isSunny && isRainy;
console.log(goodWeather); // Output: false

let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

let emptyObj: {} = {};

console.log(emptyObj.valueOf());


// Step 1: Create a tuple to represent a 3D point
let point: [number, number, number] = [3, 4, 12];

// Step 2: Write a function to calculate the distance from the origin
function distanceFromOrigin([x, y, z]: [number, number, number]): number {
    return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
}

// Step 3: Call the function with the point tuple and print the result
console.log(distanceFromOrigin(point)); 


type Shape = { kind: "circle"; r: number } |
             { kind: "square"; s: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.r ** 2;
    case "square": return shape.s ** 2;
    default:
      const _exhaustiveCheck: never = shape; // ❌ אם יתווסף kind חדש – נקבל שגיאה קומפילציה
      return _exhaustiveCheck;
  }
}


let result: unknown = 10.123;
if (typeof result === "number") {
  console.log(result.toFixed()); // ✅
}

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}


function printType(value: number | string): void {
  if (typeof value === "number") {
    console.log("It's a number.");
  } else if (typeof value === "string") {
    console.log("It's a string.");
  }
}

printType(10); // Output: It's a number.
printType("Hello"); // Output: It's a string.


type AlphaNumeric = string | number;
let input: AlphaNumeric;
input = 100; // Valid
input = "Hi"; // Valid
input = false; // Error: Type 'boolean' is not assignable to type 'AlphaNumeric'.




type Coordinates = [number, number];

let point: Coordinates = [10, 20];

console.log(point); // Output: [10, 20]


type Command = "start" | "stop" | "pause";

function executeCommand(command: Command): void {
  switch (command) {
    case "start":
      console.log("Starting...");
      break;
    case "stop":
      console.log("Stopping...");
      break;
    case "pause":
      console.log("Pausing...");
      break;
    default:
      console.log("Invalid command");
  }
}

executeCommand("start"); // Output: Starting...
executeCommand("stop"); // Output: Stopping...
executeCommand("pause"); // Output: Pausing...


// Step 1 & 2: Define the function `multiply` with type annotations for the parameters
function multiply(x: number, y: number): number {
    return x * y;
}

// Step 3: Call the function and print the result
console.log(multiply(3, 4));


let calculateAverage: (numbers: number[]) => number;

// Step 2: Assign a function that matches the defined type
calculateAverage = function (numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => (total += num));
    return total / numbers.length;
};

// Step 3: Call the function and print the result
console.log(calculateAverage([10, 20, 30])); // Output: 20

function calculateArea(width: number, height?: number): number {
  if (typeof height === "undefined") {
    height = width;
  }
  return width * height;
}

console.log(calculateArea(10)); // Output: 100 (square)
console.log(calculateArea(10, 20)); // Output: 200 (rectangle)


function calculateTotalCost(price: number, taxRate: number = 0.1): number {
  return price * (1 + taxRate);
}

console.log(calculateTotalCost(100)); // Output: 110
console.log(calculateTotalCost(100, 0.15)); // Output: 115


function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(3, 5)); // Output: 8
console.log(combine("Hello, ", "World!")); // Output: Hello, World!