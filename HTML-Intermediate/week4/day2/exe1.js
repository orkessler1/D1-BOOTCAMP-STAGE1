// עוזר לך לוודא שזה הקובץ שבאמת רץ:
console.log('RUNNING:', __filename);

// ---------- חלק 1: פירוק (destructuring) ----------
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// ---------- חלק 2: פונקציה עם destructuring בפרמטרים ----------
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));
// Output: "Your full name is Elie Schoppik"


// ---------- חלק 3: Object.entries + map ----------
const users = { user1: 18273, user2: 92833, user3: 90315 };

// הופכים לאיברי זוגות [key, value]
const newarray = Object.entries(users);
console.log('entries:', newarray);
// צפוי: [ ['user1',18273], ['user2',92833], ['user3',90315] ]

// מכפילים את ה-ID פי 2
const doubled = newarray.map(([user, id]) => [user, id * 2]);
console.log('doubled:', doubled);
// צפוי: [ ['user1',36546], ['user2',185666], ['user3',180630] ]

// (לא חובה) חזרה לאובייקט כדי שתראה גם כך
const doubledObj = Object.fromEntries(doubled);
console.log('doubledObj:', doubledObj);
// צפוי: { user1: 36546, user2: 185666, user3: 180630 }


class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color, defaultNoise) {
    super(name, type, color);       // קורא לבנאי של Animal
    this.defaultNoise = defaultNoise;
  }

  sound() {
    return `${this.defaultNoise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white', 'Moooo');
console.log(farmerCow.sound()); 
// => Moooo I'm a cow, named Lily and I'm brown and white
