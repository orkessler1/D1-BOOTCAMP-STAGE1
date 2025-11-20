class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}


class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(): string {
    return `Name: ${this.name}, Price: ${this.price}`;
  }
}

const p1 = new Product(1, "Phone", 1200);

console.log(p1.getProductInfo());

// 🛑 ניסיון שינוי
p1.id = 5;  // ❌ ERROR: Cannot assign to 'id' because it is a read-only property



class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);  // מעביר את השם למחלקת האב Animal
  }

  makeSound(): string {
    return "bark";
  }
}

const myDog = new Dog("Rex");
console.log(myDog.makeSound());  // bark


class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

// שימוש בלי ליצור אובייקט
console.log(Calculator.add(10, 5));      // 15
console.log(Calculator.subtract(10, 5)); // 5



interface User {
  readonly id: number;   // שדה לקריאה בלבד
  name: string;          // שם המשתמש
  email: string;         // אימייל
}

/*
  2️⃣ יצירת ממשק PremiumUser שיורש מ־User
  - הוא מקבל את id, name, email מה־User
  - מוסיף membershipLevel שהוא אופציונלי (?)
*/
interface PremiumUser extends User {
  membershipLevel?: string;  // שדה אופציונלי
}

/*
  3️⃣ פונקציה שמקבלת PremiumUser ומדפיסה את כל הפרטים
  - הפונקציה יודעת בדיוק אילו שדות קיימים לפי הממשק
  - אם אין membershipLevel → נדפיס הודעה מתאימה
*/
function printUserDetails(user: PremiumUser): void {
  console.log("ID:", user.id);         // תמיד קיים
  console.log("Name:", user.name);     // תמיד קיים
  console.log("Email:", user.email);   // תמיד קיים

  // בדיקה אם קיים membershipLevel
  if (user.membershipLevel) {
    console.log("Membership Level:", user.membershipLevel);
  } else {
    console.log("No premium membership");
  }
}

/*
  4️⃣ יצירת אובייקטים מסוג PremiumUser
  - הראשון עם רמת מנוי (Gold)
  - השני בלי מנוי בכלל (זה תקין כי זה ?)
*/
const user1: PremiumUser = {
  id: 1,
  name: "Dan",
  email: "dan@example.com",
  membershipLevel: "Gold",  // קיים
};

const user2: PremiumUser = {
  id: 2,
  name: "Sara",
  email: "sara@example.com",
  // אין membershipLevel — וזה בסדר
};

/*
  5️⃣ קריאת הפונקציה עבור כל משתמש
*/
printUserDetails(user1);
printUserDetails(user2);