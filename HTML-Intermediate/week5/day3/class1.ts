class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// ↓ אלו שורות ההרצה – להישאר בקובץ, לא להקליד בטרמינל
const p = new Person("123-45-6789", "Alice", "Smith");
console.log(p.getFullName());




class Person {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Person {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}



class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
}
class Manager extends Employee {
  private department: string;

  constructor(
    firstName: string,
    lastName: string,
    jobTitle: string,
    department: string
  ) {
    super(firstName, lastName, jobTitle);
    this.department = department;
  }
}

class Person {
  constructor(private firstName: string, private lastName: string) {}

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName); // קריאה לבנאי של המחלקה האב
  }

  // החלפה (override) של המתודה describe
  describe(): string {
    return super.describe() + ` I'm a ${this.jobTitle}.`;
  }
}

let employee = new Employee("John", "Doe", "Web Developer");
console.log(employee.describe());
// Output: This is John Doe. I'm a Web Developer.

class Employee {
  static headcount: number = 0; // תכונה סטטית

  constructor(private firstName: string, private lastName: string, private jobTitle: string) {
    Employee.headcount++; // כל פעם שנוצר עובד חדש, המספר עולה ב-1
  }
}

let john = new Employee("John", "Doe", "Front-end Developer");
let jane = new Employee("Jane", "Doe", "Back-end Developer");

console.log(Employee.headcount); // Output: 2
class Employee {
  private static headcount: number = 0;

  constructor(private firstName: string, private lastName: string, private jobTitle: string) {
    Employee.headcount++;
  }

  public static getHeadcount(): number {
    return Employee.headcount;
  }
}

let john = new Employee("John", "Doe", "Front-end Developer");
let jane = new Employee("Jane", "Doe", "Back-end Developer");

console.log(Employee.getHeadcount()); // Output: 2
class Contractor extends Employee {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(person)); // Output: John Doe


interface Person {
  firstName: string;
  middleName?: string; // Optional property
  lastName: string;
}

function getFullName(person: Person): string {
  if (person.middleName) {
    // If middleName is provided, include it in the full name
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  // If middleName is not provided, return only first and last names
  return `${person.firstName} ${person.lastName}`;
}


// Creating a Person object with middleName
const jane: Person = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
};

// Creating a Person object without middleName
const john: Person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(jane)); // Output: Jane K. Doe
console.log(getFullName(john)); // Output: John Doe


interface Book {
  title: string;
  author: string;
  pages: number;
  genre?: string; // מאפיין אופציונלי
}

function getBookSummary(book: Book): string {
  if (book.genre) {
    return `${book.title} by ${book.author}, Genre: ${book.genre}, Pages: ${book.pages}`;
  } else {
    return `${book.title} by ${book.author}, Pages: ${book.pages}`;
  }
}

// דוגמאות לשימוש
const book1: Book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  genre: "Fantasy",
  pages: 310,
};

const book2: Book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
};

console.log(getBookSummary(book1));
// Output: The Hobbit by J.R.R. Tolkien, Genre: Fantasy, Pages: 310

console.log(getBookSummary(book2));
// Output: Clean Code by Robert C. Martin, Pages: 464
