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
  city: "Wonderland"
};
 


type ans = number | string ;
function describeValus(a : ans) : string {
    if (typeof a === "string"){
        return "this is a string" ;
    }
    else {
        return "this is a number";
    }

}


let someValue: any = 123;

let strValue = someValue as string;

console.log(strValue.toUpperCase());


function getfirstelement (arr: (number | string)[]): string {
    const first = arr[0];
    return first as string;
    }


function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}


type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

// Intersection Type
type Employee = Person & Job;

// Type Guard + Employee Description
function describeEmployee(emp: Employee): string {
  if (emp.position.toLowerCase() === "manager") {
    return `${emp.name} is a Manager of the ${emp.department} department.`;
  } else {
    return `${emp.name} is a Developer in the ${emp.department} department.`;
  }
}



function formatInput<T extends { toString(): string }>(value: T): string {
  // משתמשים ב-type assertion כדי להבטיח ל-TS שזה באמת string
  const str = value.toString() as string;

  // Formatting example: maybe wrap it
  return `Formatted: ${str}`;
}
