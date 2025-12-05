/************ 🌟 Exercise 1: Intersection Types ************/

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personDetails: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Wonderland",
};


/************ 🌟 Exercise 2: Type Guards with Union Types ************/

type NumOrStr = number | string;

function describeValue(value: NumOrStr): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

// דוגמאות
console.log(describeValue(10));
console.log(describeValue("hello"));


/************ 🌟 Exercise 3: Type Casting ************/

let someValue: any = 123;

// המרה ל-string בעזרת type casting
let strValue = someValue as string;

// שימוש כמחרוזת
console.log(strValue.toString());


/************ 🌟 Exercise 4: Type Assertions with Union Types ************/

function getFirstElement(arr: (number | string)[]): string {
  const first = arr[0];
  // משתמשים ב-type assertion כדי לומר ל-TS שזה string
  return first.toString() as string;
}

// דוגמאות
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement(["x", 2, 3]));


/************ 🌟 Exercise 5: Generic Constraints ************/

function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

// דוגמאות
logLength("Hello");
logLength([1, 2, 3, 4]);


/************ 🌟 Exercise 6: Intersection Types and Type Guards ************/

// משתמשים באותו Person מהתרגיל הראשון

type Job = {
  position: "Manager" | "Developer";
  department: string;
};

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager of the ${emp.department} department.`;
  } else {
    return `${emp.name} is a Developer in the ${emp.department} department.`;
  }
}

// דוגמאות
const emp1: Employee = {
  name: "Dan",
  age: 35,
  position: "Manager",
  department: "Sales",
};

const emp2: Employee = {
  name: "Sara",
  age: 28,
  position: "Developer",
  department: "IT",
};

console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));


/************ 🌟 Exercise 7: Type Assertions and Generic Constraints ************/

function formatInput<T extends { toString(): string }>(value: T): string {
  const str = value.toString() as string;
  return `Formatted: ${str}`;
}

// דוגמאות
console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput({ toString: () => "Custom Object" }));
