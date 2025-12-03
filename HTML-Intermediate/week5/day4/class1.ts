type TypeA = {
  propertyA: string;
};

type TypeB = {
  propertyB: number;
};

type TypeAB1 = TypeA & TypeB;
type TypeAB2 = TypeB & TypeA;

let typeABInstance1: TypeAB1 = {
  propertyA: "Hello",
  propertyB: 42,
};

let typeABInstance2: TypeAB2 = {
  propertyA: "World",
  propertyB: 24,
};

console.log(typeABInstance1); // { propertyA: 'Hello', propertyB: 42 }
console.log(typeABInstance2); // { propertyA: 'World', propertyB: 24 }



type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric): alphanumeric {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "Invalid arguments. Both arguments must be either numbers or strings."
  );
}



function formatValue(value: alphanumeric): string {
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  }

  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return "Unsupported type";
}

// Example usage:
console.log(formatValue(150));  // Output: "$150.00"
console.log(formatValue("hello"));  // Output: "HELLO"


class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }

  return message;
}

function generateReport(partners: BusinessPartner[]): string[] {
  return partners.map(partner => {
    if (partner instanceof Customer) {
      return partner.isCreditAllowed()
        ? "Customer - Credit Allowed"
        : "Customer - Credit Denied";
    }

    if (partner instanceof Supplier) {
      return partner.isInShortList()
        ? "Supplier - Shortlisted"
        : "Supplier - Not Shortlisted";
    }

    return "Unknown partner type";
  });
}


function signContract(partner: BusinessPartner): string {
  let message: string;

  // Check if the 'isCreditAllowed' property exists in the partner
  if ("isCreditAllowed" in partner) {
    // It's a Customer
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    // It's a Supplier
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }

  return message;
}

function describePartner(partners: BusinessPartner[]): string[] {
  return partners.map(partner => {
    if ("isCreditAllowed" in partner) {
      return partner.isCreditAllowed()
        ? "Customer - Credit Approved"
        : "Customer - Credit Denied";
    }

    if ("isInShortList" in partner) {
      return partner.isInShortList()
        ? "Supplier - Shortlisted"
        : "Supplier - Needs Evaluation";
    }

    return "Unknown partner type";
  });
}
 
let selectElement = document.querySelector('select') as HTMLSelectElement;
console.log(selectElement.selectedIndex);


let value: number | string = "Hello, TypeScript!";

// Use the 'as' keyword to assert that 'value' is a string
let length = (value as string).length;
console.log(length); // Output: 19

value = 42;

// Use the 'as' keyword to assert that 'value' is a number
let doubled = (value as number) * 2;
console.log(doubled); // Output: 84