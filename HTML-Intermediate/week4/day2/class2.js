// פונקציה ליצירת משתמש – עם קיצור מפתחות (shorthand)
function makeUser(name, age) {
  return {
    name, // זהה ל-name: name
    age,  // זהה ל-age: age
  };
}

const user = makeUser("John", 30);
console.log(user.name); // John

// ---- showProps ----
function showProps(obj, objName) {
  let result = '';
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

// אובייקט רכב
const myCar = {};
myCar.make  = "Ford";
myCar.model = "Mustang";
myCar.year  = 1969;

const output = showProps(myCar, "myCar");
console.log(output.trim()); // trim רק כדי לא לסיים בשורה ריקה

// ---- מחלקת Rabbit ----
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

const killerRabbit = new Rabbit("killer");
const blackRabbit  = new Rabbit("black");

// קריאות כדי לראות פלט
killerRabbit.speak("Beware!");
blackRabbit.speak("Hello!");



class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;

  }
  // Getter
  get area() {
    return this.height * this.width;
  }

  // Setter
  set area(factor) {
    this.width = this.height*factor
  }
}

const square = new Rectangle(10, 10);
square.area = 2
square.area //200



class Animal { 
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}


class Dog extends Animal {
  constructor(name,noise) {
    super(name); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} barks.It says ${this.noise}`);
  }
}

let d = new Dog('Mitzie', "Wouaf");
console.log(d.name) // Mitzie
d.speak(); // Mitzie barks.It says Wouaf
console.log(d)
//Dog {name: "Mitzie", noise: "Wouaf"}
//__proto__: Animal
//  constructor: class Dog
//  speak: ƒ speak()
//__proto__: Object