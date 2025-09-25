const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, i) => {      // אינדקס אי-זוגי: 1, 3, ...
    console.log("the", i+1, "choice" , color);
  }
);

if (colors.some(color => color === "Violet")){
    console.log("yeah");
}
else {
    console.log("no");
}

const ordinal = ["th","st","nd","rd"];

colors.forEach((color, i) => {
  const num = i + 1; // המספר הסידורי (1,2,3…)
  
  // אם זה 1 → "st", אם זה 2 → "nd", אם זה 3 → "rd", אחרת "th"
  let suffix = (num === 1) ? ordinal[1] 
             : (num === 2) ? ordinal[2] 
             : (num === 3) ? ordinal[3] 
             : ordinal[0];
  
  console.log(`${num}${suffix} choice is ${color}.`);
});


const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// ["Hello Bradley","Hello Chloe","Hello Jonathan","Hello Michael","Hello Robert","Hello Wes","Hello Zach"]


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const str = epic.reduce((acc, value) => acc + ' ' + value); 
console.log(str); 
// "a long time ago in a galaxy far far away"


const students = [
  {name: "Ray",      course: "Computer Science",       isPassed: true},
  {name: "Liam",     course: "Computer Science",       isPassed: false},
  {name: "Jenner",   course: "Information Technology", isPassed: true},
  {name: "Marco",    course: "Robotics",               isPassed: true},
  {name: "Kimberly", course: "Artificial Intelligence",isPassed: false},
  {name: "Jamie",    course: "Big Data",               isPassed: false},
];

// filter -> רק מי שעבר; map -> לשם בלבד
const passedNames = students
  .filter(student => student.isPassed)
  .map(student => student.name);

console.log(passedNames);
// ["Ray", "Jenner", "Marco"]
