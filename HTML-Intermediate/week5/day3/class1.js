class Person {
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// --- הוספה להרצה ---
const p = new Person("123-45-6789", "Alice", "Smith");
console.log(p.getFullName()); // צפוי: "Alice Smith"
