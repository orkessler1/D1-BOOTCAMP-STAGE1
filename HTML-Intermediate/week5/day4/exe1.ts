// 🌟 Exercise 1: Intersection Types
// ---------------------------------

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "Or",
  age: 25,
  street: "Herzl 10",
  city: "Tel Aviv",
};


// 🌟 Exercise 2: Type Guards with Union Types
// -------------------------------------------

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

// דוגמאות:
describeValue(10);
describeValue("hello");


// 🌟 Exercise 3: Type Casting
// ---------------------------

let someValue: any = "Hello TypeScript";

// Casting / Assertion למחרוזת
let stringValue = someValue as string;

// שימוש כמחרוזת
console.log(stringValue.toUpperCase());


// 🌟 Exercise 4: Type Assertions with Union Types
// ----------------------------------------------

function getFirstElement(arr: (number | string)[]): string {
  // מניחים שהאלמנט הראשון אפשר להחזיר כמחרוזת
  const first = arr[0] as string;
  return first;
}

// דוגמאות:
getFirstElement(["a", 2, 3]);
getFirstElement(["hello", "world"]);


// 🌟 Exercise 5: Generic Constraints
// ----------------------------------

function logLength<T extends { length: number }>(value: T): void {
  console.log("Length is:", value.length);
}

// דוגמאות:
logLength("hello");
logLength([1, 2, 3, 4]);


// 🌟 Exercise 6: Intersection Types and Type Guards
// ------------------------------------------------

type Person2 = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = Person2 & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager in ${emp.department}`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a Developer in ${emp.department}`;
  } else {
    return `${emp.name} works in ${emp.department} as ${emp.position}`;
  }
}

// דוגמה:
const employee1: Employee = {
  name: "Dana",
  age: 30,
  position: "Manager",
  department: "HR",
};

const employee2: Employee = {
  name: "Avi",
  age: 27,
  position: "Developer",
  department: "R&D",
};

describeEmployee(employee1);
describeEmployee(employee2);


// 🌟 Exercise 7: Type Assertions and Generic Constraints
// -----------------------------------------------------

function formatInput<T extends { toString(): string }>(value: T): string {
  // הופכים את הערך למחרוזת בעזרת toString, ואז מתייחסים אליו כמחרוזת
  const str = value.toString() as string;
  return `Formatted: ${str}`;
}

// דוגמאות:
formatInput(123);
formatInput("Hello");
formatInput([1, 2, 3]);
