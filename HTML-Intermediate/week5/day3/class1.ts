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
