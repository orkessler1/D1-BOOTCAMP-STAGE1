let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}
console.log(Object.values(myObj).length);
console.log(Object.keys(myObj).length);


const address = {
  street: 'Evergreen Terrace',
  number: '742',
  city: 'Springfield',
  state: 'NT',
  zip: '49007',
};

const { street, city } = address;
console.log(street) //Evergreen Terrace
console.log(city) //Springfield


const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
// Default value to the variable science, in case the key doesn't exist in the object student
const { name, scores: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.




